import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const AddTask = ({ id, text, completed, deleteTask, completedTask, editTask }) => {
  const [editMode, setEditMode] = useState(false)
  const [newText, setNewText] = useState('')

  const handleEdit = (event) => {
    event.preventDefault()
    editTask(id, newText)
    setEditMode(false)
  }
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      {editMode
        ? (
          <form onSubmit={handleEdit}>
            <input
              type='text'
              value={newText}
              onChange={(event) => setNewText(event.target.value)}
            />
            <button type='submit'>Save</button>
          </form>
          )
        : (
          <div className='task-text' onClick={() => completedTask(id)}>
            {text}
          </div>
          )}
      <div className='task-icon-container'>
        <div className='edit-icon' onClick={() => setEditMode(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className='trash-icon' onClick={() => deleteTask(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  )
}

export default AddTask
