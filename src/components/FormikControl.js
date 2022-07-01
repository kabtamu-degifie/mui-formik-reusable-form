import React from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Rating from "./Rating";
import Select from "./Select";
import Switch from "./Switch";
import TextField from "./TextField";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "textfield":
      return <TextField {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "rating":
      return <Rating {...rest} />;
    case "switch":
      return <Switch {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
