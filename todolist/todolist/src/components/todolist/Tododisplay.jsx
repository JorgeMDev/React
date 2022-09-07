import React from 'react'

export const Tododisplay = (props) => {

    const handleDelete = (deleteIdx) => {
        const filteredList = props.taskList.filter((eachItem, i) => i!== deleteIdx)
        props.onUpdate(filteredList)}


    const handleTask =(e, updateIdx) => {
        const listCopy = [...props.taskList]
        listCopy[updateIdx].isDone = e.target.checked
        props.onUpdate(listCopy)
    }


  return (


    <div>
        <h1 className='h1task'>Task</h1>
        <table className='tasktable'>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Done?</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.taskList.map((eachTask,i)=>{
                        return(
                            <tr>
                                <td  style={eachTask.isDone?{textDecoration:"line-through"}:{textDecoration:"none"}}>{eachTask.task}</td>
                                <td>
                                    <input type="checkbox" checked={eachTask.isDone} onChange={(e)=>handleTask(e,i)}/>
                                </td>
                                <td>
                                    <button className='todobtn'  onClick={()=>handleDelete(i)}>Delete</button>
                                </td>  
                            </tr>
                        )
                    })
                }



            </tbody>
        </table>
    </div>
  )
}
