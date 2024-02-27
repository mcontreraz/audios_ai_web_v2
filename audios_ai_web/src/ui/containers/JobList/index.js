import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import JobListTemplate from "../../components/templates/JobList";

import { useDispatch } from "react-redux";
import { jobListActions } from "../../../application/actions/jobList";
import { transcriptedJobsActions } from "../../../application/actions/transcriptedJobs";

import { convertirFormatoFecha, shortenString } from "../../utils/functions";

const JobListContainer = () => {
  const [open, setOpen] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const paginatedJobs = jobs.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const transcriptionString = useSelector(
    (state) => state?.transcriptedJobs?.data?.transcription
  );

  const handleClick = (id) => {
    dispatch(transcriptedJobsActions.fetchTranscriptedJobById(id));
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Vuelve a la primera página con la nueva cantidad de filas
  };

  return (
    <JobListTemplate
      jobs={paginatedJobs}
      page={page}
      rowsPerPage={rowsPerPage}
      count={jobs.length}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default JobListContainer;
