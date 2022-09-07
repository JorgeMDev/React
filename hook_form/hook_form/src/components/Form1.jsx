import React, {useState} from 'react'
import Display from './Display'



const Form1 = () => {
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comfirmpassword, setcomfirmPassword] = useState('')
    const [firstnameError, setFirstnameError] = useState('')
    const [lastnameError, setLastnameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [comfirmpasswordError, setComfirmPasswordError] = useState('')
    
const handledFirstname = (e) => {
    setFirstname(e.target.value)
    if(e.target.value.length < 2){
        setFirstnameError('Please enter  first name')
    }
    else {
        setFirstnameError('')
    }
}

const handledLastname = (e) => {
    setLastname(e.target.value)
    if(e.target.value.length < 2){
        setLastnameError('Please enter last name')
    }
    else{
        setLastnameError('')
    }
}

    
const handledEmail = (e) => {
    setEmail(e.target.value)
    if(e.target.value.length < 5){
        setEmailError('Please enter  first name')
    }
    else {
        setEmailError('')
    }
}


const handledPassword = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length < 8){
        setPasswordError('Password must be at least 8 characters')
    }
    // else if (e.target.value !== comfirmpassword){
    //     setPasswordError('Password does not match')
    // }
    else{
        setPasswordError('')
    }
}

const handledconfirmPassword = (e) => {
  
    setcomfirmPassword(e.target.value)
    if(e.target.value.length < 8){
        setComfirmPasswordError('Password must be at least 8 characters')
    }
    // else if (e.target.value !== password){
    //     setComfirmPasswordError('Password does not match')
    // }
    else{
        setComfirmPasswordError('')
    }
}




const createUser = (e) => {
    if (password !== comfirmpassword){
        setPasswordError('Password does not match')
    }
    e.preventDefault();
    const newUser = {firstName, lastName,email,password}
    console.log('Welcome', newUser)
}

  return (
    <div>
        <h1>Basic Form</h1>
           <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" name='firstname' onChange={handledFirstname} />
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" name='lastname' onChange={handledLastname} />   
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" name='email' onChange={handledEmail} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name='password' onChange={handledPassword} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={handledconfirmPassword} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        <Display firstName={firstName} lastName = {lastName} email={email} password={password}/>
    </div>
  )
}

export default Form1