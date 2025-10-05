import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const serviceItemsRef = useRef([]);

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Crafting beautiful UIs using React, Tailwind CSS, and JavaScript with smooth user experiences.",
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Building robust and scalable servers using Node.js, Express.js, and MongoDB.",
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Delivering complete web solutions from frontend to backend, with authentication, APIs, and DB integration.",
    },
  ];

  useEffect(() => {
    // Animate each service card
    serviceItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 100,  // Start 100px below
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,  // Stagger effect
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",  // Start when top of element hits 80% of viewport
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // markers: true,  // Uncomment to see trigger points
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="Services" className="services mx-auto max-w-6xl p-6" ref={servicesRef}>
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />
      <h1 className="text-pink-700 text-3xl font-bold m-6 text-center">Services</h1>
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />
      
      <div className="service-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (serviceItemsRef.current[index] = el)}  // ✅ Attach ref to each card
            className="Service-item flex flex-col justify-center items-center py-10 px-5 border-x-2 border-rose-700 border-y-4 rounded hover:bg-slate-900 transition-transform hover:scale-105 text-center"
          >
            <h1 className="text-white text-5xl font-bold">{service.id}</h1>
            <h1 className="text-rose-700 text-2xl font-sans font-bold mt-2">{service.title}</h1>
            <p className="text-white w-full mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;