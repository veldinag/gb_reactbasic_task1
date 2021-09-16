import React from 'react';
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AuthAlert = ({status, error, show}) => {

  const setSeverity = () => {
    if (error) {
      return "error";
    } else {
      return "success";
    }
  };

  const setAlertMsg = () => {
    if (error) {
      return `Error: ${error} Try again.`;
    } else {
      switch (status) {
        case "signed-in":
          return `You have successfully logged in.`;
        case "signed-up":
          return `You have successfully registered.`;
        case "signed-out":
          return `You have successfully logged out.`;
        default:
          return ``;
      }
    }
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <Snackbar
      open={show}
      onClose={handleCloseAlert}
      anchorOriginBottomCenter>
      <Alert severity={setSeverity()}>
        {setAlertMsg()}
      </Alert>
    </Snackbar>
  )
};

export default AuthAlert;