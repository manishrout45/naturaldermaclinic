import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center mt-12 sm:mt-20">
      
      {/* Background Image */}
      <img
        src="/assets/images/Hero_img.png" // replace with your hero image
        alt="Dermatology & Skin Care"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-xl text-white">

          {/* Small script text */}
          <span className="block mb-2 text-sm italic tracking-wide opacity-90">
            Meet Our Clinic
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Dermatology <br />
            <span className="font-normal">& Skin Care</span>
          </h1>

          {/* Button */}
          <div className="mt-8">
            <button className="group flex items-center bg-blue-700 text-white px-6 py-4 font-medium tracking-wide hover:bg-blue-800 hover:text-white transition">
              MAKE AN APPOINTMENT
              <span className="ml-4 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
