import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import AddTask from './components/AddTask'

function App () {
  const [task, setTask] = useState([])

  const addTask = (newTask) => {
    if (newTask.text.trim()) {
      newTask.text = newTask.text.trim()
    }
    const taskUpdate = [...task, newTask]
    setTask(taskUpdate)
  }

  const deleteTask = (id) => {
    const deleteTask = task.filter(task => task.id !== id)
    setTask(deleteTask)
  }

  const completeTask = (id) => {
    const completeTask = task.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTask(completeTask)
  }

  const editTask = (id, newText) => {
    const editedTask = task.map(task => {
      if (task.id === id) {
        return { ...task, text: newText }
      }
      return task
    })
    setTask(editedTask)
  }
  return (
    <div className='container'>
      <main>
        <TaskForm send={addTask} />
        {
          task.map(task => (
            <AddTask
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              completedTask={completeTask}
              editTask={editTask}
            />
          ))
        }
      </main>
    </div>
  )
}

export default App
