import './Message.css';

function Message(props) {
    return (
        <div>
            <h1 className="message">В модуль передан следующий текст: <span>{props.message}</span></h1>
        </div>
    );
}

export default Message;
