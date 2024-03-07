import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobResultTemplate from "../../components/templates/JobResult";
import { useParams } from "react-router-dom";
import { transcriptedJobsActions } from "../../../application/actions/transcriptedJobs";
import { analyzedJobsActions } from "../../../application/actions/analyzedJobs";

const JobResultContainer = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const id = useParams().id;
  const dispatch = useDispatch();

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

  const audioRef = `$(
    /Users/mcontreras/Documents/projects/transcribe_api_v3/audios/${audioTrackName})`;

  // Controladores para el reproductor de audio
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkipTo = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <JobResultTemplate
      jobResultData={transcriptedJob}
      handlePlayPause={handlePlayPause}
      handleSkipTo={handleSkipTo}
      isPlaying={isPlaying}
      audioRef={audioRef}
      audioTrackName={audioTrackName}
      analyzedJob={analyzedJob}
    />
  );
};

export default JobResultContainer;
