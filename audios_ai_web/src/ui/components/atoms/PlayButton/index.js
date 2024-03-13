import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import "./styles.css";

const PlayButton = ({ className, onClick }) => {
  return (
    <div className={`play-button ${className}`}>
      <IconButton color="primary" aria-label="play" onClick={onClick}>
        <PlayArrowIcon />
      </IconButton>
    </div>
  );
};

PlayButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default PlayButton;
