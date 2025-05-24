import React from 'react'

function User() {
    return (
        <div className='bg-base-100 hover:scale-105 scroll-smooth hover:transition-all  rounded-4xl cursor-pointer px-2 py-1 mb-2'>


       
     <div className='flex gap-5 '>
        <div className="avatar avatar-online">
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div>
    <h2 className='line-clamp-1'>Nikhil Sharma</h2>
    <h4 className='text-xs'>nik@773</h4>
</div>
     </div>
      </div>
    )
}

export default User
