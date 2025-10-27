import React from 'react'
import { FaUserAstronaut } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'
import { IoChatboxOutline } from 'react-icons/io5'

const AboutSection = () => {
  return (
    <section id='about' className='flex items-center justify-center py-24 sm:px-6 lg:px-8'>
      <div className='max-w-244 mx-auto w-full'>
        <div className='bg-white shadow-xl rounded-3xl overflow-hidden'>
          <div className='flex flex-col lg:flex-row gap-14 lg:gap-6 py-12 px-6'>
            <div className='flex items-center justify-center'>
              <div className='flex w-40 h-40 rounded-full bg-linear-to-r from-blue-200 via-purple-300 to-pink-200 items-center justify-center'>
                <FaUserAstronaut className='w-12 h-12 fill-blue-500'/>
              </div>
            </div>
            <div className='flex flex-col max-w-190 justify-center space-y-10'>
              <h1 className='text-gray-800 text-xl lg:text-2xl font-bold'>Tentang Saya</h1>
              <p className='text-gray-600 text-base/4'>
                Saya adalah seorang UI/UX Designer & Web Developer berdomisili Surabaya, dengan dedikasi tinggi dalam merancang pengalaman digital yang estetis, user-friendly, dan meaningful bagi pengguna akhir.
              </p>
              <div>
                <ul className='flex flex-wrap items-center text-gray-500 space-x-4'>
                  <li className='flex items-center space-x-1 rtl:space-x-reverse'>
                    <FaCheck className='fill-blue-500'/>
                    <span>Problem Solver</span>
                  </li>
                  <li className='flex items-center space-x-1 rtl:space-x-reverse'>
                    <FaCheck className='fill-blue-500'/>
                    <span>Team Player</span>
                  </li>
                  <li className='flex items-center space-x-1 rtl:space-x-reverse'>
                    <FaCheck className='fill-blue-500'/>
                    <span>Fast Learner</span>
                  </li>
                  <li className='flex items-center space-x-1 rtl:space-x-reverse'>
                    <FaCheck className='fill-blue-500'/>
                    <span>Kreatif & Adaptif</span>
                  </li>
                </ul>
              </div>
              <button className='bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-300 transform hover:bg-linear-to-l shadow-lg hover:shadow-lg/20 rounded-lg px-5 py-2.5 inline-flex text-white text-left font-semibold items-center'>
                <span><IoChatboxOutline className='stroke-white w-5 h-5 me-2 '/></span>
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection