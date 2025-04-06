import React, { useState } from 'react'

const Todolist = ({index, desc, todos, setTodos}) => {
    const [todo, setTodo] = useState('');
    const [edit, setEdit] = useState(false);
    const [done, setDone] = useState(false);

    const updateTask = () => {
        console.log(todo);
        console.log(todos);
        if(todo.trim() != ''){
            setTodos(todos.map((desc, i) => (i === index ? todo : desc)));
            setTodo('');
        }
            
        setEdit(false);
        console.log(todos);
    }

    const deleteTask = (index) => {
        done ? setDone(false) : setDone(done);
        console.log(todos);
        setTodos(todos.filter((_, i) => i != index));
        console.log(todos);
        
    }

    console.log(done);
  return (
    <>
        { !edit ? (
            <div className='list_wrapper'>
                <div className={done ? "left_list done_list" : "left_list"} onClick={() => setDone(!done)}>
                    {/* <input type="checkbox" onChange={() => setDone(!done)}/> */}
                    <p>{desc}</p>
                </div>
                
                <div className="list_button">
                    <button 
                    className='edit_button'
                    onClick={() => setEdit(true)}>Edit</button>
                    <button 
                    className='delete_button'
                    onClick={() => deleteTask(index)}>Delete</button>
                </div>
                
            </div>
        ) : (
            <div className='update_form_container'>
                <input 
                type="text" 
                placeholder='Update your task...'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}/>
                <button 
                type='submit' 
                className='add_button'
                onClick={updateTask}>
                    Update task
                </button>
            </div>)}
    </>
        
  )
}

export default Todolist