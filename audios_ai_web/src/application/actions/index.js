// src/application/actions/index.js
import { combineReducers } from '@reduxjs/toolkit';
import jobListReducer from './jobList';
import transcriptedJobsReducer from './transcriptedJobs';
import analyzedJobsReducer from './analyzedJobs';

const rootReducer = combineReducers({
  jobList: jobListReducer,
  transcriptedJobs: transcriptedJobsReducer,
  analyzedJobs: analyzedJobsReducer,
  // otros reducers...
});

export default rootReducer;
