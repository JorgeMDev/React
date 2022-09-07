import React from 'react'
import { useParams } from 'react-router-dom';

const Routingpractice = (props) => {

    const { variable } = useParams();
    const { color1 } = useParams();
    const { color2 } = useParams();
    console.log(color1,color2)


  return (
    isNaN(+variable)?
    <div style={{color:color1, backgroundColor:color2}}>The word is: {variable}</div>
    :
    <div style={{color:color1, backgroundColor:color2}}>Number: {variable}</div>
  )
}

export default Routingpractice