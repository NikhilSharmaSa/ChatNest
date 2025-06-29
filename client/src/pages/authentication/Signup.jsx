import React from 'react'
import {FaUser,FaEye, FaEnvelope} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../store/slices/user/user.thunk.js'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
function Signup() {
const navigate=useNavigate()

    const dispatch=useDispatch()
const [signupData,setSignupData]=useState({
    fullname:"",
    username:"",
     email:"",
    password:"",
   
    confirmPassword:"",
    gender:""
})


const handleInputChange=(e)=>{
console.log(e.target.name+" "+e.target.value)
    setSignupData({
        ...signupData,
        [e.target.name]:e.target.value
    })
}



const handleRegister=async()=>{
  if(signupData.password!=signupData.confirmPassword){
    return toast.error("Password and Confirm Password do not Match!!")
  }
try {
const response= await  dispatch(registerThunk(signupData))
console.log(response.payload)
if(response.payload?.success){
navigate('/')
}
} catch (error) {
  
}

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
 <FaEnvelope/>
  <input type="email" className="grow" placeholder="Email" autoComplete='Email' onChange={handleInputChange}  name='email' />
</label>
<div className="flex w-full justify-around">
<h3>Gender</h3>
  <label className="label">
    <input type="radio" name="gender" onChange={handleInputChange}  value="male"  />
    Male
  </label>

  <label className="label">
    <input type="radio" name="gender" onChange={handleInputChange}  value="female" />
    Female
  </label>
      
</div>
<label className="input input-bordered flex items-center gap-2 w-full">
 <FaEye/>
  <input type="password" className="grow" placeholder='Password'  autoComplete='new-password' onChange={handleInputChange} name='password'/>
</label>
<label className="input input-bordered flex items-center gap-2 w-full">
 <FaEye/>
  <input type="password" className="grow" placeholder='Confirm Password' onChange={handleInputChange} name='confirmPassword' />
</label>
<button className="btn btn-primary w-full" onClick={handleRegister}>Signup</button>
<p>Already have an account &nbsp;<Link to="../login" className='text-lg text-blue-400'>Login</Link></p>
</div>
</div>
        </>
    )
}

export default Signup
