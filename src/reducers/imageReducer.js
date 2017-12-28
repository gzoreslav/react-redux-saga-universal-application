import initialState from './initialState';
import * as types from '../constants/actionTypes';


export default function (state = initialState.images, action) {
    switch (action.type) {
        case types.SEARCH_MEDIA_SUCCESS:
            return {data: action.images};
        case types.SELECTED_IMAGE:
            return { ...state, selected: action.image };
        case types.GET_IMAGE_DETAILS_SUCCESS:
            return {details: action.image};
        default:
            return state;
    }
}
