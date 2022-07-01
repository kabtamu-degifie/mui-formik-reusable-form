import React from "react";
import Select from "./Select";
import TextField from "./TextField";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "textfield":
      return <TextField {...rest} />;
    case "select":
      return <Select {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
