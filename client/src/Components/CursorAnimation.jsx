import React, { useEffect, useState, useRef } from 'react'

const CursorAnimation = () => {
  const [trails, setTrails] = useState([])
  const trailRef = useRef(0)
  
  useEffect(() => {
    const colors = [
      'from-pink-900 to-rose-500',
      'from-red-700 to-pink-900',
      'from-orange-700 to-red-700',
    ]
    
    const handleMouseMove = (e) => {
      const newTrail = {
        id: trailRef.current++,
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        timestamp: Date.now()
      }
      setTrails(prev => [...prev, newTrail])
    }
    
    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setTrails(prev => prev.filter(trail => Date.now() - trail.timestamp < 600))
    }, 50)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(interval)
    }
  }, [])
  
  return (
    <>
      {trails.map((trail) => {
        // ✅ Calculate opacity and scale based on age
        const age = Date.now() - trail.timestamp;
        const opacity = Math.max(0, 1 - age / 600);
        const scale = Math.max(0, 1 - age / 600);

        // ✅ Return on SAME line or use parentheses
        return (
          <div
            key={trail.id}
            className={`
              fixed 
              pointer-events-none 
              z-[9997] 
              w-9
              h-9 
              rounded-full 
              bg-gradient-to-br 
              ${trail.color} 
              blur-sm
              transition-all
              duration-100
            `}
            style={{
              left: `${trail.x}px`,
              top: `${trail.y}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
            }}
          />
        );
      })}

      {/* ✅ Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}

export default CursorAnimation