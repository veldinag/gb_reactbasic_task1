import React, {useCallback, useRef, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField
} from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import {AddCircle, RemoveCircle} from "@material-ui/icons"

import {addChat, removeChat} from "../../store/chats/actions";
import {chatsSelector} from "../../store/chats/selectors";

const AddRemoveForm = ({ chatId }) => {

  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isOpenRemove, setIsOpenRemove] = useState(false)
  const [newChat, setNewChat] = useState("")
  const dispatch = useDispatch()
  const chats = useSelector(chatsSelector)
  const currentChatName = (chatId && chats.findIndex(item => item.id === chatId) !== -1)
      ? chats.find(item => item.id === chatId).name
      : ""

  const handleClickOpenAdd = () => {
    setIsOpenAdd(true)
  }

  const handleClickOpenRemove = () => {
    setIsOpenRemove(true)
  }

  const handleCloseAdd = () => {
    setIsOpenAdd(false)
  }

  const handleCloseRemove = () => {
    setIsOpenRemove(false)
  }

  const handleChangeName = (event) => {
    setNewChat(event.target.value)
  }

  const handleAddNewChat = useCallback(() => {
    dispatch(addChat(newChat))
    setNewChat("")
    handleCloseAdd()
  }, [dispatch, newChat])

  const handleRemoveChat = useCallback(() => {
    dispatch(removeChat(chatId))
    handleCloseRemove()
  }, [dispatch, chatId])

  return (
    <Grid container spacing={1}>
      <Grid item>
        <div>
          <IconButton onClick={handleClickOpenAdd}>
            <AddCircle color="primary"/>
          </IconButton>
          <Dialog open={isOpenAdd} onClose={handleCloseAdd}>
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
              <Button onClick={handleCloseAdd} color="primary">
                Cancel
              </Button>
              <Button onClick={handleAddNewChat} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
      <Grid item>
        <div>
          <IconButton onClick={handleClickOpenRemove}>
            <RemoveCircle color="secondary"/>
          </IconButton>
          <Dialog open={isOpenRemove} onClose={handleCloseRemove}>
            <DialogTitle>Delete chat</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete the chat with {currentChatName}
              </DialogContentText>
            </DialogContent>
            <DialogActions>

              <Button onClick={handleCloseRemove} color="primary">
                Cancel
              </Button>
              <Button onClick={handleRemoveChat} color="primary">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    </Grid>
  )
}

export default AddRemoveForm