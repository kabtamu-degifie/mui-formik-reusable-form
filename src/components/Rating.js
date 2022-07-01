import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Rating as MuiRating,
} from "@mui/material";
import { useField } from "formik";

function Rating({ label, precision, ...rest }) {
  const [field, meta] = useField(rest);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <FormControl error={!!errorText}>
      <FormControlLabel
        label={label}
        labelPlacement="start"
        control={<MuiRating {...field} precision={precision} />}
      />
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
}

export default Rating;
