import React from 'react'
import profile from '../assets/images/profile.jpg'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex flex-col bg-white border-t border-gray-200 justify-center items-center mx-auto py-8 space-y-4'>
      <div className='max-w-6xl w-full px-6 flex flex-row justify-between relative'>
        <a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src={ profile } className='h-8 w-8 border-2 border-white rounded-full object-cover shadow-sm' alt='logo'/>
          <span className='self-center text-gray-700 font-montserrat font-semibold whitespace-nowrap'>Nisrina</span>
        </a>
        <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2'>
          <ul className='flex items-center space-x-6'>
            <li>
              <a href='#about' className='text-gray-400 hover:text-gray-600 transition-colors duration-200'>About</a>
            </li>
            <li>
              <a href='#skills' className='text-gray-400 hover:text-gray-600 transition-colors duration-200'>Skills</a>
            </li>
            <li>
              <a href='#portofolio' className='text-gray-400 hover:text-gray-600 transition-colors duration-200'>Portofolio</a>
            </li>
            <li>
              <a href='#contact' className='text-gray-400 hover:text-gray-600 transition-colors duration-200'>Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-3 border-l border-gray-200 pl-3">
          <a href="#" className="text-gray-600 hover:text-pink-400 transition-colors duration-200">
              <FaInstagram className="w-4 h-4"/>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <FaLinkedin className="w-4 h-4"/>
          </a>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <p className='text-xs text-gray-300'>© 2025 Nisrina Nur Fatin. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer