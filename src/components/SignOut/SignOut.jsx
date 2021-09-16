import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton
} from "@material-ui/core";

import {ExitToApp} from "@material-ui/icons";

import {signOutAction} from "../../store/authorization/actions";
import {ROUTES} from "../../constants";

const SignOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  }

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const handleSignOut = async () => {
    dispatch(signOutAction());
    history.push(ROUTES.HOME);
    handleCloseDialog();
  };

  return (
    <div>
      <IconButton onClick={handleOpenDialog}>
        <ExitToApp color="action"/>
      </IconButton>
      <Dialog
        fullWidth
        open={isOpen}
        onClose={handleCloseDialog}
      >
        <DialogTitle>
          Are you sure you want to log out of your account?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleSignOut}
            color="primary">
            Sign Out
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

export default SignOut;