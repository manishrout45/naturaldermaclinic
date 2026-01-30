import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function GallerySection() {
  const images = [
    {
      src: "https://img.freepik.com/premium-photo/man-with-bald-head-picture-man-with-receding-hairline_1103290-119512.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      alt: "Before Treatment",
    },
    {
      src: "https://img.freepik.com/premium-photo/two-shots-woman-face-with-nose-before-after-rhinoplasty-result-cosmetic-plastic-surgery_926199-4264647.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      alt: "Before and After",
    },
    {
      src: "https://img.freepik.com/premium-photo/medical-professional-marking-patients-scalp-hair-transplant_1160504-13034.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      alt: "After Treatment",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#eef6f7] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* HEADING */}
        <span className="text-sm italic text-blue-500">Our Gallery</span>
        <h2 className="text-4xl md:text-5xl font-light mt-2 text-gray-900">
          Before & After
        </h2>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="relative mt-12 flex justify-center md:hidden">
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-[260px] h-[340px] object-cover rounded-lg shadow-xl"
          />

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
          >
            <FaChevronLeft />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="relative mt-16 hidden md:flex justify-center items-center gap-6">

          {/* LEFT IMAGE */}
          <div className="w-[260px] h-[350px] transform -rotate-6 z-10 overflow-hidden">
            <img
              src={images[0].src}
              alt="Before Treatment"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="w-[320px] h-[400px] z-20 overflow-hidden">
            <img
              src={images[1].src}
              alt="Before and After"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[260px] h-[350px] transform rotate-6 z-10 overflow-hidden">
            <img
              src={images[2].src}
              alt="After Treatment"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>

        {/* BUTTON */}
        <div className="mt-14">
          <button className="bg-yellow-300 px-8 py-4 text-sm font-semibold text-gray-900 hover:bg-yellow-400 transition">
            VISIT OUR GALLERY
          </button>
        </div>

      </div>
    </section>
  );
}
