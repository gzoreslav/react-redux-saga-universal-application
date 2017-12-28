import { fork, all } from 'redux-saga/effects';
import { watchSearchMedia, watchGetImageDetails } from './watchers';


export default function* root() {
    yield all([
        fork(watchSearchMedia),
        fork(watchGetImageDetails)
    ])
}
