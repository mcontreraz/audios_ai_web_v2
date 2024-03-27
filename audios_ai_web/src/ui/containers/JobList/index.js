import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import JobListTemplate from "../../components/templates/JobList";
import { jobListActions } from "../../../application/actions/jobList";
import { formatDate } from "../../utils/functions";

const JobListContainer = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Utiliza el hook useNavigate

  useEffect(() => {
    dispatch(jobListActions.fetchJobList());
  }, [dispatch]);

  const jobsList = useSelector((state) => state?.jobList?.jobs?.data);

  const jobs = jobsList?.map((job) => ({
    job_id: job.job_id,
    name: job.filename,
    status: job.status,
    created_at: formatDate(job?.postedAt),
  }));

  const totalPages = Math.ceil(jobs?.length / rowsPerPage);

  const paginatedJobs = jobs?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  // Modifica esta función para navegar y pasar el id como parámetro
  const handleClickJob = (id) => {
    // Aquí se realiza la navegación
    navigate(`/jobResult/${id}`);
  };

  return (
    <JobListTemplate
      jobs={paginatedJobs}
      page={page}
      rowsPerPage={rowsPerPage}
      count={jobs?.length}
      totalPages={totalPages}
      handleChangePage={handleChange}
      handleClickJob={handleClickJob} // Asegúrate de pasar esta función al template
    />
  );
};

export default JobListContainer;
