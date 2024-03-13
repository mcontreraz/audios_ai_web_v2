import React from "react";
import { Table } from "reactstrap";
import CardComponent from "../../molecules/Card";

import { formatDuration } from "../../../utils/functions";

import { Wrapper } from "./styles";
import PlayButton from "../../atoms/PlayButton";
import ReverseButton from "../../atoms/ReverseButton";
import FastForwardButton from "../../atoms/FastForwardButton";
import AudioSlider from "../../atoms/AudioSlider";


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
    <Wrapper>
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
            <CardComponent className="overflow-auto card-body">
              <Table size="sm" hover className="result-table">
                <thead>
                  <tr>
                    <th>Start</th>
                    <th>Sentence</th>
                  </tr>
                </thead>
                <tbody>
                  {sentences &&
                    sentences.map((sentence, index) => (
                      <tr key={index}>
                        <td>
                          {sentence.start
                            ? formatDuration(sentence.start)
                            : "-"}
                        </td>
                        <td>{sentence.sentence}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardComponent>
          </div>
          <div className="col-4">
            <CardComponent>{analyzedJob}</CardComponent>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-2">
            <CardComponent>
              <div className="row justify-content-center">
                <AudioSlider value={0} onChange={(value) => console.log(value)} />
                <ReverseButton className={'reverse-button'}/>
                <PlayButton />
                <FastForwardButton />
              </div>
            </CardComponent>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default JobResultTemplate;
