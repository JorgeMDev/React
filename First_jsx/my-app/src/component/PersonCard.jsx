import React, { useState } from 'react';


const PersonCard = props => {
    const [addedAge, setAddedAge] = useState(0)

    const handledAge = () => {
        setAddedAge(addedAge + 1)
    }
    return (
     
                 //here we write our jsx, inside return
                    <div>
                        <h1>{props.firstName}, {props.lastName}</h1>
                        <h5>Age: {props.age + addedAge}</h5>
                        <h5>Hair Color: {props.hairColor}</h5>
                        <button onClick={handledAge}>Birthday Button for {props.firstName} {props.lastName}</button>
                    </div>
    )
}




export default PersonCard