import { put, call } from 'redux-saga/effects';
import { flickrImages } from '../api/media';
import * as types from '../constants/actionTypes';


export default function* searchMediaSaga({ payload }) {
    try {
        const images = yield call(flickrImages, payload);
        yield [
            put({ type: types.FLICKR_IMAGES_SUCCESS, images })
        ];
    } catch (error) {
        yield put({ type: types.SEARCH_MEDIA_FAILURE, error });
    }
}
