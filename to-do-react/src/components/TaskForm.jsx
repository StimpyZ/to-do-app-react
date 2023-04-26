import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const ListOfTask = ({ send }) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const tasks = (e) => {
    e.preventDefault()
    const task = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    send(task)
  }
  return (
    <div>
      <form className='list-task-container' onSubmit={tasks}>
        <input type='text' name='task' placeholder='Add a task' onChange={handleChange} />
        <button type='submit'>Add</button>

      </form>
    </div>
  )
}

export default ListOfTask
