import React from 'react'
import { useState } from 'react'

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('')
  const [time, setTime] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!task) {
      alert("task cannot be empty!")
      return;
    }
    addTask({task, time})
    setTask('')
    setTime('')
  }

  return (
      <form className='add-form'>
      <div className="form-control">
        <label>Task</label>
        <input className='task-input' type="text" placeholder='Task' value={task} onChange={(e) => setTask(e.target.value)}/>
        <label>Time</label>
        <input type="text" className='time-input' placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)}/>
        <button type="submit" className='btn' onClick={submit}>save</button>
      </div>
      </form>
  )
}

export default AddTask