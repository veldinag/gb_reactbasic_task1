import React, {useCallback, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import IconButton from "@material-ui/core/IconButton"
import {RemoveCircle} from "@material-ui/icons"
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core"
import {chatsSelector} from "../../store/chats/selectors"
import {removeChat} from "../../store/chats/actions"
import {removeMessages} from "../../store/messages/actions";


const RemoveChatButton = ({chatId}) => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const chats = useSelector(chatsSelector)
    const currentChatName = (chatId && chats.findIndex(item => item.id === chatId) !== -1)
        ? chats.find(item => item.id === chatId).name
        : ""

    const handleClickOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleRemoveChat = useCallback(() => {
        dispatch(removeChat(chatId))
        dispatch(removeMessages(chatId))
        handleClose()
    }, [dispatch, chatId])

    if ((chats.length !== 0) && chatId) {
        return (
            <div>
                <IconButton onClick={handleClickOpen}>
                    <RemoveCircle color="secondary"/>
                </IconButton>
                <Dialog open={isOpen} onClose={handleClose}>
                    <DialogTitle>Delete chat</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete the chat with {currentChatName}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleRemoveChat} color="primary">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default RemoveChatButton