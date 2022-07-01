import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Rating as MuiRating,
} from "@mui/material";
import { useField } from "formik";

function Rating({ label, precision, ...rest }) {
  const [field, meta] = useField(rest);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <FormControl error={!!errorText}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <MuiRating id={field.name} {...field} precision={precision} />
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
}

export default Rating;
