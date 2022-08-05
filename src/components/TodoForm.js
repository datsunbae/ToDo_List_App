import {useState} from 'react'

function TodoForm(props) {

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo({
        id: Math.floor(Math.random() * 100000),
        contentTodo: input
    });
  }
    
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Add a todo" 
            value={input} 
            onChange={(e) => {
                setInput(e.target.value)
            }}/>
        <button>Add</button>
    </form>
  )
}

export default TodoForm