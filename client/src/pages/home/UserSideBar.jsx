import React from 'react';
import { FaSearch } from 'react-icons/fa';
import User from './User';
import Profile from './profile';

function UserSideBar() {
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
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>

            <div className='bg-black'>
                <Profile />
            </div>
        </div>
    );
}

export default UserSideBar;
