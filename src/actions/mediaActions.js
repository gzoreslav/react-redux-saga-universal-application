import * as types from '../constants/actionTypes';

export const searchMediaAction = (payload) => ({
    type: types.SEARCH_MEDIA_REQUEST,
    payload
});

export const selectImageAction = (image) => ({
    type: types.SELECTED_IMAGE,
    image
});
