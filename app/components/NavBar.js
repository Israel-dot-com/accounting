"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    let Links =[
        {id: 1, name:"HOME",link:"/"},
        {id: 2, name:"SERVICE",link:"/services"},
        {id: 3, name:"ABOUT",link:"/about"},
        {id: 4, name:"CONTACT",link:"/contact"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='container w-full sticky top-0 z-50'>
           <div className='md:flex items-center justify-between bg-[#f3f0ee] py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.998 20H9.99805V17H11.998V20ZM17.362 17.778L15.241 15.657L16.655 14.243L18.777 16.365L17.364 17.778H17.362ZM4.63405 17.778L3.21905 16.364L5.33905 14.242L6.75405 15.656L4.63405 17.777V17.778ZM10.998 15.007C8.23302 15.0059 5.99231 12.7637 5.99305 9.99867C5.99378 7.23364 8.23568 4.99263 11.0007 4.993C13.7657 4.99337 16.007 7.23497 16.007 10C16.0043 12.7649 13.763 15.0053 10.998 15.007ZM10.998 6.993C9.33759 6.9941 7.99231 8.34087 7.99305 10.0013C7.99378 11.6618 9.34025 13.0074 11.0007 13.007C12.6612 13.0066 14.007 11.6605 14.007 10C14.0054 8.33918 12.6589 6.99355 10.998 6.993ZM20.998 11H17.998V9H20.998V11ZM3.99805 11H0.998047V9H3.99805V11ZM16.654 5.758L15.241 4.343L17.362 2.221L18.777 3.636L16.655 5.757L16.654 5.758ZM5.34105 5.758L3.22105 3.637L4.63605 2.223L6.75605 4.345L5.34205 5.757L5.34105 5.758ZM11.998 3H9.99805V0H11.998V3Z" fill="#2E3A59"/>
                </svg>
                <span>Autumn & Co</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-4 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ?
                    <svg className='ml-1.5 mt-1' width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z" fill="#2E3A59"/>
                    </svg>
                     :
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 19H3V17H21V19ZM21 15H3V13H21V15ZM21 11H3V9H21V11ZM21 7H3V5H21V7Z" fill="#2E3A59"/>
                    </svg>
                    
                }
            </div>
            {/* linke items */}
            <ul className={`bg-[#f3f0ee] md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-f3f0ee md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li key={link.id} className='md:ml-8 md:my-0 my-7 font-semibold '>
                        {/* <a href={link.link} className='text-[#050430] hover:text-blue-400 duration-500'>{link.name}</a> */}
                        <Link href={link.link} className='text-[#050430] hover:text-blue-400 duration-500'>{link.name}</Link>
                    </li>))
                }
                <Link href="/contact" className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</Link>
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;