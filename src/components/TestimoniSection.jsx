import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import user1 from '../assets/images/user1.jpg'
import user2 from '../assets/images/user2.jpg'

const TestimoniSection = () => {
  return (
    <section className='flex items-center justify-center py-14.5 px-2 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto w-full px-6 space-y-12'>
            <div className='flex flex-col items-center justify-center text-center space-y-4'>
                <h1 className='text-2xl lg:text-3xl font-bold text-gray-800'>Testimoni Klien</h1>
                <p className='text-gray-500 max-w-2xl mx-auto leading-4'>Apa kata mereka yang pernah bekerja sama dengan saya.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center'>
                <div className='bg-white rounded-2xl shadow-lg hover:shadow-lg/20 duration-300 w-full max-w-118 p-8'>
                    <div className='space-y-5'>
                        <div className='flex flex-row space-x-4'>
                            <LazyLoadImage src={ user1 } className='h-14 w-14 border-2 border-blue-400 rounded-full object-cover' alt='user1'/>
                            <div className='flex flex-col justify-center'>
                                <p className='font-bold text-gray-800 leading-5'>Maya Sari</p>
                                <p className='text-sm text-gray-400'>Product Owner</p>
                            </div>
                        </div>
                        <p className='text-gray-600'>"Pendekatan kreatif Nisrina dalam menyelesaikan masalah desain sangat inspiratif. Dia membawa ide-ide segar yang meningkatkan kualitas produk kami secara signifikan."</p>
                    </div>
                </div>
                <div className='bg-white rounded-2xl shadow-lg hover:shadow-lg/20 duration-300 w-full max-w-118 p-8'>
                    <div className='space-y-5'>
                        <div className='flex flex-row space-x-4'>
                            <LazyLoadImage src={ user2 } className='h-14 w-14 border-2 border-pink-400 rounded-full object-cover' alt='user2'/>
                            <div className='flex flex-col justify-center'>
                                <p className='font-bold text-gray-800 leading-5'>Andi Pratama</p>
                                <p className='text-sm text-gray-400'>Tech Lead</p>
                            </div>
                        </div>
                        <p className='text-gray-600'>"Selama kolaborasi, Nisrina menunjukkan profesionalisme tinggi dan kemampuan teamwork yang exceptional. Sangat mudah berkoordinasi dan selalu memberikan yang terbaik untuk tim."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimoniSection