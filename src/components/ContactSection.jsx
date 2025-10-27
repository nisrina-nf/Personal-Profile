import React from 'react'
import { FaEnvelope, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const ContactSection = () => {
  return (
    <section id='contact' className='flex items-center justify-center pt-14.5 pb-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto w-full'>
        <div className='bg-linear-to-r from-blue-100 via-white to-purple-100 rounded-3xl shadow-2xl px-2 py-4 lg:px-6 lg:py-16 relative'>
          <div className='lg:max-w-40.5 flex flex-col space-y-15 items-center text-center lg:text-start'>
            <h1 className='text-gray-800 text-2xl/6 font-bold'>Tertarik Kolaborasi?</h1>
            <p className='text-gray-600 leading-4'>Yuk, diskusikan project impianmu. Saya siap membantu mewujudkan produk digital yang impactful buat bisnismu.</p>
            <div className='flex flex-col space-y-3'>
              <a href='#' className='text-gray-600 hover:text-gray-800 transition-colors inline-flex items-center break-normal md:break-all'>
                <span><FaEnvelope className='fill-blue-600 me-3'/></span>
                nisrinanurfatin@gmail.com
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-800 transition-colors inline-flex items-center break-normal md:break-all'>
                <span><FaWhatsapp className='fill-green-500 me-3'/></span>
                0851-0333-3428
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-800 transition-colors inline-flex items-center'>
                <span><FaLocationDot className='fill-pink-500 me-3'/></span>
                Surabaya, Indonesia
              </a>
            </div>
          </div>
          <div className='lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/4 xl:w-195 lg:w-180 m-5 lg:m-0 bg-white rounded-2xl shadow-lg p-8 flex flex-col space-y-5'>
            <form className='space-y-5'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <input type='text' placeholder='Nama' required className='w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all'/>
                <input type='email' placeholder='Email' required className='w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all'/>
              </div>
              <textarea rows='4' placeholder='Pesan' required className='bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none w-full'></textarea>
            </form>
            <button type='submit' className='w-full bg-linear-to-r from-blue-500 to-purple-600 hover:bg-linear-to-l transition-all duration-300 transform shadow-lg hover:shadow-lg/20 flex items-center justify-center px-5 py-2.5 rounded-xl text-white font-semibold'>Kirim Pesan<FaTelegramPlane className='fill-white ms-2'/></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection