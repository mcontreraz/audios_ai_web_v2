import React from "react";
import { Table } from "reactstrap";
import CardComponent from "../../molecules/Card";
import { Wrapper } from "./styles";
import ReactAudioPlayer from "react-audio-player";

import { formatDuration } from "../../../utils/functions";

const JobResultTemplate = ({
  jobResultData,
  analyzedJob,
  audioPlayerRef,
  handleRowClick,
  fileData,
}) => {
  let phrase_result = [];

  try {
    phrase_result = jobResultData.phrase_result || [];
  } catch (error) {
    console.error("Error parsing jobResultData.transcription:", error);
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-2">
            <span>Archivo: {fileData.filename}</span>
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
                  {phrase_result &&
                    phrase_result.map((sentence, index) => (
                      <tr
                        key={index}
                        onClick={() => handleRowClick(sentence.start / 1000)}
                      >
                        <td>
                          {sentence.start
                            ? formatDuration(sentence.start)
                            : "-"}
                        </td>
                        <td>{sentence.phrase}</td>
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
                {/* <AudioSlider value={0} onChange={(value) => console.log(value)} />
                <ReverseButton className={'reverse-button'}/>
                <PlayButton />
                <FastForwardButton /> */}

                <ReactAudioPlayer
                  src={"/audios/" + fileData.filename}
                  ref={audioPlayerRef}
                  controls
                />
              </div>
            </CardComponent>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default JobResultTemplate;
