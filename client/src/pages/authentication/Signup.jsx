import React from 'react'
import {FaUser,FaEye} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Signup() {

const [signupData,setSignupData]=useState({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:""
})


const handleInputChange=(e)=>{
console.log(e.target.name+" "+e.target.value)
    setSignupData({
        ...signupData,
        [e.target.name]:e.target.value
    })
}



    return (
        <>
        <div className='flex items-center  justify-center p-6'>

        
        <div className=' max-w-[30rem] w-full bg-base-300  rounded-lg  flex justify-center flex-col items-center p-6 gap-4 '>

<h2 className='text-xl font-bold'>Signup Now!</h2>      


<label className="input input-bordered flex items-center gap-2 w-full">
 <FaUser/>
  <input type="text" className="grow" placeholder="Full Name" onChange={handleInputChange} name='fullname' />
</label>
<label className="input input-bordered flex items-center gap-2 w-full">
 <FaUser/>
  <input type="text" className="grow" placeholder="Username" autoComplete='new-username' onChange={handleInputChange}  name='username' />
</label>
<label className="input input-bordered flex items-center gap-2 w-full">
 <FaEye/>
  <input type="password" className="grow" placeholder='Password'  autoComplete='new-password' onChange={handleInputChange} name='password'/>
</label>
<label className="input input-bordered flex items-center gap-2 w-full">
 <FaEye/>
  <input type="password" className="grow" placeholder='Confirm Password' onChange={handleInputChange} name='confirmPassword' />
</label>
<button className="btn btn-primary w-full ">Signup</button>
<p>Already have an account &nbsp;<Link to="../login" className='text-lg text-blue-400'>Login</Link></p>
</div>
</div>
        </>
    )
}

export default Signup
