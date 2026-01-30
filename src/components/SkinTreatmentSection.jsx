import { useState } from "react";

export default function SkinTreatmentSection() {
  const [active, setActive] = useState("him");

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="block text-sm tracking-widest italic text-blue-500 mb-2">
          WE PROVIDE FOR YOU
        </p>

        <h2 className="text-4xl font-semibold mb-8">
          We Treat All Types of Skin
        </h2>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-14">
          <button
            onClick={() => setActive("him")}
            className={`px-8 py-3 text-sm tracking-widest transition ${
              active === "him"
                ? "bg-blue-900 text-white"
                : "border border-blue-900 text-blue-900"
            }`}
          >
            FOR HIM
          </button>

          <button
            onClick={() => setActive("her")}
            className={`px-8 py-3 text-sm tracking-widest transition ${
              active === "her"
                ? "bg-green-700 text-white"
                : "border border-green-700 text-green-700"
            }`}
          >
            FOR HER
          </button>
        </div>

        {/* Image Area */}
        <div className="relative flex justify-center items-center min-h-[450px]">
          {/* HIM IMAGE */}
          <img
            src="/assets/images/ForHim.webp"
            alt="For Him"
            className={`absolute transition-opacity duration-500 ${
              active === "him" ? "opacity-100 relative" : "opacity-0"
            }`}
          />

          {/* HER IMAGE */}
          <img
            src="/assets/images/ForHer.webp"
            alt="For Her"
            className={`absolute transition-opacity duration-500 ${
              active === "her" ? "opacity-100 relative" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
