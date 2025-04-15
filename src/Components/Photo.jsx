import React from 'react';

const Photo = ({ h, w }) => {
  return (
    <div>
      <img
        className={`h-44 w-40 object-cover rounded-lg`}
        src='port.jpg'
        alt='Portfolio'
      />
    </div>
  );
};

export default Photo;