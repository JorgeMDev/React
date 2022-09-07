import React from 'react'

const Display = (props) => {
  return (
    <><h1>Your Form Data</h1>
    <p>First name: {props.firstName}</p>
    <p>Last name: {props.lastName}</p>
    <p>Email: {props.email}</p>
    <p>Password: {props.password}</p>
    
    
    </>
  )
}

export default Display