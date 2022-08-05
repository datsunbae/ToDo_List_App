import React from 'react'

function Todo(props) {
  return (
    <ul>
        {props.todos.map((todo) => <li>{todo.contentTodo}</li>)}
    </ul>
  )
}

export default Todo