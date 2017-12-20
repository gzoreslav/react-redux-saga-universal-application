import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, matchPath} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';


export const configureStore = ({preloadedState, rootReducer, rootSaga}) => {
    if (!preloadedState) {
        preloadedState = window.__PRELOADED_STATE__;
        delete window.__PRELOADED_STATE__;
    }
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(
            rootReducer,
            preloadedState,
            applyMiddleware(sagaMiddleware)
        ),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};

export const doClient = ({App, rootReducer, rootSaga}) => {
    const store = configureStore({rootReducer, rootSaga});
    hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
};

export function handleRender(_apiHandler, _reactRender, _pageRender, _routes, _rootReducer, _rootSaga, _app) {
    return function(req, res) {
        _apiHandler(_reactRender, _pageRender, _routes, _rootReducer, _rootSaga, _app)(req, res);
    }
}

export function apiHandler(_reactRender, _pageRender, _routes, _rootReducer, _rootSaga, _app)  {

    return function(req, res) {
        let selectedRoutes = [];

        _routes.some(route => {
            const match = matchPath(req.url, route);
            if (match) {
                selectedRoutes.push(route);
            }
            return match;
        });

        if (!selectedRoutes.length) {
            _reactRender(_pageRender, null, _rootReducer, _rootSaga, _app)(req, res, null);
        } else {
            let promises = [];
            selectedRoutes
                .map(route => {
                    if (route.loadData) {
                        promises.push(route.loadData());
                    }
                });
            Promise.all(promises).then(data => {
                _reactRender(_pageRender, selectedRoutes[selectedRoutes.length - 1], _rootReducer, _rootSaga, _app)(req, res, data);
            });
        }
    }
}

export function reactRender(_pageRender, _route, _rootReducer, _rootSaga, _app) {
    return function (req, res, data) {
        let preloadedState = _route && _route.getPreloadedState ? _route.getPreloadedState(data) : {};
        const store = configureStore({preloadedState, rootReducer: _rootReducer, rootSaga: _rootSaga});
        const context = {};

        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter
                    location={req.url}
                    context={context}
                >
                    <_app/>
                </StaticRouter>
            </Provider>
        );

        const finalState = store.getState();

        res.send(_pageRender(html, finalState, _route));
    }
}

export function pageRender(html, preloadedState, route) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>${route ? route.pageTitle + ' - ' : ''}react-redux-saga-universal-application</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="client.bundle.js"></script>
      </body>
    </html>
    `
}
