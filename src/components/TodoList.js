import {useState, useEffect} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
    const [todos, setTodos] = useState(localStorageTodos ?? [])
    const [todosfilter, setTodosfilter] = useState(todos)

    useEffect(() => {
        setTodosfilter(todos)
    }, [todos])
    
    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    }

    const updateTodo = (id, newContentTodo) => {
        setTodos(todos.map((todo) => todo.id === id ? newContentTodo : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const completeTodo = (id) => {
        setTodos(todos.map((todo) => {
            if(todo.id === id){
                todo.isComplete = true
            }
            return todo;
        }))
    }

    const filterTodoActivity = () => {
        setTodosfilter(todos.filter(todo => todo.isComplete === false))
    }

    const filterTodoComplete = () => {
        setTodosfilter(todos.filter(todo => todo.isComplete))
    }

    const filterTodoAll = () => {
        setTodosfilter(todos)
    }

    const saveLocalStorage = () => {
        const jsonTodos = JSON.stringify(todos);
        localStorage.setItem('todos', jsonTodos)
    }

    saveLocalStorage();

    return (   
        <div>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos}
                todosfilter={todosfilter}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo} 
                completeTodo={completeTodo}
                filterTodoActivity={filterTodoActivity}
                filterTodoComplete={filterTodoComplete}
                filterTodoAll={filterTodoAll}
            />
        </div>
    )
}

export default TodoList