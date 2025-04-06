import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todolist from './Todolist'

const Todo = () => {
    const [todos, setTodos] = useState([]);

  return (
    <div className='todo_container'>
        <h1>Let's Do It Now!</h1>
        <TodoForm todos={todos} setTodos={setTodos} />
        <ul className='list_container'>
            {todos.length !== 0 ? todos.map((todo, index) => (<li key={index}><Todolist index={index} desc={todo} todos={todos} setTodos={setTodos} /></li>)) 
            :
            <p>There's no Task!</p> }
        </ul>
        
    </div>
  )
}

export default Todo