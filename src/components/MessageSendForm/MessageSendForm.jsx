import {Button, Grid, TextField} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {addMessage} from "../../store/messages/actions";

const MessageSendForm = ({chatId}) => {
  const textInput = useRef(null)
  const [message, setMessage] = useState("")
  const dispatch = useDispatch()

  const handleChangeText = (event) => {
    setMessage(event.target.value)
  }

  useEffect(() => {
    if (chatId) {
      textInput.current.focus()
    }
  }, [])

  const handleClick = useCallback(() => {
    dispatch(addMessage(chatId, message))
    setMessage('')
    textInput.current.focus()
  }, [dispatch, chatId, message])

  if (chatId) {
    return (
      <Grid item xs={9}>
        <Grid container spacing={1}>
          <Grid item xs>
            <TextField inputRef={textInput}
                       autoFocus
                       fullWidth
                       variant="outlined"
                       size="small"
                       label="Your message"
                       value={message}
                       onChange={handleChangeText}/>
          </Grid>
          <Grid item>
            <Button variant="contained"
                    size="medium"
                    endIcon={<Icon>send</Icon>}
                    onClick={handleClick}>SEND
            </Button>
          </Grid>
        </Grid>
      </Grid>
    )
  } else {
    return <div></div>
  }
}

export default MessageSendForm