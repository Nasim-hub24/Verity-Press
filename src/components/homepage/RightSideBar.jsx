
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h1 className='font-bold text-lg mb-2'>Log in with</h1>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-400 text-blue-500'><FaGoogle />Log in with google</button>
                <button className='btn'><FaGithub />Log in with github</button>
            </div>
            <div>
                <h1 className='font-bold text-lg mt-5'>Find us on</h1>
                <div className='flex flex-col gap-2'>
                    <button className='btn border-blue-400 text-blue-500'><FaFacebook />Facebook</button>
                    <button className='btn'><FaInstagramSquare />Instagram</button>
                    <button className='btn'><FaTwitter />Twitter</button>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;