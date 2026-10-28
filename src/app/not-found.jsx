//  import Link from 'next/link';
//  import React from 'react';

//  const NotFound = () => {
//      return (
//          <div className='h-[80vh] flex justify-center items-center flex-col gap-6'>
//             <h2>This page is not found</h2>
//              <Link>
//                  <button className='btn-primary'>Back to home</button>
//              </Link>
//          </div>
//      );
//  };

//  export default NotFound;

// import Link from 'next/link';
// import React from 'react';

// const NotFound = () => {
//     return (
//         <div className="h-[80vh] flex justify-center items-center flex-col gap-6">
//             <h2>This page is not found</h2>

//             <Link href="/">
//                 <button className="btn-primary">
//                     Back to home
//                 </button>
//             </Link>
//         </div>
//     );
// };

// export default NotFound;

 import Link from 'next/link';

 export default function NotFound() {
     return (
         <div className="h-[80vh] flex justify-center items-center flex-col gap-6">
             <h2>This page is not found</h2>

             <Link href="/" className="btn-primary">
                 Back to home
             </Link>
         </div>
     );
 }

