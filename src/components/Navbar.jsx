import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import profile from '../assets/images/profile.jpg'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl flex flex-wrap items-center justify-between mx-auto py-4 px-6 relative">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="rounded-full p-1 bg-linear-to-r from-blue-500 to-purple-600">
                    <img src={ profile } className="h-8 w-8 border-2 border-white rounded-full object-cover shadow-sm" alt="logo" />
                </div>
                <span className="self-center font-montserrat text-lg text-gray-800 font-bold whitespace-nowrap">Nisrina</span>
            </a>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200" aria-controls="navbar-mobile" aria-expanded={isMenuOpen}>
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <FiX className="w-5 h-5"/>:<FiMenu className="w-5 h-5"/>}
            </button>
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                <ul className="flex items-center space-x-8">
                    <li>
                        <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">Skills</a>
                    </li>
                    <li>
                        <a href="#portofolio" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">Portofolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="hidden md:flex items-center space-x-4 border-l border-gray-200 pl-4">
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
                    <FaInstagram className="w-5 h-5"/>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors duration-200">
                    <FaLinkedin className="w-5 h-5"/>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                    <FiMail className="w-5 h-5"/>
                </a>
            </div>
        </div>
        
        <div className={`${isMenuOpen ? 'block':'hidden'} w-full md:hidden`} id="navbar-mobile">
            <ul className="flex flex-col space-y-3 p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50">
                <li>
                    <a href="#about" className="block py-2 px-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#skills" className="block py-2 px-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#portofolio" className="block py-2 px-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                        Portofolio
                    </a>
                </li>
                <li>
                    <a href="#contact" className="block py-2 px-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </a>
                </li>
                <li className="pt-3 border-t border-gray-200">
                    <div className="flex justify-center space-x-6 py-2">
                        <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">
                            <FaInstagram className="w-5 h-5"/>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                            <FaLinkedin className="w-5 h-5"/>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors duration-200">
                            <FiMail className="w-5 h-5"/>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar