import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import "./styles.css";

const ReverseButton = ({ className, onClick }) => {
  return (
    <div className={`reverse-button ${className}`}>
      <IconButton color="primary" aria-label="Reverse" onClick={onClick}>
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
    </div>
  );
};

ReverseButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ReverseButton;
