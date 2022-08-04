import React, { useState } from "react";

import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import { Grid, makeStyles, Typography } from "@material-ui/core";

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
  cardConatiner: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    padding: 10,
    borderRadius: 5,
    textAlign: "start",
    width: "25%",
    margin: 20
  },
  subTitle: {
    opacity: 0.6,
    fontSize: 14
  }
}));

function Step3(props) {
  const classes = useStyles();
  const [isActive, setIsActive] = useState("self");

  return (
    <Grid>
      <Grid>
        <Typography variant="h4" className={classes.title}>
          {"How are you planing to use Eden?"}
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="subtitle1" className={classes.discription}>
          {"We'll streamline your setup experience accordingly."}
        </Typography>
      </Grid>
      <Grid container className={classes.conatiner}>
        <Grid className={classes.cardConatiner}>
          <Grid
            onClick={() => setIsActive("self")}
            className={classes.card}
            style={{
              border:
                isActive === "self"
                  ? "1px solid #3f51b5"
                  : "1px solid whitesmoke"
            }}
          >
            <Grid>
              <PersonIcon color={isActive === "self" ? "primary" : "black"} />
            </Grid>
            <Grid>
              <Typography variant="h6" className={classes.title}>
                {"For myself"}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1" className={classes.subTitle}>
                {"Write better. Think more clearly. Stay organized."}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            onClick={() => setIsActive("team")}
            className={classes.card}
            style={{
              border:
                isActive === "team"
                  ? "1px solid #3f51b5"
                  : "1px solid whitesmoke"
            }}
          >
            <Grid>
              <GroupIcon color={isActive === "team" ? "primary" : "black"} />
            </Grid>
            <Grid>
              <Typography variant="h6" className={classes.title}>
                {"With my team"}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1" className={classes.subTitle}>
                {"Wikis, docs, task &  projects, all in one place."}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <CommonButton title={"Create Workshop"} onClickHandle={props?.onNext} />
      </Grid>
    </Grid>
  );
}

export default Step3;
