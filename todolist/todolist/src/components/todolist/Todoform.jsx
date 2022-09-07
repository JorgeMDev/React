import React, {useState} from 'react'

export const Todoform = (props) => {
  const [task, setTask] = useState('')
 

  const handleSubmit = (e) =>{
    e.preventDefault()
    props.sendRequest({task: task, isDone: false})
    setTask('')
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className='color-blue todolabel'>Task name:</label>
        <input className='color-dark-blue todoform'  type="text" name='task' value={task} onChange={(e)=>setTask(e.target.value)} />
        <button type='submit' className='todobtn'>Add task</button>
      </form>
    </div>
  )
}
