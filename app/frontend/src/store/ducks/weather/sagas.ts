import { put, takeLatest } from "redux-saga/effects";

import { request as req } from "./actions";

function* request() {
  yield console.log("Searching city a city...");
  yield put(req());
}

export function* watchInput() {
  yield takeLatest("REQUEST_KEY", request);
}
