import React from 'react'
import { FaPhone, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdMarkEmailUnread } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
export default function HeaderMail() {
    return (
        <div className=' p-3 sm:py-2'>
            <div className=' mx-auto w-full sm:w-11/12'>
                <div className='flex flex-wrap gap-2 text-black justify-center sm:justify-between items-center'>
                    <div className='sm:w-[40%] flex items-center flex-wrap gap-2 '>
                        {/* <span><FaPhone fontSize={16} className='rotate-90' /></span> */}
                        <div className="flex items-center justify-center  space-x-4">
                            <p className="text-md">+44 161 706 1110</p>

                            {/* Dial pad icon - opens phone dialer */}
                            <a href="tel:+441617061110" className="text-black hover:scale-110 transition-transform">
                                <FaPhoneAlt className="text-md" />
                            </a>

                            {/* WhatsApp icon - opens WhatsApp chat */}
                            <a
                                href="https://wa.me/441617061110"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:scale-110 transition-transform"
                            >
                                <FaWhatsapp className="text-md" />
                            </a>
                        </div>
                        <span><HiOutlineDotsVertical fontSize={16} /></span>
                        <span><MdMarkEmailUnread fontSize={16} /></span>
                        <span className=' sm:text-md'>info@linkwayrides.com</span>
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
