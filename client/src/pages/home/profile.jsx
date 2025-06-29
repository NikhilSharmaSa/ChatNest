import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { logoutThunk } from '../../store/slices/user/user.thunk'





function Profile({name,username,img}) {
const dispatch=useDispatch()
const navigate=useNavigate()

const handleLogout=async()=>{
const response= await dispatch(logoutThunk())
if(response?.payload?.success){
  return navigate('/login')
}
}

  return (
          <div className='bg-base-300 px-4 py-2 flex justify-between items-center '>


       
     <div className='flex gap-5 items-center justify-center  '>
        <div className="avatar avatar-online cursor-pointer">
  <div className="w-12 rounded-full">
    <img src={img} />
  </div>
</div>
<div>
    <h2>{name}</h2>
    <h4 className='text-xs'>{username}</h4>
</div>
<div>
   <button className="btn btn-outline btn-error" onClick={handleLogout}>Logout</button>
</div>
     </div>
      </div>
    )
}

export default Profile
