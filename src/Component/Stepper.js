import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, StepLabel, Step, Stepper } from "@material-ui/core";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    margin: "auto"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Step1", "Step2", "Step3", "Step4"];
}

const StepperComp = ({ userData, setUserData, open, setOpen }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  return (
    <Grid className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{""}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid>
        {activeStep === 0 && (
          <>
            <Step1
              open={open}
              setOpen={setOpen}
              userData={userData}
              setUserData={setUserData}
              onNext={handleNext}
            />
          </>
        )}
        {activeStep === 1 && (
          <>
            <Step2
              open={open}
              setOpen={setOpen}
              userData={userData}
              setUserData={setUserData}
              onNext={handleNext}
            />
          </>
        )}
        {activeStep === 2 && (
          <>
            <Step3
              userData={userData}
              setUserData={setUserData}
              onNext={handleNext}
            />
          </>
        )}
        {activeStep === 3 && (
          <>
            <Step4 userData={userData} setUserData={setUserData} />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default StepperComp;
