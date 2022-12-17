import React, { useState } from 'react';
import ToDos from './Component/ToDos';
import Todo from './Model/Todo';
import NewTodos from './Component/NewTodos';


function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo = new Todo(text)
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);

    })

  }

  const removeTodo=(id:string)=>{
    setTodos((prevTodo)=>{
      return prevTodo.filter((item)=>item.id!==id)
    })
  }

  return (
    <div >
      <NewTodos todoAdd={addTodo} />
      <ToDos item={todos}  onRemoveTodo={removeTodo}/>
    </div>
  );
}

export default App;
