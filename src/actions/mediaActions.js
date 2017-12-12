import * as types from '../constants/actionTypes';

export const searchMediaAction = (payload) => ({
    type: types.SEARCH_MEDIA_REQUEST,
    payload
});
