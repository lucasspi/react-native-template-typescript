import { put, takeLatest, all, call } from "redux-saga/effects";

function* performAuth() {
  yield put({ type: "PERFORM_AUTH_LOADER", loading: true });
  yield put({ type: "PERFORM_LOGIN_SUCCESS", loading: false});
}

function* unPerformAuth() {
  yield put({ type: "PERFORM_AUTH_LOADER", loading: true });
  yield put({ type: "UNPERFORM_LOGIN", loading: false});
}

export default function* actionWatcher() {
  yield takeLatest("PERFORM_AUTH", performAuth)
  yield takeLatest("UNPERFORM_AUTH", unPerformAuth)
}
