import {doClient} from './helper';
import App from './containers/App.jsx';
import rootReducer from './reducers';
import rootSaga from './sagas';

doClient({App, rootReducer, rootSaga});