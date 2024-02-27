import React from "react";
import TextField from "@mui/material/TextField";

function TextInput({ label, className }) {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      className={className}
      sx={{ m: 1, width: '30ch' }}
    />
  );
}

export default TextInput;
