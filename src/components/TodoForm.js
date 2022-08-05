import {useState} from 'react'

function TodoForm(props) {

  const [input, setInput] = useState('');

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
            name="23123"
            type="text" 
            placeholder={props.edit ? "Update" : "Add"} 
            value={input} 
            onChange={(e) => {
                setInput(e.target.value)
            }}/>
        <button>Add</button>
    </form>
  )
}

export default TodoForm