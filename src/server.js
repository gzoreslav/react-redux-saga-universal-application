import Express from 'express';
import React from 'react';
//import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import rootReducer from './reducers';
import App from './containers/App.jsx';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { matchPath } from 'react-router-dom';
import routes from './routes';
import configureStore from './stores/configureStores';


const app = Express();
const port = 3030;

//Serve static files
app.use(Express.static('dist'));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
    preloadData(req, res, continueRender);
}

const preloadData = (req, res, proceed) => {
    let promises = [];

    routes.some(route => {
        const match = matchPath(req.url, route);
        if (match && route.loadData) {
            promises.push(route.loadData());
        }
        return match;
    });

    if (!promises.length) {
        proceed(req, res, null);
    } else {
        Promise.all(promises).then(data => {
            // TODO handle more promises in feature if needed
            proceed(req, res, data[0]);
        });
    }
};

function continueRender(req, res, data) {
    let preloadedState = {images: data || []};
    const store = configureStore(preloadedState);
    const context = {};

    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App/>
            </StaticRouter>
        </Provider>
    );

    const finalState = store.getState();

    res.send(renderFullPage(html, finalState));
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>The Simples Redux Universal App</title>
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

app.listen(port);
