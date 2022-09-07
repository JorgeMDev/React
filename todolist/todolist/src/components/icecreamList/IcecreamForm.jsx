import React, {useState} from 'react'

export const IcecreamForm = (props) => {
    const [flavor, setFlavor] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [hasChocolateChip, setHasChocolateChip] = useState(false)

    const handleSubmit =(e) =>{
        e.preventDefault()
        props.sendRequest({flavor: flavor, quantity: quantity, hasChocolateChip, isServed: false })
    }


  return (
      <div>
        <form onSubmit={handleSubmit}>
        <label>Flavor:</label>
        <select name='flavor' value={flavor} onChange={(e)=>setFlavor(e.target.value)}>
            <option hidden>Choose a flavor</option>
            <option value='watermelon'>Watermelon</option>
            <option value='peach'>Peach</option>
            <option value='pistachio'>Pistachio</option>
        </select>
    <div>
        <label htmlFor="">Quantity:</label>
        <input type="number" name='quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
    </div>
    <div>
        <label htmlFor="">Chocolate chip?</label>
        <input type="checkbox" name="hasChocolatecChip" checked={hasChocolateChip} onChange={(e)=>setHasChocolateChip(e.target.checked)} />
    </div>
    <button type='submit'>Add Order</button>
        </form>
    </div>
  )
}
