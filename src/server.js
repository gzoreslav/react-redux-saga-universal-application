import Express from 'express';
import React from 'react';
import routes from './routes';
import rootReducer from './reducers';
import rootSaga from './sagas';
import App from './containers/App.jsx';
import { handleRender, apiHandler, reactRender, pageRender } from './helper';


const handleRenderBinded = handleRender(apiHandler, reactRender, pageRender, routes, rootReducer, rootSaga, App);

const app = Express();
const port = 3030;
app.use(Express.static('dist'));
app.use(handleRenderBinded);
app.listen(port);
