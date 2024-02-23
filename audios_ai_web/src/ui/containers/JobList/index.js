import React from "react";
import JobListTemplate from "../../components/templates/JobList";

const JobListContainer = () => {
  const jobs = [
    {
      "id": 1,
      "name": "Job 1",
      "status": "Completed"
    },
    {
      "id": 2,
      "name": "Job 2",
      "status": "In Progress"
    },
    {
      "id": 3,
      "name": "Job 3",
      "status": "Failed"
    },
    {
      "id": 4,
      "name": "Job 4",
      "status": "Completed"
    },
    {
      "id": 5,
      "name": "Job 5",
      "status": "In Progress"
    },
    {
      "id": 6,
      "name": "Job 6",
      "status": "Failed"
    },
    {
      "id": 7,
      "name": "Job 7",
      "status": "Completed"
    },
    {
      "id": 8,
      "name": "Job 8",
      "status": "In Progress"
    },
    {
      "id": 9,
      "name": "Job 9",
      "status": "Failed"
    },
    {
      "id": 10,
      "name": "Job 10",
      "status": "Completed"
    }
  ]
  
  return <JobListTemplate jobs={jobs}/>;
};

export default JobListContainer;
