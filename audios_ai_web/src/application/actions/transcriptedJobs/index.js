import { createSlice, createAction } from "@reduxjs/toolkit";

import initState from "../../../domain/entities/transcriptedJobs";

function fetchTranscriptedJobById(state, action) {
  state.loading = true;
}

function fetchTranscriptedJobByIdSuccess(state, action) {
  state.data = action.payload; // Asumiendo que el payload es el trabajo transcrito encontrado
  state.loading = false;
  state.success = true;
}

function fetchTranscriptedJobByIdError(state, action) {
  state.jobs.error = action.payload;
  state.jobs.loading = false;
  state.jobs.success = false;
}

const fetchTranscriptedJobByIdAction = createAction("fetchTranscriptedJobByIdAction");

// Actualiza tu slice para incluir las nuevas acciones
const transcriptedJobsSlice = createSlice({
  name: "transcriptedJobs",
  initialState: initState,
  reducers: {
    fetchTranscriptedJobById,
    fetchTranscriptedJobByIdSuccess,
    fetchTranscriptedJobByIdError,
  },
});

export const transcriptedJobsActions = {
  ...transcriptedJobsSlice.actions,
  fetchTranscriptedJobByIdAction,
};
export default transcriptedJobsSlice.reducer;
