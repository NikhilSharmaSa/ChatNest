import React from 'react'

function Profile() {
    return (
          <div className='bg-base-300 px-4 py-2 flex justify-between items-center '>


       
     <div className='flex gap-5 items-center justify-center  '>
        <div className="avatar avatar-online cursor-pointer">
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div>
    <h2>Nikhil Sharma</h2>
    <h4 className='text-xs'>nik@7773</h4>
</div>
<div>
   <button className="btn btn-outline btn-error">Logout</button>
</div>
     </div>
      </div>
    )
}

export default Profile
