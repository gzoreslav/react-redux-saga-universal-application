import initialState from './initialState';
import * as types from '../constants/actionTypes';
import {mapMetadataRequest, mapMetadataSuccess, mapMetadataFailure} from '../services/reduserHelper';


export default function (state = initialState.images, action) {
    switch (action.type) {
        case types.SEARCH_MEDIA_REQUEST:
            return mapMetadataRequest(state);
        case types.SEARCH_MEDIA_SUCCESS:
            return mapMetadataSuccess(state, action, 'images');
        case types.SEARCH_MEDIA_FAILURE:
            return mapMetadataFailure(state, action, 'images');
        case types.SELECTED_IMAGE:
            return { ...state, selected: action.image };
        default:
            return state;
    }
}
