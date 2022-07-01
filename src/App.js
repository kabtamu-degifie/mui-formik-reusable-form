import "./App.css";
import { Button, Grid } from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "./components/FormikControl";

function App() {
  const initialValues = {
    textField: "",
    select: "",
    radio: "",
    checkbox: [],
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    textField: Yup.string().required().label("TextField"),
    select: Yup.string().required().label("Required"),
    radio: Yup.string().required().label("Radio"),
    checkbox: Yup.array().min(1).label("Checkbox"),
  });

  const selectOptions = [
    { label: "None", value: "" },
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
  ];

  const radioOptions = [
    { label: "Option 1", value: "opt11" },
    { label: "Option 2", value: "opt12" },
    { label: "Option 2", value: "opt13" },
  ];

  const checkboxOptions = [
    { label: "Option 1", value: "optn1" },
    { label: "Option 2", value: "optn2" },
    { label: "Option 2", value: "optn3" },
  ];

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <Grid container spacing={4} m={2}>
                <Grid item md={12}>
                  <FormikControl
                    control="textfield"
                    name="textField"
                    label="TextField"
                  />
                </Grid>

                <Grid item md={12}>
                  <FormikControl
                    control="select"
                    name="select"
                    label="Select"
                    options={selectOptions}
                  />
                </Grid>

                <Grid item md={12}>
                  <FormikControl
                    control="radio"
                    name="radio"
                    label="Radio"
                    options={radioOptions}
                  />
                </Grid>

                <Grid item md={12}>
                  <FormikControl
                    control="checkbox"
                    name="checkbox"
                    label="Checkbox"
                    options={checkboxOptions}
                  />
                </Grid>
                <Grid item md={12}>
                  <Button variant="contained" color="success" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
