import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Switch as MuiSwitch,
} from "@mui/material";
import { useField } from "formik";

function Switch({ label, precision, ...rest }) {
  const [field, meta] = useField(rest);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <FormControl error={!!errorText}>
      <FormControlLabel label={label} control={<MuiSwitch {...field} />} />
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
}

export default Switch;
