import { useState } from 'react'
import './App.css'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>To-do List</h1>
      <div className="card">
        <Task />
      </div>
    </>
  )
}

export default App
