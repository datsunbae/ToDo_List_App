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

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (   
        <div>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </div>
    )
}

export default TodoList