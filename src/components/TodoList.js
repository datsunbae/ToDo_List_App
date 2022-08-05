import {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])
    
    const addTodo = (todo) => {
        setTodos([todo, ...todos])
        console.log(todos)
    }

    return (  
        <div>
            <TodoForm addTodo={addTodo}/>
            <Todo todos={todos}/>
        </div>
    )
}

export default TodoList