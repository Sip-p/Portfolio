import React from "react";

const Abphoto = ({ h = "24rem", w = "18rem" }) => {
  return (
    <div
      className="group [perspective:1000px] w-72 h-96"
      style={{ height: h, width: w }}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <img
            src="port.jpg" // image inside public folder
            alt="Front Side"
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-white rounded-xl rotate-y-180 backface-hidden shadow-xl" />
      </div>
    </div>
  );
};

export default Abphoto;