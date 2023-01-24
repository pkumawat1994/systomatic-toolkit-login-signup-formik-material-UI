import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { AuthRegister } from "../../redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { formValidationSchema } from "../../utils/AllValidationSchemas/RegisterSchema";

const Register = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { error, successMessage } = useSelector((state) => state?.reducer);
  console.log(11, error);
  console.log(22, successMessage);

  useEffect(() => {
    if (error) {
      toast.error(error.error);
    }
    if (successMessage) {
      toast.success(successMessage);
      navigate("/login");
    }
  }, [error, successMessage]);

  return (
    <>
      <center>
        <h1>Register Form</h1>
      </center>
      <Formik
        validationSchema={formValidationSchema}
        initialValues={{
          firstName: "",
          email: "",
          password: "",
          address: "",
          number: "",
        }}
        onSubmit={(values) => {
          // console.log(values);
          dispatch(AuthRegister(values));
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <Grid container spacing={6} style={{ justifyContent: "center" }}>
              <Grid item xs={7} lg={7}>
                <TextField
                  name="firstName"
                  fullWidth
                  label="First Name"
                  onChange={handleChange}
                  value={values.firstName}
                  variant="outlined"
                  onBlur={handleBlur}
                />
                <Typography color="red">
                  {errors.firstName && touched.firstName && errors.firstName}
                </Typography>
              </Grid>
              <Grid item xs={7} lg={7}>
                <TextField
                  fullWidth
                  label="E-mail"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  value={values.email}
                />
                <Typography color="red">
                  {errors.email && touched.email && errors.email}
                </Typography>
              </Grid>
              <Grid item xs={7} lg={7}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                <Typography color="red">
                  {errors.password && touched.password && errors.password}
                </Typography>
              </Grid>
              <Grid item xs={7} lg={7}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={values.address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                />
                <Typography color="red">
                  {errors.address && touched.address && errors.address}
                </Typography>
              </Grid>
              <Grid item xs={7} lg={7}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="number"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.number}
                />
                <Typography color="red">
                  {errors.number && touched.number && errors.number}
                </Typography>
              </Grid>
              <Grid item xs={7} lg={7}>
                <Button variant="contained" type="submit">
                  Register
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
