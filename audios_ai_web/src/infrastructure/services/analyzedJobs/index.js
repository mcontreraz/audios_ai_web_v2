import { put, call, takeLatest, spawn } from "redux-saga/effects";

import { analyzedJobsActions } from "../../../application/actions/analyzedJobs";

import api from "../../../infrastructure/api";

const apiAnalyzedJobs = api(process.env.REACT_APP_TRANSCRIBE_API);

export function* fetchAnaliyzedJobById(action) {
  try {
    const analyzedJob = yield call(
      apiAnalyzedJobs.get,
      `/ai-audio-analysis/${action.payload}`
    );
    yield put(analyzedJobsActions.fetchAnaliyzedJobByIdSuccess(analyzedJob));
  } catch (error) {
    yield put(analyzedJobsActions.fetchAnaliyzedJobByIdError(error.toString()));
  }
}

function* watchFetchAnaliyzedJobById() {
  yield takeLatest(
    analyzedJobsActions.fetchAnaliyzedJobById,
    fetchAnaliyzedJobById
  );
}

export default function* analyzedJobsSaga() {
  yield spawn(watchFetchAnaliyzedJobById);
}
