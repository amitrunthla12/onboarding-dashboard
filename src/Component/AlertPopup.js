import * as React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Grid } from "@material-ui/core";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertPopup({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please fill all the mandatory field
        </Alert>
      </Snackbar>
    </Grid>
  );
}
