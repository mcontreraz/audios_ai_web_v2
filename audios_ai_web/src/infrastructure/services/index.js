// src/infrastructure/services/index.js
import { fork } from "redux-saga/effects";

// Sagas
import jobListSaga from "./jobList";
import transcriptedJobsSaga from "./transcriptedJobs";
import analyzedJobsSaga from "./analyzedJobs";

export default function* rootSaga() {
  yield fork(jobListSaga);
  yield fork(transcriptedJobsSaga);
  yield fork(analyzedJobsSaga);
}
