import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    IconButton
} from "@material-ui/core";
import firebase from "firebase";

import {ExitToApp} from "@material-ui/icons";

const SignOut = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [title, setTitle] = useState("Are you sure you want to log out of your account?");
    const [status, setStatus] = useState("DO");

    const handleOpenDialog = () => {
        setIsOpen(true);
    }

    const handleCloseDialog = () => {
        setIsOpen(false);
    };

    const handleSignOut = async () => {
        setError("");
        try {
            await firebase.auth().signOut();
            setTitle("You have successfully logged out");
            setStatus("OK")
        } catch (err) {
            setError(err.message);
            setTitle("An unexpected error occurred (" + error + ").");
            setStatus("ERR")
        }
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
                <DialogTitle>{title}</DialogTitle>
                <DialogActions>
                    {(status === "DO")
                        ? <Button
                            onClick={handleSignOut}
                            color="primary">
                            Sign Out
                        </Button>
                        : ""}
                    {(status === "OK")
                        ? <Button
                            onClick={handleCloseDialog}
                            color="primary">
                            Close
                        </Button>
                        : ""}
                    {(status === "ERR")
                        ? <Button
                            onClick={handleSignOut}
                            color="primary">
                            Try again
                        </Button>
                        : ""}

                </DialogActions>
            </Dialog>
        </div>
    )
};

export default SignOut;