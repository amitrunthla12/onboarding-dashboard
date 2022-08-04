import React, { useState } from "react";

import CommonInput from "./InputComponent";
import CommonButton from "./ButtonComponent";

import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: "bold"
  },
  discription: {
    opacity: 0.6,
    margin: 10
  }
}));

function Step1(props) {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <Grid>
      <Grid>
        <Typography variant="h4" className={classes.title}>
          {"Welcome! First things first..."}
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="subtitle1" className={classes.discription}>
          {"You can change them later"}
        </Typography>
      </Grid>
      <Grid container style={{ marginTop: 30, display: "block" }}>
        <CommonInput title="First Name" value={name} setValue={setname} />
        <CommonInput
          title="Display Name"
          value={displayName}
          setValue={setDisplayName}
        />
        <CommonButton
          title={"Create Workshop"}
          onClickHandle={() => {
            let data = { ...props?.userData };
            if (name === "" || displayName === "") {
              props?.setOpen(true);
            } else {
              data.userName = name;
              data.displayName = displayName;
              props?.setUserData(data);
              props?.onNext();
            }
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Step1;
