 


import React, { useState } from 'react';
import portfolioImage from '../Components/images/pfol.png'; // Correct relative path
import employeeImage from '../Components/images/empl.png'; // Correct relative path
import chatAppImage from '../Components/images/images.jpeg'; // Correct relative path
import storybook from '../Components/images/storybook.png'; // Correct relative path
const Mywork = () => {
  const work = [
    {
      title: 'PortFolio',
      description: "A PortFolio Website that showcases my works",
      imageUrl: portfolioImage, // Use imported image
      link: 'https://example.com/portfolio',
      status:""
    },
    {
      title: 'Employee Management System',
      description: "Focused on React & LocalStorage",
      imageUrl: employeeImage, // Use imported image
      link: 'https://example.com/employee-management',
      status:""
    },
    {
      title: 'Real Time Chat App',
      description: "Full Stack Chat Application with Socket.io",
      imageUrl: chatAppImage, // Use imported image
      link: 'https://example.com/chat-app',
      status:'On going',
    },
    {
      title: 'React Toastify UI',
      description: 'A reusable, theme-aware toast notification component with Storybook documentation and Chromatic deployment.',
      imageUrl: storybook, // Use an appropriate imported image
      link: 'https://680402c5545e0a8ed82cd5a1-okczzkvyrx.chromatic.com/',
      status: 'Completed',
    },
    
  ];

  const handleVisitClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div id="Mywork" className="mx-auto max-w-6xl p-6">
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />
      <h1 className="text-pink-700 text-3xl font-bold m-6 text-center">My Work</h1>
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />

      <div className="service-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4">
        {work.map((m, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transition-transform"
          >
            <img
              src={m.imageUrl}
              alt={m.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h1 className="text-rose-700 text-xl font-bold mt-4">{m.title}</h1>
            <p className="text-white text-sm mt-2">{m.description}</p>
            {/* <h1 className='text-pink-800'>{m.status}</h1> */}
            {/* <button
              className="mt-4 bg-pink-950 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              onClick={() => handleVisitClick(m.link)}
            >
              Visit
             </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mywork;