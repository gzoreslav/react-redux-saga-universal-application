import React from 'react';
import { hydrate } from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {BrowserRouter, matchPath} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
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

export function handleRender(config) {

    return function(req, res) {
        config.next(req, res);
    }
}


export function apiHandler(config)  {

    return function(req, res) {
        let selectedRoutes = [];

        config.appData.routes.some(route => {
            const match = matchPath(req.url, route);
            if (match) {
                selectedRoutes.push(route);
            }
            return match;
        });

        if (!selectedRoutes.length) {
            config.next(req, res);
        } else {
            let promises = [];
            selectedRoutes
                .map(route => {
                    if (route.loadData) {
                        promises.push(route.loadData());
                    }
                });
            Promise.all(promises).then(data => {
                config.next(req, res, selectedRoutes[selectedRoutes.length - 1], data);
            });
        }
    }
}

export function reactRender(config) {

    return function (req, res, route, data) {
        let preloadedState = route && route.getPreloadedState ? route.getPreloadedState(data) : {};
        const store = configureStore({preloadedState, ...config.appData});
        const context = {};

        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter
                    location={req.url}
                    context={context}
                >
                    <config.appData.App />
                </StaticRouter>
            </Provider>
        );

        const finalState = store.getState();

        res.send(config.next(html, finalState, route));
    }
}

export function pageRender(config) {

    return function(html, preloadedState, route) {
        return `
            <!doctype html>
            <html>
              <head>
                <title>${config.getPageTitle(route)}</title>
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
            `;
    }
}
