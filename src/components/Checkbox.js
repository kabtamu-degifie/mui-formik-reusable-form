import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Checkbox as MuiCheckbox,
  Stack,
} from "@mui/material";
import { Field } from "formik";
import React from "react";

function Checkbox({ label, name, options, ...rest }) {
  return (
    <Field name={name} {...rest}>
      {({ field, meta }) => {
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (
          <FormControl error={!!errorText}>
            <FormLabel>{label}</FormLabel>
            <Stack direction="row">
              {options.map((option, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    label={option.label}
                    control={
                      <MuiCheckbox
                        {...field}
                        checked={field.value.includes(option.value)}
                        value={option.value}
                      />
                    }
                  />
                );
              })}
            </Stack>
            <FormHelperText> {errorText} </FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default Checkbox;
