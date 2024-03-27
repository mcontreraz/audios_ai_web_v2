import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobResultTemplate from "../../components/templates/JobResult";
import { useParams } from "react-router-dom";
import { transcriptedJobsActions } from "../../../application/actions/transcriptedJobs";
import { analyzedJobsActions } from "../../../application/actions/analyzedJobs";
import { jobListActions } from "../../../application/actions/jobList";

const JobResultContainer = () => {
  const id = useParams().id;

  const dispatch = useDispatch();

  const audioPlayerRef = useRef(null);

  const handleRowClick = (startTime) => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.audioEl.current.currentTime = startTime;
    }
  };

  useEffect(() => {
    dispatch(transcriptedJobsActions.fetchTranscriptedJobById(id));
    dispatch(analyzedJobsActions.fetchAnaliyzedJobById(id));
    dispatch(jobListActions.fetchJobById(id));
  }, [dispatch, id]);

  // Proporcionar un objeto vacío como valor por defecto si state.transcriptedJobs.data es null o undefined
  const transcriptedJob = useSelector(
    (state) => state?.transcriptedJobs?.data || {}
  );

  const analyzedJob = useSelector(
    (state) => state?.analyzedJobs?.job.data?.ai_json_analysis || null
  );

  const fileData = useSelector((state) => state?.jobList?.jobsById?.data);

  return (
    <JobResultTemplate
      jobResultData={transcriptedJob}
      analyzedJob={analyzedJob}
      fileData={fileData}
      audioPlayerRef={audioPlayerRef}
      handleRowClick={handleRowClick}
    />
  );
};

export default JobResultContainer;
