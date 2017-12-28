import { takeLatest } from 'redux-saga/effects';
import { searchMediaSaga, getImageDetails } from './mediaSagas';
import * as types from '../constants/actionTypes';


export function* watchSearchMedia() {
    yield takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}

export function* watchGetImageDetails() {
    yield takeLatest(types.GET_IMAGE_DETAILS_REQUEST, getImageDetails);
}
