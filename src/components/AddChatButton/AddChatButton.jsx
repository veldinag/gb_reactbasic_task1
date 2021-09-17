import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {AddCircle} from "@material-ui/icons";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";
import {
  addChatAction,
  addNewChatToFirebaseChatsAction,
  getChatsFromFirebaseChatsAction
} from "../../store/chats/actions";

const AddChatButton = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [newChat, setNewChat] = useState("");
  const dispatch = useDispatch();

  const handleOpenDialog = () => {
    setIsOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  const handleChangeName = (event) => {
    setNewChat(event.target.value);
  };

  const handleAddNewChat = useCallback(() => {
    //dispatch(addChatAction(newChat));
    dispatch(addNewChatToFirebaseChatsAction(newChat));
    setNewChat("");
    handleCloseDialog();
  }, [dispatch, newChat])

  return (
    <div>
      <IconButton onClick={handleOpenDialog}>
        <AddCircle color="primary"/>
      </IconButton>
      <Dialog open={isOpenDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add new chat</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please write user's name
          </DialogContentText>
          <TextField
            variant="outlined"
            margin="dense"
            label="Name"
            autoFocus
            value={newChat}
            onChange={handleChangeName}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleAddNewChat}
            color="primary"
            disabled={!newChat}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddChatButton