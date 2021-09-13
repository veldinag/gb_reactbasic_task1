import React, {useState} from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  IconButton
} from "@material-ui/core";

import {PersonAdd} from "@material-ui/icons";
import {useStyles} from "./style";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isUserAdded, setIsUserAdded] = useState(false);

  const classes = useStyles();

  const setHeadingColor = () => {
    if (isUserAdded) return "primary"
    else if (error !== "") return "error"
    else return "inherit"
  }

  const setHeadingText = () => {
    if (isUserAdded) return "New user added!"
    else if (error !== "") return "An error occured!"
    else return "To register, please enter your email address and password"
  }

  const handleClickOpen = () => {
    setIsUserAdded(false);
    setIsOpen(true);
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setIsOpen(false)
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  };

  const handleAddNewUser = () => {
    if (error === "") {
      setIsUserAdded(true);
    } else {
      setError("Error")
    }
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <PersonAdd color="action"/>
      </IconButton>
      <Dialog
        fullWidth
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle>Register new user</DialogTitle>
        <DialogContent>
          <DialogContentText
            className={classes.heading}
            color={setHeadingColor()}
          >
            {setHeadingText()}
          </DialogContentText>
          {(!isUserAdded) ?
            <><TextField
                variant="outlined"
                margin="dense"
                label="Email"
                autoFocus
                type="email"
                value={email}
                onChange={handleChangeEmail}
                fullWidth
              />
            <TextField
              variant="outlined"
              margin="dense"
              label="Password"
              type="password"
              value={password}
              onChange={handleChangePassword}
              fullWidth
            /></> : ""}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleAddNewUser}
            color="primary"
            disabled={!email || !password}>
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SignUp;