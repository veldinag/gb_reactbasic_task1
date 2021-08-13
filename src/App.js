import './App.css';
import Message from './Message';
import Counter from './components/counter/Counter';
import CounterClass from './components/counter-class/CounterClass'
import Form from './components/form/Form'
import { useState, useCallback } from 'react'

function App(props) {

  const text = `Текст, переданный в компонент "Message"!`

  const [name, setName] = useState("");

  const handleChange = useCallback((e) => {
    setName(e.target.value)
}, []);


  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello {props.name}</h3>
        <Message message={text} />
        <Counter />
        <CounterClass />
        <Form name={name} handleChange={handleChange}/>
      </header>
    </div>
  );
}

export default App;
