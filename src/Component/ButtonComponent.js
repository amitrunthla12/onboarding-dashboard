import React from "react";

import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "38ch"
    }
  }
}));

export default function CommonButton(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props?.onClickHandle();
        }}
      >
        {props?.title}
      </Button>
    </Grid>
  );
}
