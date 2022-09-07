import React from 'react'

export const IcecreamDisplay = (props) => {

    const handleDelete = (deleteIdx) => {
        const filteredList = props.icecreamList.filter((eachItem, i) => i!== deleteIdx)
        props.onUpdate(filteredList)}

    const handleBox = (e,updateIdx) =>{
        const listCopy = [...props.icecreamList]
        listCopy[updateIdx].isServed = e.target.checked
        props.onUpdate(listCopy)

    }

    

  return (
    <div>
        <h1>Icecream Request List</h1>
        <table>
            <thead>
                <tr>
                    <th>Flavor</th>
                    <th>Quantity</th>
                    <th>Chocolate Chip?</th>
                    <th>Served?</th>  
                    <th>Served</th>    
                    <th>Action</th>       
                </tr>
            </thead>
            <tbody>
                {
                    props.icecreamList.map((eachIcecream,i)=>{
                        return(
                            <tr>
                                <td>{eachIcecream.flavor}</td>
                                <td>{eachIcecream.quantity}</td>
                                <td>{eachIcecream.hasChocolateChip? 'Yes':'No'}</td>
                                <td>{eachIcecream.isServed? 'Yes':'No'}</td> 
                                <td>
                                    <input type="checkbox" checked={eachIcecream.isServed} onChange={(e)=>handleBox(e,i)}/>
                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(i)}>Delete</button>
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

