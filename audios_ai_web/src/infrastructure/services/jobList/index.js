import { put, call, takeLatest, spawn } from 'redux-saga/effects';

// Importa las acciones específicas de éxito y error
import { jobListActions } from '../../../application/actions/jobList'; 

// Importación de la API
import api from '../../../infrastructure/api';

// Acceder a la variable de entorno correctamente
const apiJobList = api(process.env.REACT_APP_TRANSCRIBE_API);

export function* fetchJobList() {
    try {
        const jobList = yield call(apiJobList.get, '/jobs-list');
        yield put(jobListActions.fetchJobsSuccess(jobList)); // Usa la acción de éxito correcta
    } catch (error) {
        yield put(jobListActions.fetchJobsError(error.toString())); // Usa la acción de error correcta
    }
}

function* watchFetchJobList() {
  yield takeLatest(jobListActions.fetchJobList, fetchJobList);
}

export default function* jobListSaga() {
  yield spawn(watchFetchJobList);
}
