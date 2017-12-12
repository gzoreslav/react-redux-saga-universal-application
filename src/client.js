import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './stores/configureStores';

const store = configureStore();

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);