import React from 'react';
import { FaSearch } from 'react-icons/fa';
import User from './User';
import Profile from './profile';
import { useEffect } from 'react';
import { useState } from 'react';
import {fetchUserThunk,fetchProfileThunk} from '../../store/slices/user/user.thunk.js'
import { useDispatch } from 'react-redux';

function UserSideBar() {
const dispatch=useDispatch()
const [users,setUsers]=useState([])
const [name,setName]=useState()
const [username,setUserName]=useState()
const [img,setImg]=useState()



    const getUsers=async()=>{
       
 const response=await  dispatch(fetchUserThunk())
 
setUsers(response.payload.data)
    }


    const getProfile=async()=>{
        const response=await dispatch(fetchProfileThunk())
        console.log(response)
       setImg(response.payload.data.avatar)
       setUserName(response.payload.data.username)
       setName(response.payload.data.fullname)
    }
useEffect(()=>{
 getUsers()
 getProfile()
},[])

    return (
        <div className='min-w-[18em] bg-base-300 max-h-screen flex flex-col'>
            <div className='text-center p-2 text-2xl font-bold'>
                <h1>Chat Nest</h1>
            </div>

            <div className='p-3'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <FaSearch />
                </label>
            </div>

            <div className='flex-1 overflow-auto px-4'>
               {
                users.map((user)=>(
<User user={user} key={user.username}/>
                ))
               }
            </div>

            <div className='bg-black'>
                <Profile name={name} img={img} username={username} />
            </div>
        </div>
    );
}

export default UserSideBar;
