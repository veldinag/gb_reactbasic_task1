import React, {useState} from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  IconButton,
  Link
} from "@material-ui/core";
import firebase from "firebase";

import {Person} from "@material-ui/icons";
import {useStyles} from "./style";


const AccountForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authStatus, setAuthStatus] = useState("sign-in");
  const [error, setError] = useState("");

  const classes = useStyles();

  const handleSetAuthStatusToSignIn = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setAuthStatus("sign-in");
  };

  const handleSetAuthStatusToSignUp = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setAuthStatus("sign-up");
  };

  const setDialogContentTextColor = (status) => {
    switch (status) {
      case "sign-up" || "sign-in": return "inherit";
      case "auth-ok" || "reg-ok": return "primary";
      case "reg-err" || "auth-err": return "error";
      default: return "";
    }
  };

  const setDialogTitle = (status) => {
    switch (status) {
      case "sign-up" || "reg-ok" || "reg-err":
        return "Register new user";
      case "sign-in" || "auth-ok" || "auth-err" :
        return "Sign in";
      default: return "";
    }
  };

  const setDialogContentText = (status) => {
    switch (status) {
      case "sign-up": {
        return [
          "To register, please enter your email address and password",
          <br/>,
          "(password should be at least 6 characters).",
          <br/>,
          "If you have an account, please ",
          <Link href='#' onClick={handleSetAuthStatusToSignIn}>
            {"sign in"}
          </Link>
        ]
      }
      case "sign-in": {
        return [
          "To sign in, please enter your email address and password.",
          <br/>,
          "If you don't have an account, please ",
          <Link href='#' onClick={handleSetAuthStatusToSignUp}>
            {"register"}
          </Link>
        ]
      }
      case "auth-ok":
        return "You are logged in!";
      case "reg-ok":
        return "New user added!";
      case "reg-err":
        return `Registration error (${error})!`;
      case "auth-err":
        return `Login error! (${error})`;
      default: return "";
    }
    ;
  };

  const handleOpenDialog = () => {
    setAuthStatus("sign-in");
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
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

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setAuthStatus("auth-ok");
    } catch (err) {
      setError(err.message);
      setAuthStatus("auth-err");
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setAuthStatus("reg-ok");
    } catch (err) {
      setError(err.message);
      setAuthStatus("reg-err");
    }
  };

  return (
    <div>
      <IconButton onClick={handleOpenDialog}>
        <Person color="action"/>
      </IconButton>
      <Dialog
        fullWidth
        open={isOpen}
        onClose={handleCloseDialog}
      >
        <DialogTitle className={classes.textAlignCenter}>
          {setDialogTitle(authStatus)}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className={classes.textAlignCenter}
            color={setDialogContentTextColor(authStatus)}
          >
            {setDialogContentText(authStatus)}
          </DialogContentText>
          {(authStatus === "sign-up" || authStatus === "sign-in")
            ? <>
              <TextField
                variant="outlined"
                margin="dense"
                label="Email"
                autoFocus
                type="email"
                value={email}
                onChange={handleChangeEmail}
                fullWidth/>
              <TextField
                variant="outlined"
                margin="dense"
                label="Password"
                type="password"
                value={password}
                onChange={handleChangePassword}
                fullWidth/>
            </>
            : ""}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            color="primary">
            {(authStatus === "auth-ok" || authStatus === "reg-ok")
              ? "Close"
              : "Cancel"}
          </Button>
          {(authStatus === "sign-up")
            ? <Button
              onClick={handleSignUp}
              color="primary"
              disabled={!email || !password}>Register
            </Button>
            : ""}
          {(authStatus === "sign-in")
            ? <Button
              onClick={handleSignIn}
              color="primary"
              disabled={!email || !password}>Sign in
            </Button>
            : ""}
          {(authStatus === "reg-err")
            ? <Button
              onClick={handleSetAuthStatusToSignUp}
              color="primary">Try again
            </Button>
            : ""}
          {(authStatus === "auth-err")
            ? <Button
              onClick={handleSetAuthStatusToSignIn}
              color="primary">Try again
            </Button>
            : ""}
        </DialogActions>
      </Dialog>
    </div>
  )
};

export default AccountForm;