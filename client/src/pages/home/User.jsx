import React from 'react'

function User({user}) {
    return (
        <div className='bg-base-100 hover:scale-105 scroll-smooth hover:transition-all  rounded-4xl cursor-pointer px-2 py-1 mb-2'>


       
     <div className='flex gap-5 '>
        <div className="avatar avatar-online">
  <div className="w-12 rounded-full">
    <img src={user.avatar} />
  </div>
</div>
<div>
    <h2 className='line-clamp-1'>{user.fullname}</h2>
    <h4 className='text-xs'>{user.username}</h4>
</div>
     </div>
      </div>
    )
}

export default User
