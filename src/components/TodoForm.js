import {useState} from 'react'

function TodoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.onSubmit({
        id: props.edit ? props.edit.id : Math.floor(Math.random() * 100000),
        contentTodo: input,
        isComplete: false
    });

    setInput('')
  }
    
  return (
    <form onSubmit={handleSubmit} className="todo-form">
        <input
            className="todo-input"
            name="todo" 
            type="text" 
            placeholder={props.edit ? "Update todo" : "Add todo"} 
            value={input} 
            onChange={(e) => {
                setInput(e.target.value)
            }}/>
        <button className="btn btn-blue">{props.edit ? "Update" : "Add"}</button>
    </form>
  )
}

export default TodoForm