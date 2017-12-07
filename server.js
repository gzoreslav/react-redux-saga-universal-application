import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import eventsApp from './src/reducers';
import App from './src/containers/app.jsx';
import ReactDOMServer from 'react-dom/server';

const app = Express();
const port = 3030;

//Serve static files
app.use(Express.static(__dirname + '/dist'));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
    // Create a new Redux store instance
    const store = createStore(eventsApp);

    // Render the component to a string
    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
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
        <script src="app.bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port);
