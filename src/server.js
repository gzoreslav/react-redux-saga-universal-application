import Express from 'express';
import { handleRender as defaultHandleRender } from 'react-redux-saga-server-side-render-helper';
import { appConfig } from './config';

const handleRender = defaultHandleRender(appConfig);

const app = Express();
const port = 3030;
app.use(Express.static('dist'));
app.use(handleRender);
app.listen(port);
