import { TextField as MuiTextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

function TextField({ label, ...rest }) {
  const [field, meta] = useField(rest);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <MuiTextField
      {...field}
      label={label}
      error={!!errorText}
      helperText={errorText}
      size="small"
    />
  );
}

export default TextField;
