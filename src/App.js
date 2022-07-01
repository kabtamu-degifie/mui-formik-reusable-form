import "./App.css";
import { Box, Button, Grid } from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "./components/FormikControl";

function App() {
  const initialValues = {
    textField: "",
    select: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    textField: Yup.string().required().label("TextField"),
    select: Yup.string().required().label("Required"),
  });

  const selectOptions = [
    { label: "None", value: "" },
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
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
