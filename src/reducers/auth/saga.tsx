import { put, takeLatest, all, call } from "redux-saga/effects";

function* performAuth() {
    console.log()
  yield put({ type: "PERFORM_AUTH_LOADER", loading: true });
  yield put({ type: "PERFORM_LOGIN_SUCCESS", loading: false});
}

export default function* actionWatcher() {
  yield takeLatest("PERFORM_AUTH", performAuth)
}
