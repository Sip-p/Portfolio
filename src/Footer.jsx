import React from 'react';
import Photo from './Components/Photo';

const Footer = () => {
  return (
    <div id='Footer' className="main mx-4 md:mx-12 lg:mx-36 mt-3 mb-36">
      <hr className="border-t-2 border-gray-300" />
      
      <div className="upper flex flex-col lg:flex-row justify-between mt-8 gap-6 lg:gap-12">
        {/* About Section */}
        <div className="about flex flex-col items-center lg:items-start">
          <Photo />
          <div className="mt-4 text-center lg:text-left">
            <h1 className="font-bold text-white text-xl">Sipra</h1>
            <p className="text-white">I am Sipra, a Frontend developer</p>
          </div>
        </div>
        
        {/* Subscribe Section */}
        <div className="data flex flex-col items-center lg:items-start lg:flex-row justify-center gap-6 mt-6 lg:mt-0">
          <input
            className="mail h-14 w-56 p-3 rounded bg-slate-700 text-white placeholder-white focus:outline-none"
            type='text'
            placeholder='Enter your email here'
          />
          <button
            type='submit'
            className='h-14 w-40 bg-rose-700 rounded-full hover:text-2xl focus:outline-none'
          >
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-t-2 border-gray-300 mt-6" />
      
      <div className="lower flex flex-col lg:flex-row justify-between mt-6 text-white text-center lg:text-left">
        <div className="copyrights">
          <h1>@2024 Sipra Panda, All rights reserved</h1>
        </div>
        
        <div className="extra flex flex-col lg:flex-row gap-4 font-thin text-sm mt-4 lg:mt-0">
          <button className='hover:text-slate-600'>Term of Services</button>
          <button className='hover:text-slate-600'>Privacy Policy</button>
          <button className='hover:text-slate-600'>Connect with me</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
