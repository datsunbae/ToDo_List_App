import {useState} from 'react'

function TodoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.onSubmit({
        id: props.edit ? props.edit.id : Math.floor(Math.random() * 100000),
        contentTodo: input
    });

    setInput('')
  }
    
  return (
    <form onSubmit={handleSubmit}>
        <input
            name="todo" 
            type="text" 
            placeholder={props.edit ? "Update todo" : "Add todo"} 
            value={input} 
            onChange={(e) => {
                setInput(e.target.value)
            }}/>
        <button>{props.edit ? "Update" : "Add"}</button>
    </form>
  )
}

export default TodoForm