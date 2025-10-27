import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaExternalLinkAlt, FaMobileAlt, FaGlobe } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import gofinance from '../assets/images/gofinance.png'
import edusmart from '../assets/images/edusmart.png'
import datahub from '../assets/images/datahub.png'

const PortofolioSection = () => {
  return (
    <section id='portofolio' className='flex items-center justify-center py-14.5 px-2 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto w-full px-6 space-y-12'>
        <div className='flex flex-col items-center justify-center text-center space-y-4'>
          <h1 className='text-2xl lg:text-3xl font-bold text-gray-800'>Portofolio Pilihan</h1>
          <p className='text-gray-500 max-w-2xl mx-auto leading-4'>Beberapa project terbaik yang pernah saya kerjakan untuk klien lokal maupun international.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          <div className='bg-white rounded-2xl shadow-xl hover:shadow-xl/20 hover:scale-103 duration-300 w-full max-w-85 relative'>
            <div className='absolute top-4 left-4 bg-white rounded-full w-fit px-3'>
              <p className='text-xs font-semibold text-blue-600 inline-flex items-center'>
                <span><FaMobileAlt className='fill-blue-600 me-1'/></span>
                Mobile App
              </p>
            </div>
            <a href='#'>
              <LazyLoadImage className='w-full aspect-4/3 object-cover rounded-t-2xl' src={ gofinance } alt='portofolio 1'/>
            </a>
            <div className='p-5 space-y-6'>
              <div className='space-y-5'>
                <h5 className='text-xl/5 font-bold text-gray-800'>GoFinance App</h5>
                <p className='leading-4 text-gray-500'>Aplikasi manajemen keuangan dengan desain yang clean, modern, dan mudah digunakan.</p>
              </div>
              <a href='#' className='inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 rounded-lg'>
                Lihat Detail
                <FaExternalLinkAlt className='ms-2'/>
              </a>
            </div>
          </div>
          <div className='bg-white rounded-2xl shadow-xl hover:shadow-xl/20 hover:scale-103 duration-300 w-full max-w-85 relative'>
            <div className='absolute top-4 left-4 bg-white rounded-full w-fit px-3'>
              <p className='text-xs font-semibold text-pink-700 inline-flex items-center'>
                <span><FaGlobe className='fill-pink-600 me-1'/></span>
                Website
              </p>
            </div>
            <a href='#'>
              <LazyLoadImage className='w-full aspect-4/3 object-cover rounded-t-xl' src={ edusmart } alt='portofolio 2'/>
            </a>
            <div className='p-5 space-y-6'>
              <div className='space-y-5'>
                <h5 className='text-xl/5 font-bold text-gray-800'>EduSmart Landing Page</h5>
                <p className='leading-4 text-gray-500'>Landing page untuk platform pendidikan dengan fokus pada visual storytelling & UX.</p>
              </div>
              <a href='#' className='inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 rounded-lg'>
                Lihat Detail
                <FaExternalLinkAlt className='ms-2'/>
              </a>
            </div>
          </div>
          <div className='bg-white rounded-2xl shadow-xl hover:shadow-xl/20 hover:scale-103 duration-300 w-full max-w-85 relative'>
            <div className='absolute top-4 left-4 bg-white rounded-full w-fit px-3'>
              <p className='text-xs font-semibold text-purple-700 inline-flex items-center'>
                <span><BsGraphUp className='fill-purple-600 me-1'/></span>
                Dashboard
              </p>
            </div>
            <a href='#'>
              <LazyLoadImage className='w-full aspect-4/3 object-cover rounded-t-xl' src={ datahub } alt='portofolio 3'/>
            </a>
            <div className='p-5 space-y-6'>
              <div className='space-y-5'>
                <h5 className='text-xl/5 font-bold text-gray-800'>DataHub Dashboard</h5>
                <p className='leading-4 text-gray-500'>Dashboard analytics untuk SaaS dengan visual data yang interaktif & engaging</p>
              </div>
                
              <a href='#' className='inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 rounded-lg'>
                Lihat Detail
                <FaExternalLinkAlt className='ms-2'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortofolioSection