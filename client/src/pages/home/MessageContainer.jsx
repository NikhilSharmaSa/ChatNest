import React from 'react'
import TargetedUser from './TargetedUser'
import ChatContainer from './ChatContainer'
import InputBox from './InputBox'

function MessageContainer() {
    return (
       <div className='w-full flex flex-col max-h-screen  bg-base-100'>
        <div className='w-full min-h-[4em]'>
            <TargetedUser/>
        </div>
        <div className='w-full flex-1  bg-base-200 p-4  overflow-auto'>
            <ChatContainer/>
        </div>
        <div className='w-full bg-base-300 p-4 min-h-[3em] flex gap-4'>
            <InputBox/>
<button class="btn btn-primary">Send</button>
        </div>
       </div>
    )
}

export default MessageContainer
