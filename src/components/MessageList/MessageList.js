import Message from "../Message";

const MessageList = (props) => {
    return props.msgList.map((message) => <Message msg={message} key={message.id}/>)
}

export default MessageList;