import React from "react";
import Slider from "@mui/material/Slider";

const AudioSlider = ({ value, onChange }) => {
  const handleSliderChange = (event, newValue) => {
    // Llamar a la función de búsqueda con el valor actual del slider
    onChange(newValue);
  };

  return (
    <div className="m-2">
      <Slider
        value={value}
        onChange={handleSliderChange}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
};

export default AudioSlider;
