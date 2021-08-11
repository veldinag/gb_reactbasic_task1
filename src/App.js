import './App.css';
import Message from './Message';

function App(props) {

  const text = `Текст, переданный в компонент "Message"!`

  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello {props.name}</h3>
        <Message message={text} />
      </header>
    </div>
  );
}

export default App;
