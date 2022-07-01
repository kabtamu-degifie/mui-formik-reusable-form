import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";
import React from "react";

function Select({ label, options, ...rest }) {
  const [field, meta] = useField(rest);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <FormControl sx={{ minWidth: 235 }} error={!!errorText}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect {...field} label={label} size="small">
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </MuiSelect>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
}

export default Select;
