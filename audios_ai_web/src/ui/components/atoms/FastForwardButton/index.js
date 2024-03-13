
import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "./styles.css";

const FastForwardButton = ({ className, onClick }) => {
  return (
    <div className={`fast-forward-button ${className}`}>
      <IconButton color="primary" aria-label="Reverse" onClick={onClick}>
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
    </div>
  );
};

FastForwardButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default FastForwardButton;
