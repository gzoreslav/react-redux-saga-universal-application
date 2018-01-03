import { put, call } from 'redux-saga/effects';
import { flickrImages, imageDetail } from '../api/media';
import * as types from '../constants/actionTypes';


export function* searchMediaSaga({ payload }) {
    try {
        const response = yield call(flickrImages, payload);
        yield [
            put({ type: types.SEARCH_MEDIA_SUCCESS, images: response }),
            put({ type: types.SELECTED_IMAGE, image: response && response.data && response.data[0] })
        ];
    } catch (error) {
        const response = {
            data: [],
            selected: {},
            metadata: {
                error
            }
        };
        yield put({ type: types.SEARCH_MEDIA_FAILURE, details: response });
    }
}


export function* getImageDetails({ payload }) {
    try {
        const response = yield call(imageDetail, payload);
        yield [
            put({ type: types.GET_IMAGE_DETAILS_SUCCESS, details: response })
        ];
    } catch (error) {
        const response = {
            data: {},
            metadata: {
                error
            }
        };
        yield put({ type: types.GET_IMAGE_DETAILS_FAILURE, details: response });
    }
}
