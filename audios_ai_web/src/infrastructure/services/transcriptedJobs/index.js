import { put, call, takeLatest, spawn } from "redux-saga/effects";

import { transcriptedJobsActions } from "../../../application/actions/transcriptedJobs";

import api from "../../../infrastructure/api";

const apiTranscriptedJobs = api(process.env.REACT_APP_TRANSCRIBE_API);

export function* fetchTranscriptedJobById(action) {
  try {
    const transcriptedJob = yield call(
      apiTranscriptedJobs.get,
      `/transcripted-jobs/${action.payload}`
    );
    yield put(
      transcriptedJobsActions.fetchTranscriptedJobByIdSuccess(transcriptedJob)
    );
  } catch (error) {
    yield put(
      transcriptedJobsActions.fetchTranscriptedJobByIdError(error.toString())
    );
  }
}

function* watchFetchTranscriptedJobById() {
  yield takeLatest(
    transcriptedJobsActions.fetchTranscriptedJobById,
    fetchTranscriptedJobById
  );
}

export default function* transcriptedJobsSaga() {
  yield spawn(watchFetchTranscriptedJobById);
}
