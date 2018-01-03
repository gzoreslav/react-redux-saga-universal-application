import { combineReducers } from 'redux';
import images from './imagesReducer';
import details from './detailsReducer';

const rootReducer = combineReducers({
    images,
    details
});

export default rootReducer;
