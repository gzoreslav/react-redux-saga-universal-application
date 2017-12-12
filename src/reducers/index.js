import { combineReducers } from 'redux';
import images from './imageReducer';

const rootReducer = combineReducers({
    images
});

export default rootReducer;
