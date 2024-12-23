import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Photo from './Components/Photo'
import Aboutme from './Components/Aboutme'
import Sevices from './Components/Sevices'
import Contact from './Components/Contact'
import Email from './Components/Email'
import Footer from './Footer'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div id='App'className='bg-black'> 
    
      <Navbar/>
      <div className="mt-3 lg:pl-96 lg:ml-32 lg:mt-20  sm:pl-48 sm:ml-9 sm:mt-5 md:pl-64 md:ml-24 md:mt-10"> 
      <Photo/>
       
      </div>
      <h1 className='font-bold text-3xl bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>I'm Sipra,</h1><h1 className='text-white text-3xl text-fuchsia-500'>FullStack Webdeveloper based in INDIA.</h1>
    <h1 className='text-white'>I am a Fullstack developer from Odisha,India.I am a College Student</h1>
    <div className=' flex justify-center gap-6 lg:mt-5 mt-28'> 
    <button className='bg-gradient-to-r from-pink-500 to-orange-500   rounded-full lg:mt-5 lg:px-4 lg:py-2 md:3 md:px-2 md:py-1 sm:mt-2 px-1 py-2 hover:text-white'><AnchorLink href='#Contact'> Connect with me</AnchorLink></button>
    <button className='bg-black text-white border border-white lg:px-4 lg:mt-5 sm:px-1 sm:mt-2 md:px-2 md:mt-1 rounded-full hover:border-pink-600 py-2 px-1 '>My resume</button>
    </div>
    
    <Aboutme/>
    <Sevices/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
