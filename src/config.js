import routes from './routes';
import rootReducer from './reducers';
import rootSaga from './sagas';
import App from './containers/App.jsx';
import { apiHandler, reactRender, pageRender } from 'react-redux-saga-server-side-render-helper';


const appName = 'react-redux-saga-universal-application v3';

export const appData = {
    routes,
    rootReducer,
    rootSaga,
    App
};

const pageConfig = {
    appName,
    getPageTitle: route => `${route ? route.pageTitle + ' - ' : ''}${appName}`,
    appData
};

const reactConfig = {
    next: pageRender(pageConfig),
    appData
};

const apiConfig = {
    next: reactRender(reactConfig),
    appData
};

export const appConfig = {
    next: apiHandler(apiConfig),
    appData
};
