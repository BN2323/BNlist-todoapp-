import React, { useState } from 'react'

const TodoForm = ({todos, setTodos}) => {
    const [todo, setTodo] = useState('');
    
    const addTask = () => {
        if(todo.trim() != ''){
           setTodos([...todos, todo]);
           setTodo('');  
        }
    }

  return (
    <div className='form_container'>
        <input 
        type="text" 
        placeholder='Input your task...'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}/>
        <button 
        type='submit' 
        className='add_button'
        onClick={addTask}>
            Add task
        </button>
    </div>
  )
}

export default TodoForm