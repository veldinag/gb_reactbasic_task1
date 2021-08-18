import './Message.css'

const Message = (props) => {
    return (
        <div className='msg-box'>
            <span className='date'>Оставлено: {props.msg.date}</span>
            <span className='msg'>&#8220;{props.msg.text}&#8221;</span>
            <span className='author'>Автор: {props.msg.author}</span>

        </div>
    )
}

export default Message;