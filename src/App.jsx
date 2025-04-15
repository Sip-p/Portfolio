import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Photo from './Components/Photo';
import Aboutme from './Components/Aboutme';
import Sevices from './Components/Sevices';
import Contact from './Components/Contact';
import Footer from './Footer';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Mywork from './Components/Mywork';

function App() {
  const handleclick = () => {
    window.open('/k1.pdf', '_blank');
  };

  return (
    <div id="App" className="bg-black">
      <Navbar />
      {/* Centered Photo Section */}
      <div className="hidden sm:hidden md:flex justify-center items-center mt-10">
        <Photo />
      </div>
      {/* Introduction Section */}
      <div className="text-center mt-6">
        <h1 className="font-bold text-3xl bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          I'm Sipra,
        </h1>
        <h1 className="text-white text-3xl text-fuchsia-500">
          Frontend Developer | Full-Stack Loading...
        </h1>
        <h1 className="text-white">
          Frontend Developer based in Odisha, India | Soon-to-be Full-Stack
        </h1>
      </div>
      {/* Buttons Section */}
      <div className="flex justify-center gap-6 mt-10">
        <button className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full px-4 py-2 hover:text-white">
          <AnchorLink href="#Contact">Connect with me</AnchorLink>
        </button>
        <button
          className="bg-black text-white border border-white px-4 py-2 rounded-full hover:border-pink-600"
          onClick={handleclick}
        >
          My resume
        </button>
      </div>
      {/* Other Sections */}
      <Aboutme />
      <Sevices />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;