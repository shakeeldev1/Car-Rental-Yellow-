import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdMarkEmailUnread } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
export default function HeaderMail() {
    return (
        <div className=' p-3 sm:py-2'>
            <div className=' mx-auto w-full sm:w-11/12'>
                <div className='flex flex-wrap gap-2 text-black justify-center sm:justify-between items-center'>
                    <div className='sm:w-[40%] flex items-center flex-wrap gap-2 '>
                        <span><FaPhone fontSize={16} className='rotate-90' /></span>
                        <span className=' sm:text-md'>5267-214-392</span>
                        <span><HiOutlineDotsVertical fontSize={16} /></span>
                        <span><MdMarkEmailUnread fontSize={16} /></span>
                        <span className=' sm:text-md'>needhelp@company.com</span>
                    </div>
                    <div className='sm:w-[20%]  flex items-center flex-wrap gap-2'>
                        {/* Facebook Button */}
                        <button className="w-8 h-8 flex items-center justify-center relative overflow-hidden border border-black/15 rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                            <FaFacebookF className="text-gray-900 relative z-10 transition-all duration-300 group-hover:text-white text-sm" />
                            <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                        </button>

                        {/* Instagram Button */}
                        <button className="w-8 h-8 flex items-center justify-center rounded-full relative overflow-hidden border border-black/15 bg-white shadow-md shadow-gray-200 group transition-all duration-500">
                            <FaInstagram className="text-gray-900 relative z-10 transition-all duration-500 group-hover:text-white" />
                            <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                        </button>

                        {/* Twitter Button */}
                        <button className="w-8 h-8 flex items-center justify-center rounded-full relative overflow-hidden border border-black/15 bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                            <FaTwitter className="text-black z-10 transition-all duration-300 group-hover:text-white" />
                            <div className="absolute top-full left-0 w-full h-full rounded-full bg-black z-0 transition-all duration-500 group-hover:top-0"></div>
                        </button>

                        {/* LinkedIn Button */}
                        <button className="w-8 h-8 flex items-center justify-center rounded-full relative overflow-hidden border border-black/15 bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                            <FaLinkedinIn className="text-gray-900 relative z-10 transition-all duration-300 group-hover:text-white text-sm" />
                            <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-600 z-0 transition-all duration-500 group-hover:top-0"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
