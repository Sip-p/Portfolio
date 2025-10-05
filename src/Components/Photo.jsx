import React, { useState, useEffect } from 'react';

const Photo = ({ h, w  }) => {
  const [fliped, setFliped] = useState(false);
  const [pic, setPic] = useState('port.jpg');

  useEffect(() => {
    if (fliped) {
      setPic('flo.jpg');
    } else {
      setPic('port.jpg');
    }
  }, [fliped]);

  return (
    <div>
      <img
        className="h-44 w-40 object-cover rounded-lg cursor-pointer"
        src={pic}
        alt="Portfolio"
        onClick={() => setFliped(!fliped)}
        style={{ height: h, width: w }}
      />
    </div>
  );
};

export default Photo;