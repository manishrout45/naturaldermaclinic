import { useEffect, useState } from "react";

const testimonials = [
  {
    text: `I am very satisfied with my experience at Accalia Dermatology Clinic. 
    I just got done with my acne treatments and my face looks flawless. 
    The staff and nurses were very friendly and informative.`,
    name: "Kevin Philipson",
  },
  {
    text: `Amazing service and professional care. My skin has never felt healthier.
    The doctors explained every step clearly and the results exceeded expectations.
    I would definitely recommend this clinic to anyone looking for real results.`,
    name: "Amanda Lewis",
  },
  {
    text: `Highly recommended dermatology clinic. 
    Clean environment, friendly staff, modern equipment, and visible improvements after just a few sessions. 
    The doctors explain treatments clearly and make you comfortable.`,
    name: "Daniel Cooper",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src="/assets/images/TestimonialbgImg.png"
        alt="Testimonial"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* LEFT EMPTY (IMAGE SPACE) */}
        <div></div>

        {/* RIGHT CONTENT */}
        <div className="text-white max-w-xl">
          <span className="block italic text-sm text-blue-500 mb-2">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Our Clients Say
          </h2>

          <span className="text-yellow-300 text-5xl leading-none">“</span>

          {/* SLIDE CONTENT (AUTO HEIGHT) */}
          <div className="relative mt-4">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ease-in-out ${
                  i === index
                    ? "opacity-100 translate-y-0 block"
                    : "opacity-0 translate-y-3 hidden"
                }`}
              >
                <p className="text-sm md:text-base text-white/90 mb-6 leading-relaxed">
                  {item.text}
                </p>

                <p className="font-script text-lg text-white">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index ? "bg-yellow-300" : "bg-white/40"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
