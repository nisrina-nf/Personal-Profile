import React from 'react'
import { FaFigma, FaJs, FaReact, FaCode } from 'react-icons/fa'

const SkillsSection = () => {
  return (
    <section id='skills' className='flex items-center justify-center pb-14.5 px-2 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto w-full px-6 space-y-12'>
        <div className='flex flex-col items-center justify-center text-center space-y-4'>
          <h1 className='text-2xl lg:text-3xl font-bold text-gray-800'>Keahlian</h1>
          <p className='text-gray-500 max-w-2xl mx-auto leading-4'>Saya menguasai berbagai tools dan teknologi untuk membangun produk digital yang modern.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
          <div className='flex flex-col justify-center items-center text-center bg-white rounded-2xl shadow-md hover:shadow-md/20 duration-300 p-5 w-full max-w-64 w-63 h-48.5 space-y-4'>
            <div className='bg-blue-100 rounded-full p-4'>
              <FaFigma className='fill-blue-600 w-8 h-8'/>
            </div>
            <div className='space-y-1'>
              <p className='text-lg font-semibold text-gray-800'>Figma</p>
              <p className='text-sm text-gray-400'>UI Design, Prototyping</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center bg-white rounded-2xl shadow-md hover:shadow-md/20 duration-300 p-5 w-full max-w-64 w-63 h-48.5 space-y-4'>
            <div className='bg-yellow-100 rounded-full p-4'>
              <FaJs className='fill-yellow-500 w-8 h-8'/>
            </div>
            <div className='space-y-1'>
              <p className='text-lg font-semibold text-gray-800'>JavaScript</p>
              <p className='text-sm text-gray-400'>Front-End Development</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center bg-white rounded-2xl shadow-md hover:shadow-md/20 duration-300 p-5 w-full max-w-64 w-63 h-48.5 space-y-4'>
            <div className='bg-purple-100 rounded-full p-4'>
              <FaReact className='fill-purple-600 w-8 h-8'/>
            </div>
            <div className='space-y-1'>
              <p className='text-lg font-semibold text-gray-800'>React</p>
              <p className='text-sm text-gray-400'>Web Apps & SPA</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center bg-white rounded-2xl shadow-md hover:shadow-md/20 duration-300 p-5 w-full max-w-64 w-63 h-48.5 space-y-4'>
            <div className='bg-pink-100 rounded-full p-4'>
              <FaCode className='fill-pink-500 w-8 h-8'/>
            </div>
            <div className='space-y-1'>
              <p className='text-lg font-semibold text-gray-800'>HTML</p>
              <p className='text-sm text-gray-400'>Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection