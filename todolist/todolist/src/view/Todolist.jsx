import React, {useState} from 'react'
import '../../src/App.css'
import { Tododisplay } from '../components/todolist/Tododisplay'
import { Todoform } from '../components/todolist/Todoform'

export const Todolist = () => {
    // const initialTaskList = () => window.localStorage.getItem(taskList) //sensei bonus
    const [taskList, setTaskList] = useState([])

    const receiveTaskRequest = (newTask) => {
        setTaskList([...taskList, newTask])
    }

    const updateList = (updatedList) => {
        setTaskList(updatedList)
    }

    // useEffect(
    //   () => {
    //     window.localStorage.setItem('taskList',taskList)
    //   }

    // )


  return (
    <div>
        <h1 className='color-blue'>TO-DO List</h1>
    <Todoform sendRequest = {receiveTaskRequest}  />
    <Tododisplay taskList = {taskList} onUpdate = {updateList}/>
    </div>
  )
}
