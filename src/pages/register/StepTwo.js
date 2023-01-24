import React from "react";
import { Button, Grid, TextField } from "@mui/material";

const StepTwo = () => {
  return (
    <>
      <Grid item xs={7} lg={7}>
        <TextField fullWidth label="Address" variant="outlined" />
      </Grid>
      <Grid item xs={7} lg={7}>
        <TextField fullWidth label="Number" variant="outlined" />
      </Grid>
    </>
  );
};

export default StepTwo;
