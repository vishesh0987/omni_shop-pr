import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Login = () => {
    const [phone ,setPhone] = useState()
  return (
<>
<div className="container-fluid">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
            
            <span>First Name : </span>    <input type="text" placeholder='Enter First Name' /><br /><br />
            <span>First Name : </span>       <input type="text" placeholder='Enter Last Name' />
            <span>First Name : <PhoneInput placeholder='enter mobile number' style={{width:'20%'}} value={phone} onChange={setPhone}/><br /> </span>   
            <span>First Name : </span>      <input type="email" name="" id="" placeholder='enter email' />
            </div>
        </div>
    </div>
</div>
</> 
 )
}

export default Login