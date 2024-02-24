// src/sagas/index.js
import { all } from 'redux-saga/effects';
import jobListSagas from './jobListSagas'; // Asegúrate de que esta ruta sea correcta
import transcriptedJobsSagas from './transcriptedJobsSagas';

export default function* rootSaga() {
  yield all([
    jobListSagas(),
    transcriptedJobsSagas(),
    // otras sagas...
  ]);
}
