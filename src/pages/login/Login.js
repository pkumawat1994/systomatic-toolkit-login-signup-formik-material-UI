import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { AuthLogin } from "../../redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../utils/AllValidationSchemas/LoginSchema";
const Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { error, LoginSuccess } = useSelector((state) => state?.AuthSlice);
  console.log(11, error);
  console.log(22, LoginSuccess);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (LoginSuccess) {
      toast.success("Login SuccessFully...");
      navigate("/dashboard");
    }
  }, [error, LoginSuccess]);

  return (
    <>
      <center>
        <h1>Login Form</h1>
      </center>
      <Formik
        validationSchema={loginSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(AuthLogin(values));
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <Grid container spacing={6} style={{ justifyContent: "center" }}>
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
                <Button variant="contained" type="submit">
                  Login
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
