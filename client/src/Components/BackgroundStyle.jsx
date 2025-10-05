import React, { useEffect, useState } from 'react'

const BackgroundStyle = () => {
const [circle,setCircle]=useState([])
     const colors = [
        'bg-red-900',
        'bg-red-900',
        'bg-orange-900',
        'bg-red-900',
        'bg-red-900',
        'bg-orange-900',
      ]

    useEffect(()=>{
const generateCircles = () => {
  const newCircle = []
  const noOfCircle = 5;
  
  for (let i = 0; i < noOfCircle; i++) {
    newCircle.push({
      id: i,
      x: Math.random() * 100,           // ✅ 0-100% (full width)
      y: Math.random() * 100,           // ✅ 0-100% (full height)
      size: Math.random() * 100 + 150,  // ✅ 150-450px (bigger circles)
      animationDuration: Math.random() * 3 + 2,  // 2-5 seconds
      animationDelay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    })
  }
  setCircle(newCircle);
}
generateCircles()
    },[])
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
{circle.map((c)=>{
    
return <div key={c.id} className={`absolute rounded-full ${c.color} blur-3xl animate-pulse`}
style={{left:`${c.x}%`,right:`${c.y}%` ,width: `${c.size}px`,
            height: `${c.size}px`,
            animation: `pulse ${c.animationDuration}s ease-in-out infinite`,
            animationDelay: `${c.animationDelay}s`}}></div>
})}

    </div>
  )
}

export default BackgroundStyle