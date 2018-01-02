import initialState from './initialState';
import * as types from '../constants/actionTypes';


export default function (state = initialState.images, action) {
    switch (action.type) {
        case types.SEARCH_MEDIA_REQUEST:
            return { ...state, isProcessing: true };
        case types.SEARCH_MEDIA_SUCCESS:
            return { ...state, data: action.images, isProcessing: false };
        case types.SELECTED_IMAGE:
            return { ...state, selected: action.image, isProcessing: false };
        case types.GET_IMAGE_DETAILS_REQUEST:
            return { ...state, isProcessing: true };
        case types.GET_IMAGE_DETAILS_SUCCESS:
            return { ...state, details: action.image, isProcessing: false };
        case types.GET_IMAGE_DETAILS_FAILURE:
            return { ...state, details: {}, isProcessing: false, error: action.error };
        default:
            return state;
    }
}
