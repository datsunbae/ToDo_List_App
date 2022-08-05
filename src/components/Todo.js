import React from 'react'
import {GrEdit} from 'react-icons/gr';
import {IoClose} from "react-icons/io5";


function Todo(props) {
  return (
    <ul>
        {props.todos.map((todo, index) => 
        <li key={index}>
            {todo.contentTodo}
            <GrEdit />
            <IoClose />
        </li>)}
    </ul>
  )
}

export default Todo