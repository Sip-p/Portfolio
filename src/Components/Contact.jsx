import React from "react";
import Email from "./Email";
import Call from "./Call";
import Location from "./Location";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1ca60360-5e68-4f81-8813-e72a33fa4f84");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
   
  };

  return (
    <div id="Contact" className="contact-details mx-auto max-w-6xl p-6">
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />
      <div className="heading text-pink-700 text-3xl font-bold m-6 text-center">Get in Touch</div>
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />
      <div className="sub-details flex flex-col lg:flex-row gap-10 mt-11">
        {/* Left */}
        <div className="left text-white w-full lg:w-1/2">
          <h1 className="text-2xl font-serif bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Let's Talk
          </h1>
          <p>I am currently working on new projects, so feel free to reach out to me.</p>
          <div className="mt-6 space-y-4">
            <div>
              <Email color="white" h="25px" w="25px" /> 
              <span className="ml-2">pandasipra300@gmail.com</span>
            </div>
            <div>
              <Call color="white" h="25px" w="25px" /> 
              <span className="ml-2">+91-9348463158</span>
            </div>
            <div>
              <Location color="white" h="25px" w="25px" /> 
              <span className="ml-2">Sambalpur, Odisha, India</span>
            </div>
          </div>
        </div>
        {/* Right */}
        <form
          onSubmit={onSubmit}
          className="right text-white w-full lg:w-1/2 space-y-4"
        >
          <div>
            <label className="block text-lg mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              className="bg-gray-700 w-full p-2 rounded"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Your Mail</label>
            <input
              type="email"
              name="email"
              className="bg-gray-700 w-full p-2 rounded"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Your Message</label>
            <textarea
              name="message"
              className="bg-gray-700 w-full p-2 rounded h-32"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-rose-800 rounded px-4 py-2 hover:scale-95 hover:text-black hover:font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
