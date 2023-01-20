import React, { useState }  from 'react'

import List from './component/List';

function App() {

  const [inputValue , setInputValue] = useState('');
  const [todoList , setTodoList] = useState([])
  const addTodo = () => {
    setTodoList([...todoList,inputValue])
  }
  return (
    <div className="App">
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}></input> 
        <button onClick={addTodo}>Submit</button>
        
        <List todoList={todoList}/>
    </div>
  );
}

export default App;
