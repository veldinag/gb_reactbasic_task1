import './App.css';
import { useState, useEffect, useRef  } from 'react'
import MessageList from "./components/MessageList";

function App() {

  const [id, setId] = useState(1);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [lastAuthor, setLastAuthor] = useState('');
  const isFirstMount = useRef(true);

   useEffect(() => {
     if (isFirstMount.current) {
       isFirstMount.current = false;
       return;
     };
     alert(lastAuthor + ', cпасибо за отзыв!');
   }, [lastAuthor]);

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (author && text) {
      setLastAuthor(author);
      const item = {};
      const msgList = messageList;
      const currentDate = new Date();
      const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
      };
      item.id = id;
      item.author = author;
      item.text = text;
      item.date = currentDate.toLocaleString("ru", options);
      msgList.push(item)
      setMessageList(msgList);
      setId(id + 1);
      setAuthor('');
      setText('');
    }
  }

  return (
    <>
      <div className='input-form'>
        <h2>Оставь свой отзыв</h2>
          <input type='text' placeholder='Ваше имя' value={author} onChange={handleChangeAuthor}/>
          <textarea placeholder='Ваше сообщение' value={text} onChange={handleChangeText}/>
          <button onClick={handleClick}>Отправить</button>
      </div>

      <div className='wrapper'>
        <hr />
        <MessageList msgList={messageList}/>
      </div>
    </>
  );
}

export default App;
