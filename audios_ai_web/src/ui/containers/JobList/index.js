import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import JobListTemplate from "../../components/templates/JobList";

import { useDispatch } from "react-redux";
import { jobListActions } from "../../../application/actions/jobList";
import { transcriptedJobsActions } from "../../../application/actions/transcriptedJobs";

import { convertirFormatoFecha, shortenString } from "../../utils/functions";

const JobListContainer = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobListActions.fetchJobList());
  }, [dispatch]);

  const jobsList = useSelector((state) => state.jobList.jobs.data);

  const jobs = jobsList.map((job) => {
    return {
      id: job.id,
      name: job.filename,
      status: job.status,
      created_at: convertirFormatoFecha(job.created_at),
    };
  });

  const transcriptionString = useSelector(
    (state) => state?.transcriptedJobs?.data?.transcription
  );

  const handleClick = (id) => {
    dispatch(transcriptedJobsActions.fetchTranscriptedJobById(id));
    setMessage(`Previa de la transcripción: ${transcriptionString && shortenString(transcriptionString)}...`);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <JobListTemplate
      jobs={jobs}
      handleClick={handleClick}
      handleClose={handleClose}
      open={open}
      message={message}
    />
  );
};

export default JobListContainer;
