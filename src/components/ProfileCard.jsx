import React from 'react';
import profile from '../assets/images/profile.jpg'
import { FaLightbulb, FaRocket } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-blue-200 via-purple-100 to-pink-100 py-32 px-4 sm:px-6 lg:px-8">
        <div className='absolute top-10 left-10 bg-linear-to-r from-blue-400/20 to-purple-500/20 w-60 h-60 rounded-full'></div>
        <div className='absolute bottom-10 right-20 bg-linear-to-r from-pink-400/20 to-yellow-300/20 w-80 h-80 rounded-full'></div>
        <div className='flex items-center justify-center'>
            <div className='max-w-204 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='flex flex-col justify-center space-y-6 order-2 lg:order-1'>
                        <div className='space-y-4'>
                            <p className='text-gray-400 text-xs tracking-widest'>Hi, I'm</p>
                            <h1 className='text-4xl lg:text-5xl font-bold text-gray-900'>Nisrina Nur Fatin</h1>
                            <h2 className='bg-linear-to-r from-blue-500 to-purple-600 text-sm font-medium rounded-4xl py-1 px-4 mt-12 lg:text-base text-white text-center w-fit shadow-md'>UI/UX Designer & Web Developer</h2>
                        </div>
                        <p className='text-gray-500 text-lg/5'>Membantu brand dan bisnis membangun produk digital yang impactful lewat desain yang kreatif, modern, dan user-centric.</p>
                        <div className='flex flex-col sm:flex-row gap-4 pt-13'>
                            <button className='bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform shadow-md hover:shadow-md/20'>Lihat Karya</button>
                            <button className='text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 rounded-lg font-semibold px-6 py-2 transition-all duration-300 transform shadow-md hover:shadow-md/20'>Hubungi Saya</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center order-1 lg:order-2'>
                        <div className='relative'>
                            <img src={ profile } className='w-72 h-72 border-8 border-white rounded-3xl flex shadow-lg'/>
                            <div className='absolute -translate-y-1/2 -translate-x-1/2 right-auto top-0 left-0 bg-white/90 rounded-xl w-16 h-16 shadow-lg flex justify-center items-center'>
                                <FaLightbulb className='w-7 h-7 fill-blue-500'/>
                            </div>
                            <div className='absolute translate-y-1/2 translate-x-1/2 left-auto bottom-0 right-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex w-20 h-20 justify-center items-center shadow-lg'>
                                <FaRocket className='w-9 h-9 fill-white'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </section>
  );
}

export default ProfileCard;