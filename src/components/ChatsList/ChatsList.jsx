import React from "react"
import {Link} from "react-router-dom"
import {List, ListItem, ListItemText} from "@material-ui/core"
import {useSelector} from "react-redux";
import {chatsSelector} from "../../store/chats/selectors";

const ChatsList = ({ chatId }) => {
  const chats = useSelector(chatsSelector)
  if (chats.length === 0) {
    return (
      <List>
        <ListItem>
          <ListItemText>No chats</ListItemText>
        </ListItem>
      </List>
    )
  } else {
    return (
      <List component="nav">
        {chats.map(chatItem => (
          <ListItem
            button
            to={"/chats/" + chatItem.id.toString()}
            component={Link}
            key={chatItem.id}
            selected={(chatId === chatItem.id)}>
            <ListItemText>{chatItem.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    )
  }



}

export default ChatsList