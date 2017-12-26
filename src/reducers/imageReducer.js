import initialState from './initialState';
import * as types from '../constants/actionTypes';


export default function (state = initialState.images, action) {
    switch (action.type) {
        case types.FLICKR_IMAGES_SUCCESS:
            return {data: action.images};
        case types.SELECTED_IMAGE:
            return { ...state, selected: action.image };
        default:
            return state;
    }
}