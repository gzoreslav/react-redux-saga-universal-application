import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watchers';


export default function* startForman() {
    yield fork(watchSearchMedia);
}
