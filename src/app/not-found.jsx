import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-6'>
            <h2>This page is not found</h2>
            <Link>
                <button className='btn-primary'>Back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;