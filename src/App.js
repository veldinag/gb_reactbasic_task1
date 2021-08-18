import './App.css';
import { useState } from 'react'
import getDate from "./utils";
import Message from "./components/Message";
import { Container, Button, TextField } from '@material-ui/core'
import 'typeface-roboto';

function App() {

  const [id, setId] = useState(1);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([]);

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (author && text) {
      setMessageList([...messageList, {id, author, text, date: getDate()}]);
      setId(id + 1);
      setAuthor('');
      setText('');
    }
  }

  return (
    <>
      <Container maxWidth="sm">
        <h3>ОСТАВЬ СООБЩЕНИЕ</h3>
          <TextField variant="outlined" size="small" label="Ваше имя"
                     value={author} onChange={handleChangeAuthor} />
          <TextField variant="outlined" size="small" multiline rows="4" label="Ваше сообщение"
                     value={text} onChange={handleChangeText} />
          <Button variant="contained" onClick={handleClick}>Отправить</Button>
      </Container>

      <div className='wrapper'>
        <hr />
        {messageList.map((message) => <Message msg={message} key={message.id}/>)}
      </div>
    </>
  );
}

export default App;
