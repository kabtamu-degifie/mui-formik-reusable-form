import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio as MuiRadio,
  Stack,
} from "@mui/material";
import { Field } from "formik";
import React from "react";

function Radio({ label, name, options, ...rest }) {
  return (
    <Field name={name} {...rest}>
      {({ field, meta }) => {
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (
          <FormControl error={!!errorText}>
            <FormLabel>{label}</FormLabel>

            <Stack direction="row">
              {options.map((option) => {
                return (
                  <FormControlLabel
                    key={option.value}
                    control={
                      <MuiRadio
                        {...field}
                        id={option.value}
                        value={option.value}
                        checked={field.value === option.value}
                      />
                    }
                    label={option.label}
                  />
                );
              })}
            </Stack>
            <FormHelperText>{errorText}</FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default Radio;
