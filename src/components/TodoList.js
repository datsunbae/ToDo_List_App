import {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    }

    const updateTodo = (id, newContentTodo) => {
        setTodos(todos.map((todo) => todo.id === id ? newContentTodo : todo))
    }

    return (   
        <div>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList