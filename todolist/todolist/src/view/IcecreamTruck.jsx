import React, {useState} from 'react'
import { IcecreamDisplay } from '../components/icecreamList/IcecreamDisplay'
import { IcecreamForm } from '../components/icecreamList/IcecreamForm'
//parent
export const IcecreamTruck = () => {
    const [icecreamList, setIceCreamList] = useState([])


    const receiveIcecreamRequest = (newRequest) => {
        setIceCreamList([...icecreamList, newRequest])
    }

    

    const updateList = (updatedList) => {
        setIceCreamList(updatedList)
    }

  return (
    <div>
        <h1>Icecream Truck</h1>
        <IcecreamForm sendRequest = {receiveIcecreamRequest}/>
        <IcecreamDisplay icecreamList={icecreamList} onUpdate={updateList}/>
       

    </div>
  )
}
