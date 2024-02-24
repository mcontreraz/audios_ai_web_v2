// src/application/actions/index.js
import { combineReducers } from '@reduxjs/toolkit';
import jobListReducer from './jobList';
import transcriptedJobsReducer from './transcriptedJobs';

const rootReducer = combineReducers({
  jobList: jobListReducer,
  transcriptedJobs: transcriptedJobsReducer,
  // otros reducers...
});

export default rootReducer;
