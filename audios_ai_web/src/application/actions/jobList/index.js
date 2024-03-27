// src/application/actions/jobList/index.js
import { createSlice, createAction } from "@reduxjs/toolkit";
import initState from "../../../domain/entities/jobList";

function fetchJobs(state, action) {
    state.jobs.loading = true;
}

function fetchJobsSuccess(state, action) {
    state.jobs.data = action.payload;
    state.jobs.loading = false;
    state.jobs.success = true;
}

function fetchJobsError(state, action) {
    state.jobs.error = action.payload;
    state.jobs.loading = false;
    state.jobs.success = false;
}

function fetchJobById(state, action) {
    state.jobsById.loading = true;
}

function fetchJobByIdSuccess(state, action) {
    state.jobsById.data = action.payload;
    state.jobsById.loading = false;
    state.jobsById.success = true;
}

function fetchJobByIdError(state, action) {
    state.jobsById.error = action.payload;
    state.jobsById.loading = false;
    state.jobsById.success = false;
}


// Crear una acción adicional si es necesario para disparar el proceso de carga de la lista de trabajos.
const fetchJobList = createAction("fetchJobList");

const jobListSlice = createSlice({
    name: "jobList",
    initialState: initState,
    reducers: {
        fetchJobs,
        fetchJobsSuccess,
        fetchJobsError,
        fetchJobById,
        fetchJobByIdSuccess,
        fetchJobByIdError,
    }
});


export const jobListActions = { ...jobListSlice.actions, fetchJobList };
export default jobListSlice.reducer;
