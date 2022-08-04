import React, { useEffect, useState } from "react";

import { Grid, Typography } from "@material-ui/core";

import "./App.css";
import logo from "./logo.png";
import StepperComp from "./Component/Stepper";
import AlertPopup from "./Component/AlertPopup";

function App() {
  const [userData, setUserData] = useState({});
  const [errorOpen, setErrorOpen] = React.useState(false);

  useEffect(() => {
    let obj = {
      userName: "",
      displayName: "",
      workSpaceUrl: "",
      workUrl: "",
      usage: ""
    };
    setUserData(obj);
  }, []);

  return (
    <div className="App">
      <Grid container justifyContent="center" alignItems="center">
        <Grid>
          <img src={logo} alt={""} />
        </Grid>
        <Grid>
          <Typography variant="h4" style={{ fontWeight: "bolder" }}>
            {"Eden"}
          </Typography>
        </Grid>
      </Grid>
      <StepperComp
        userData={userData}
        open={errorOpen}
        setUserData={setUserData}
        setOpen={setErrorOpen}
      />
      {errorOpen && <AlertPopup open={errorOpen} setOpen={setErrorOpen} />}
    </div>
  );
}

export default App;
