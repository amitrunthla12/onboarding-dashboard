import React from "react";

import { Grid, makeStyles, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import CommonButton from "./ButtonComponent";

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: "bold"
  },
  discription: {
    opacity: 0.6,
    margin: 10
  },
  conatiner: {
    marginTop: 30,
    display: "block"
  },
  icon: {
    width: "10%",
    height: "5%"
  }
}));

const Step4 = props => {
  const classes = useStyles();
  const { userData: { userName = "" } = {} } = props;
  return (
    <Grid>
      <Grid>
        <Typography variant="h4" className={classes.title}>
          {`Congratulations, ${userName}`}
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="subtitle1" className={classes.discription}>
          {"We have completed onboarding, you can start using Eden!"}
        </Typography>
      </Grid>
      <Grid container className={classes.conatiner}>
        <Grid>
          <CheckCircleOutlineIcon color="primary" className={classes.icon} />
        </Grid>
        <CommonButton title={"Launch"} />
      </Grid>
    </Grid>
  );
};

export default Step4;
