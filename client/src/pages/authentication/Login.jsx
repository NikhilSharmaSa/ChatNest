import React, { useState } from 'react'
import {FaUser,FaEye} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {toast} from "react-hot-toast"
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../store/slices/user/user.thunk.js'
function Login() {

    const dispatch=useDispatch()
const [loginData,setLoginData]=useState({
    username:"",
    password:""
})


const handleInputChange=(e)=>{
    setLoginData({
        ...loginData,
        [e.target.name]:e.target.value
    })
}


const handleLogin=async()=>{
try {

 dispatch(loginThunk(loginData))

        
} catch (error) {
    console.log(error)
}

}


    return (
        <>
        <div className='flex items-center  justify-center p-6'>

        
        <div className=' max-w-[30rem] w-full bg-base-300  rounded-lg  flex justify-center flex-col items-center p-6 gap-4 '>

<h2 className='text-xl font-bold'>Login Now!</h2>      

<label className="input input-bordered flex items-center gap-2 w-full">
 <FaUser/>
  <input type="text" name='username' className="grow" placeholder="Username" autoComplete='new-username'  onChange={handleInputChange}/>
</label>
<label className="input input-bordered flex items-center gap-2 w-full">
 <FaEye/>
  <input type="password"  name='password' className="grow" placeholder='Password' autoComplete='new-password' onChange={handleInputChange} />
</label>
<button className="btn btn-primary w-full " onClick={handleLogin}>Login</button>
<p>Don't have an account &nbsp;<Link to="/signup" className='text-lg text-blue-400'>SignUp</Link></p>
</div>
</div>
        </>
    )
}

export default Login
