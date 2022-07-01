import React from "react";
import Radio from "./Radio";
import Select from "./Select";
import TextField from "./TextField";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "textfield":
      return <TextField {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
