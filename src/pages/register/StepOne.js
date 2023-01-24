import React from "react";
import { Button, Grid, TextField } from "@mui/material";

const StepOne = () => {
  return (
    <>
      <Grid item xs={7} lg={7}>
        <TextField fullWidth label="First Name" variant="outlined" />
      </Grid>
      <Grid item xs={7} lg={7}>
        <TextField fullWidth label="E-mail" variant="outlined" />
      </Grid>
      <Grid item xs={7} lg={7}>
        <TextField fullWidth label="Password" variant="outlined" />
      </Grid>
    </>
  );
};

export default StepOne;
