import React, {useEffect, useState} from 'react';
import TodoList from './TodoList'
import './classwork3.css'

export default function Classwork3() {
  // state = {
  //   todos: [
  //     {id: 1, title: 'First todo', completed: false},
  //     {id: 2, title: 'Second todo', completed: false}
  //   ]
  // }

  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem('todos') || [];
    setTodos(JSON.parse(raw));
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));//переменной 'todos' даются значения [todos] 
  }, [todos])//зависимости(Эмуляция хука componentDidMount)

  const addTodo = event => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ])
      setTodoTitle('');
    }
  }

  return(
    <div className="container">
      <h2>Todo app</h2>

      <div className="input-field">
        <input 
          type="text"
          value={todoTitle} 
          onChange={event => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />
        <label>Todo name</label>
      </div>

      <TodoList todos={todos} />

    </div>
  )
  
}
