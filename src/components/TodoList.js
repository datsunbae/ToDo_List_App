import {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
    const [todos, setTodos] = useState(localStorageTodos ?? [])
    
    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    }

    const updateTodo = (id, newContentTodo) => {
        setTodos(todos.map((todo) => todo.id === id ? newContentTodo : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const saveLocalStorage = () => {
        const jsonTodos = JSON.stringify(todos);
        localStorage.setItem('todos', jsonTodos)
    }

    saveLocalStorage();

    return (   
        <div>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </div>
    )
}

export default TodoList