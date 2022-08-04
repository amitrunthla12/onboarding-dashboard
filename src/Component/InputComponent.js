import React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch"
    }
  }
}));

export default function CommonInput(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        placeholder={props?.defaultValue}
        id="outlined-basic"
        label={props?.title}
        value={props?.value}
        onChange={e => {
          props?.setValue(e.target.value);
        }}
        variant="outlined"
      />
    </form>
  );
}
