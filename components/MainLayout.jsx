"use client";
import React, {useContext} from 'react'
import MainHeader from './MainHeader'
import Link from 'next/link'
import{AiOutlineHome} from 'react-icons/ai'
import{GrProjects} from 'react-icons/gr'
import{FaAngleRight, FaCheck, FaCheckDouble} from 'react-icons/fa'
import{SiHelpscout} from 'react-icons/si'
import{FiPhoneCall} from 'react-icons/fi'
import { MenuContext } from '@/context/MenuContext'
import AboutUsPage from '@/app/about-us/page';
import ContactUsPage from '@/app/contact-us/page';

const MainLayout = ({children}) => {
    const{open}= useContext(MenuContext);
  return (
    <div className='bg-gray-100 w-screen min-h-screen'>
        <MainHeader />
        <div className='flex justify-start items-start'>
        <aside className={`bg-white rounded-lg overflow-hidden transition-all duration-100 ${open ? "w-60 p-4" : "w-0"}`} >
                <ul>
                    <li className='flex justify-start items-center hover:bg-blue-200 rounded-xl p-2'>
                        <AiOutlineHome className='mr-2'/>
                        <Link href = "/"> Home</Link>
                    </li>
                    <li className='flex justify-start items-center hover:bg-blue-200 rounded-xl p-2'>
                        <GrProjects className='mr-2'/>
                        <h3 className='flex-1'> Projects</h3>
                        <FaAngleRight />
                    </li>
                    <li className='flex justify-start items-center hover:bg-blue-200 rounded-xl p-2'>
                        <FaCheck className='mr-2'/>
                        <h3 className='flex-1'> Singule</h3>
                        <FaAngleRight />
                    </li>
                    <li className='flex justify-start items-center hover:bg-blue-200 rounded-xl p-2'>
                        <FaCheckDouble className='mr-2'/>
                        <h3 className='flex-1'> Complex</h3>
                        <FaAngleRight />
                    </li>
                    <li className='flex justify-start items-center hover:bg-blue-200 rounded-xl p-2'>
                        <SiHelpscout className='mr-2'/>
                        <Link href = "about-us/"> About Us</Link>
                    </li>
                    <li className='flex justify-start items-center hover:bg-blue-200 rounded-xl p-2'>
                        <FiPhoneCall className='mr-2'/>
                        <Link href = "contact-us"> Contact Us</Link>
                    </li>
                </ul>
            </aside>
            <main className='fllex-1'>{children}</main>
        </div>
    </div>
  );
};

export default MainLayout