import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';  // ✅ Added gsap import
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portfolioImage from '../Components/images/pfol.png';
import employeeImage from '../Components/images/empl.png';
import chatAppImage from '../Components/images/images.jpeg';
import storybook from '../Components/images/storybook.png';
import freelance from '../Components/images/freelance.jpg';
import Habit from '../Components/images/Habit.jpg';
import eduflow from '../Components/images/eduflow.png';
import HireSence from '../Components/images/HireSence.png';

gsap.registerPlugin(ScrollTrigger);

const Mywork = () => {
  const workRef = useRef(null);
  const workRefItem = useRef([]);  // Array to hold refs

  const work = [
    {
      title: 'PortFolio',
      description: "A PortFolio Website that showcases my works",
      imageUrl: portfolioImage,
      link: 'https://example.com/portfolio',
     },
    {
      title: 'Employee Management System',
      description: "Focused on React & LocalStorage",
      imageUrl: employeeImage,
      link: 'https://example.com/employee-management',
      
    },
    {
      title: 'Food Delivery App',
      description: 'A freelance project for building real-time grocery delivery platform.',
      imageUrl: freelance,
      link: ' ',
     },
    {
      title: 'EduFlow-LMS',
      description: "A Learning Management System to help students and teachers simplify the learning process.",
      imageUrl: eduflow,
      link: ' ',
     },
    {
      title: 'HireSence',  // ✅ Fixed duplicate title
      description: "A Learning Management System to help students and teachers simplify the learning process.",
      imageUrl: HireSence,
      link: ' ',
     },
  ];

  useEffect(() => {
    // ✅ Animate each work item
    workRefItem.current.forEach((item, index) => {
      if (item) {  // ✅ Check if element exists
        gsap.fromTo(
          item,  // ✅ Use the element, not a string
          {
            opacity: 0,
            y: 80,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",  // ✅ Added toggleActions
              // markers: true,  // Uncomment to debug
            }
          }
        );
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleVisitClick = (link) => {
    if (link && link.trim() !== '') {  // ✅ Check for valid link
      window.open(link, '_blank');
    }
  };

  return (
    <div id="Mywork" className="mx-auto max-w-6xl p-6" ref={workRef}>
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />
      <h1 className="text-pink-700 text-3xl font-bold m-6 text-center">My Work</h1>
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />

      <div className="service-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4">
        {work.map((m, index) => (
          <div
            key={index}
            ref={(el) => (workRefItem.current[index] = el)}  // ✅ Properly attach ref
            className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transition-transform cursor-pointer"
            onClick={() => handleVisitClick(m.link)}  // ✅ Fixed onClick
          >
            <img
              src={m.imageUrl}
              alt={m.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h1 className="text-rose-700 text-xl font-bold mt-4">{m.title}</h1>
            <p className="text-white text-sm mt-2">{m.description}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mywork;