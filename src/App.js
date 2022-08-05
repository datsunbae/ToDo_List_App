import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1 className="todo-title">What's the Plan for Today?</h1>
      <div className="todo-card">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
