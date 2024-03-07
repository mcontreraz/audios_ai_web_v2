import React from "react";
import CardComponent from "../../molecules/Card";

import { formatDuration } from "../../../utils/functions";

const JobResultTemplate = ({ jobResultData, analyzedJob }) => {
  let sentences = [];

  try {
    const transcriptionObject = jobResultData.transcription
      ? JSON.parse(jobResultData.transcription)
      : null;
    sentences = transcriptionObject ? transcriptionObject.sentences : [];
  } catch (error) {
    console.error("Error parsing jobResultData.transcription:", error);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-2">
          <span>Archivo: {jobResultData.job_id}</span>
          <p>
            Duracion:{" "}
            {jobResultData.duration
              ? formatDuration(jobResultData.duration)
              : "Archivo sin informacion de tiempo"}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <CardComponent className="overflow-auto">
            <div className="table table-striped" style={{ maxHeight: "450px" }}>
              <div className="tbody">
                {sentences &&
                  sentences.map((sentence, index) => (
                    <tr key={index}>
                      <td>
                        {sentence.start ? formatDuration(sentence.start) : "-"}
                      </td>
                      <td>{sentence.sentence}</td>
                    </tr>
                  ))}
              </div>
            </div>
          </CardComponent>
        </div>
        <div className="col-4">
          <CardComponent>{analyzedJob}</CardComponent>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card mt-4 shadow">
            <div className="card-body">Reproductor web</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobResultTemplate;
