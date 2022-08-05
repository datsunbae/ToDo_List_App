import {useState} from 'react'
import {VscEdit} from 'react-icons/vsc';
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

    const handleCloseModalUpdate = () => {
        setEdit({
            id: null,
            contentTodo: ''
        });
    }

    return (
        <div>
            <ul className="todo-list">
                {props.todos.map((todo, index) => 
                <li key={index} className="todo-row">
                    {todo.contentTodo}
                    <div className="todo-wrapper-icons">
                        <VscEdit size={21} style={{fontWeight: 800, marginRight: '10px', cursor: 'pointer'}} onClick={() => setEdit({id: todo.id, value: todo.contentTodo})}/> 
                        <IoClose size={21} style={{fontWeight: 800, cursor: 'pointer'}} onClick={() => props.deleteTodo(todo.id)}/>
                    </div>
                </li>)}
            </ul>
            <div>
                {edit.id ? (
                    <div className="container-modal-update">
                        <div className="todo-modal-update">
                            <h2 className="todo-modal-update_title">Update todo</h2>
                            <IoClose className="icon-close-modal-update" onClick={handleCloseModalUpdate}/>
                            <TodoForm edit={edit} onSubmit={handleSubmitUpdate}/>
                        </div>
                    </div>) : ''}
            </div>
        </div>
  )
}

export default Todo