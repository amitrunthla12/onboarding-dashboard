import React, { useState } from "react";

import { Grid, makeStyles, TextField, Typography } from "@material-ui/core";

import CommonInput from "./InputComponent";
import CommonButton from "./ButtonComponent";

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: "bold"
  },
  discription: {
    opacity: 0.6,
    margin: 10
  }
}));

function Step2(props) {
  const classes = useStyles();
  const [workSpaceName, setWorkSpaceName] = useState("");
  const [workSpaceUrl, setWorkSpaceUrl] = useState("");

  return (
    <Grid>
      <Grid>
        <Typography variant="h4" className={classes.title}>
          {"Let's set up a home for all your work"}
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="subtitle1" className={classes.discription}>
          {"You can always create another workspace later"}
        </Typography>
      </Grid>
      <Grid container style={{ marginTop: 30, display: "block" }}>
        <CommonInput
          title="Workspace Name"
          value={workSpaceName}
          setValue={setWorkSpaceName}
        />
        <CommonInput
          title="Workspace URL (optional)"
          value={workSpaceUrl}
          setValue={setWorkSpaceUrl}
          defaultValue="www.eden.com/"
        />
        <CommonButton
          title={"Create Workshop"}
          onClickHandle={() => {
            let data = { ...props?.userData };
            if (workSpaceName === "") {
              props?.setOpen(true);
            } else {
              data.workSpaceName = workSpaceName;
              data.workSpaceUrl = workSpaceUrl;
              props?.setUserData(data);
              props?.onNext();
            }
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Step2;
