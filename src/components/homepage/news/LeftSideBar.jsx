
 import Link from 'next/link';
 import React from 'react';

 const LeftSideBar = ({categories, activeId}) => {
     return (
         <div>
             <h2 className="text-l font-bold mb-4">All Categories</h2>
             <ul className="flex flex-col gap-4">
             {categories.news_category.map((category) => (
                 <li
                     key={category.category_id}
                     className={`
                         ${activeId === category.category_id && "bg-amber-300"}
                         bg-gray-300 p-2 rounded-xl font-normal text-center`}
                     >
                     {/* {category.category_name} */}
                     <Link href={`/category/${category.category_id}`}>{category.category_name}</Link>
                 </li>
             ))}
             </ul>
         </div>
     );
 };

 export default LeftSideBar;