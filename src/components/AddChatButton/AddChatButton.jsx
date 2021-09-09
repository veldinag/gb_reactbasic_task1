import React, {useCallback, useState} from "react"
import {useDispatch} from "react-redux"
import IconButton from "@material-ui/core/IconButton"
import {AddCircle} from "@material-ui/icons"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core"
import {addChatAction} from "../../store/chats/actions"

const AddChatButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [newChat, setNewChat] = useState("")
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleChangeName = (event) => {
    setNewChat(event.target.value)
  }

  const handleAddNewChat = useCallback(() => {
    dispatch(addChatAction(newChat))
    setNewChat("")
    handleClose()
  }, [dispatch, newChat])

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <AddCircle color="primary"/>
      </IconButton>
      <Dialog open={isOpen} onClose={handleClose}>
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
          <Button onClick={handleClose} color="primary">
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