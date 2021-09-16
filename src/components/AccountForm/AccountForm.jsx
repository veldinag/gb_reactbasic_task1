import React, {useState} from "react";
import {useHistory} from "react-router-dom";
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

import {Person} from "@material-ui/icons";
import {useStyles} from "./style";
import {useDispatch} from "react-redux";
import {signInAction, signUpAction} from "../../store/authorization/actions";
import {ROUTES} from "../../constants";


const AccountForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dialogType, setDialogType] = useState("sign-in");

  const classes = useStyles();

  const handleSetDialogTypeToSignIn = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDialogType("sign-in");
  };

  const handleSetDialogTypeToSignUp = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDialogType("sign-up");
  };

  const setDialogTitle = (dialogType) => {
    switch (dialogType) {
      case "sign-up": return "Register new user";
      case "sign-in": return "Sign in";
      default: return "";
    }
  };

  const setDialogContentText = (dialogType) => {
    switch (dialogType) {
      case "sign-up": {
        return [
          "To register, please enter your email address and password",
          <br/>,
          "(password should be at least 6 characters).",
          <br/>,
          "If you have an account, please ",
          <Link href='#' onClick={handleSetDialogTypeToSignIn}>
            {"sign in"}
          </Link>
        ]
      };
      case "sign-in": {
        return [
          "To sign in, please enter your email address and password.",
          <br/>,
          "If you don't have an account, please ",
          <Link href='#' onClick={handleSetDialogTypeToSignUp}>
            {"register"}
          </Link>
        ]
      };
      default: return "";
    }
    ;
  };

  const handleOpenDialog = () => {
    setDialogType("sign-in");
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
    dispatch(signInAction(email, password));
    history.push(ROUTES.HOME);
    handleCloseDialog();
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    dispatch(signUpAction(email, password));
    history.push(ROUTES.HOME);
    handleCloseDialog();
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
          {setDialogTitle(dialogType)}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className={classes.textAlignCenter}
          >
            {setDialogContentText(dialogType)}
          </DialogContentText>

          <>
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
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            color="primary">
            Cancel
          </Button>
          {(dialogType === "sign-up")
            ? <Button
              onClick={handleSignUp}
              color="primary"
              disabled={!email || !password}>Register
            </Button>
            : ""}
          {(dialogType === "sign-in")
            ? <Button
              onClick={handleSignIn}
              color="primary"
              disabled={!email || !password}>Sign in
            </Button>
            : ""}
        </DialogActions>
      </Dialog>
    </div>
  )
};

export default AccountForm;