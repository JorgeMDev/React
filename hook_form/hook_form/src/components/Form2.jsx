import React, {useState} from 'react'


const Form2 = (props) => {
    
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')


    const handledColor = (e) => {
        setColor(e.target.value)
    }

    
    const createBox = (e) => {
    e.preventDefault();
    props.onNewColor(color,size);
    setColor('')   
}




  return (
    <div>
    <h1>Choose color!</h1>
       <form onSubmit={ createBox }>
        <div>
            <label>Color: </label> 
            <input type="text" name='color' value={color} onChange={handledColor} />
        </div> 
        <div>
            <label>Size: </label> 
            <input type="number" name='size' value={size} />
        </div> 
        <input type="submit" value="Add" />
    </form>
  
</div>
  )
}

export default Form2
