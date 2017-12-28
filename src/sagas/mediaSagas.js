import { put, call } from 'redux-saga/effects';
import { flickrImages, imageDetail } from '../api/media';
import * as types from '../constants/actionTypes';


export function* searchMediaSaga({ payload }) {
    try {
        const images = yield call(flickrImages, payload);
        yield [
            put({ type: types.SEARCH_MEDIA_SUCCESS, images }),
            put({ type: types.SELECTED_IMAGE, image: images && images[0] })
        ];
    } catch (error) {
        yield put({ type: types.SEARCH_MEDIA_FAILURE, error });
    }
}


export function* getImageDetails({ payload }) {
    try {
        const image = yield call(imageDetail, payload);
        yield [
            put({ type: types.GET_IMAGE_DETAILS_SUCCESS, image })
        ];
    } catch (error) {
        yield put({ type: types.GET_IMAGE_DETAILS_FAILURE, error });
    }
}
