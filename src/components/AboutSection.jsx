import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="bg-white shadow-xl p-4 inline-block -mt-36">
              <img
                src="https://img.freepik.com/free-photo/mature-man-going-through-follicular-unit-extraction-process_23-2149106300.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
                alt="Natural Derma Clinic Treatment"
                className="w-full max-w-md object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            <span className="block text-sm italic text-blue-500 mb-2">
              Welcome to Natural Derma Clinic
            </span>

            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Advanced Skin & Hair <span className="font-normal">Care Solutions</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
              Natural Derma Clinic is a trusted destination for advanced
              dermatology, aesthetic, and hair restoration treatments.
              We combine medical expertise, modern technology, and a
              patient-centric approach to deliver safe, effective, and
              long-lasting results for skin and hair concerns.
            </p>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 text-green-700 bg-blue-900 font-semibold">
                  1
                </span>
                <span className="text-gray-800">
                  Expert Dermatologists & Hair Specialists
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 text-green-700 bg-blue-900 font-semibold">
                  2
                </span>
                <span className="text-gray-800">
                  Advanced Treatments for Skin, Hair & Aesthetics
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 text-green-700 bg-blue-900 font-semibold">
                  3
                </span>
                <span className="text-gray-800">
                  Personalized Care with Proven Clinical Results
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Decorative background logo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 hidden lg:block pointer-events-none mr-12 mt-20">
        <img
          src="/assets/images/logo/logo.png"
          alt="Natural Derma Clinic Logo"
          className="w-[280px] h-auto object-contain"
        />
      </div>
    </section>
  );
}
