
import Image from 'next/image';
import React, { Suspense } from 'react';
import userAverter from '@/assets/user.png';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center gap-4 mt-2'>
            <div></div>

            <ul className='flex justify-between items-center gap-4 text-gray-800'>
                <Suspense fallback={<li>Loading...</li>}>
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/about-us">About</NavLink>
                    </li>
                    <li>
                        <NavLink href="/career">Career</NavLink>
                    </li>
                </Suspense>
            </ul>

            <div className='flex justify-between items-center gap-3'>
                <Image
                    src={userAverter}
                    alt='userAverter'
                    height={60}
                    width={60}
                />
                <button className='btn bg-amber-900 text-white'>
                    Log in
                </button>
            </div>
        </div>
    );
};

export default NavBar;
