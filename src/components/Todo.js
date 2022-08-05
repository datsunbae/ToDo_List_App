import {useEffect, useState} from 'react'
import {GrEdit} from 'react-icons/gr';
import {IoClose} from "react-icons/io5";
import TodoForm from './TodoForm';


function Todo(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


    const handleSubmitUpdate = (value) => {
        props.updateTodo(edit.id, value);
        setEdit({
            id: null,
            contentTodo: ''
        });
    }

    useEffect(() => {
        
    })

    if(edit.id) 
    {
        return (
           <div style={
            {
                zIndex: 1, 
                position: 'fixed', 
                top : 0, left: 0, 
                right: 0, 
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
             <TodoForm edit={edit} onSubmit={handleSubmitUpdate}/>
           </div>
        )
    }
  
    return (
        <ul>
            {props.todos.map((todo, index) => 
            <li key={index}>
                {todo.contentTodo}
                <GrEdit onClick={() => setEdit({id: todo.id, value: todo.contentTodo})}/> 
                <IoClose onClick={() => props.deleteTodo(todo.id)}/>
            </li>)}
        </ul>
  )
}

export default Todo