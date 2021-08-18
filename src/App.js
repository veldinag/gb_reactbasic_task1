import './App.css';
import { useState, useEffect, useRef  } from 'react'
import MessageList from "./components/MessageList";
import getDate from "./utils";

function App() {

  const [id, setId] = useState(1);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [lastAuthor, setLastAuthor] = useState('');
  const isFirstMount = useRef(true);

  async function showAlert(param) {
    await setTimeout(() => {alert(param + ', cпасибо за отзыв!')}, 1500);
  }

  useEffect(() => {
      if (isFirstMount.current) {
        isFirstMount.current = false;
        return;
      };
      showAlert(lastAuthor);
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
      setMessageList([...messageList, {id, author, text, date: getDate() }]);
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
