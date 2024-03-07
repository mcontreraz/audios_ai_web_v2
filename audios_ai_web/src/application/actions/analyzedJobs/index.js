import { createSlice, createAction } from "@reduxjs/toolkit";
import initState from "../../../domain/entities/analyzedJobs";


function fetchAnaliyzedJobById(state, action) {
    state.job.loading = true;
}


function fetchAnaliyzedJobByIdSuccess(state, action) {
    state.job.data = action.payload;
    state.job.loading = false;
    state.job.success = true;
}


function fetchAnaliyzedJobByIdError(state, action) {
    state.job.error = action.payload;
    state.job.loading = false;
    state.job.success = false;
}

const fetchJobList = createAction("fetchJobList");

const analyzedJobsSlice = createSlice({
    name: "analyzedJobs",
    initialState: initState,
    reducers: {
        fetchAnaliyzedJobById,
        fetchAnaliyzedJobByIdSuccess,
        fetchAnaliyzedJobByIdError
    }
});

export const analyzedJobsActions = { ...analyzedJobsSlice.actions, fetchJobList };
export default analyzedJobsSlice.reducer;
