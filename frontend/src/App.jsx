import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateToDo'
import { ToDos } from './components/ToDos'

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <CreateTodo />
      <ToDos todos={todos} />

    </>
  )
}

export default App
