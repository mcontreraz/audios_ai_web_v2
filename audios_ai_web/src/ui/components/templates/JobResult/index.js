import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";

import { formatDuration } from "../../../utils/functions";

import { Wrapper } from "./styles";

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
          <TableContainer component={Paper}>
            <Wrapper>
              <Table
                stickyHeader
                aria-label="transcription table"
                className="hover"
                size="small"
                style={{ maxHeight: "500px" }}
              >
                <TableBody>
                  {sentences.map((sentence, index) => (
                    <TableRow key={index} hover>
                      <TableCell component="th" scope="row">
                        {sentence.start ? formatDuration(sentence.start) : "-"}
                      </TableCell>
                      <TableCell>{sentence.sentence}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Wrapper>
          </TableContainer>
        </div>
        <div className="col-4">
          <div className="card overflow-auto" style={{ maxHeight: "500px" }}>
            <div className="card-body">
              <p>{analyzedJob}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card mt-4">
            <div className="card-body">Reproductor web</div>
          </div>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className="row">
    //     <div className="col-8 mt-4">

    //       <div className="row">
    //         <div className="col-8">

    //         </div>

    //         <div className="col-4">
    //           <div
    //             className="card overflow-auto"
    //             style={{ maxHeight: "500px" }}
    //           >
    //             <div className="card-body">{analyzedJob}</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-12">
    //       <div className="card mt-4">
    //         <div className="card-body">Reproductor web</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default JobResultTemplate;
