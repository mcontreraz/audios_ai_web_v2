import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobResultTemplate from "../../components/templates/JobResult";
import { useParams } from "react-router-dom";
import { transcriptedJobsActions } from "../../../application/actions/transcriptedJobs";
import { analyzedJobsActions } from "../../../application/actions/analyzedJobs";

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
  }, [dispatch, id]);


  // Proporcionar un objeto vacío como valor por defecto si state.transcriptedJobs.data es null o undefined
  const transcriptedJob = useSelector(
    (state) => state?.transcriptedJobs?.data || {}
  );

  const audioTrackName = useSelector(
    (state) => state?.transcriptedJobs?.data?.job_id || {}
  );

  const analyzedJob = useSelector(
    (state) => state?.analyzedJobs?.job.data?.ai_json_analysis || null
  );


  return (
    <JobResultTemplate
      jobResultData={transcriptedJob}
      analyzedJob={analyzedJob}
      audioPlayerRef={audioPlayerRef}
      handleRowClick={handleRowClick}
    />
  );
};

export default JobResultContainer;
