import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import JobListTemplate from "../../components/templates/JobList";
import { jobListActions } from "../../../application/actions/jobList";
import { transcriptedJobsActions } from "../../../application/actions/transcriptedJobs";
import { convertirFormatoFecha } from "../../utils/functions";

const JobListContainer = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1); // Comienza desde la página 1
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobListActions.fetchJobList());
  }, [dispatch]);

  const jobsList = useSelector((state) => state.jobList.jobs.data);

  const jobs = jobsList.map((job) => ({
    id: job.id,
    name: job.filename,
    status: job.status,
    created_at: convertirFormatoFecha(job.created_at),
  }));

  // Calcula el total de páginas
  const totalPages = Math.ceil(jobs.length / rowsPerPage);

  const paginatedJobs = jobs.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <JobListTemplate
      jobs={paginatedJobs}
      page={page}
      rowsPerPage={rowsPerPage}
      count={jobs.length}
      totalPages={totalPages} // Pasas el total de páginas como prop
      handleChangePage={handleChange}
    />
  );
};

export default JobListContainer;
