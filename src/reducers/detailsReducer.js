import initialState from './initialState';
import * as types from '../constants/actionTypes';
import {mapMetadataRequest, mapMetadataSuccess, mapMetadataFailure} from '../services/reduserHelper';


export default function (state = initialState.details, action) {
    switch (action.type) {
        case types.GET_IMAGE_DETAILS_REQUEST:
            return mapMetadataRequest(state);
        case types.GET_IMAGE_DETAILS_SUCCESS:
            return mapMetadataSuccess(state, action, 'details');
        case types.GET_IMAGE_DETAILS_FAILURE:
            return mapMetadataFailure(state, action, 'details');
        default:
            return state;
    }
}
