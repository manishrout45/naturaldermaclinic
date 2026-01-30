import { useState } from "react";

export default function AntiAgingSection() {
  const [openStep, setOpenStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Is hair transplant a permanent solution?",
      desc: "Yes, hair transplant is a permanent solution as healthy hair follicles are taken from the donor area and implanted into thinning or balding areas. The transplanted hair grows naturally and lasts a lifetime with proper care.",
    },
    {
      id: 2,
      title: "What skin problems can dermatology treatments cure?",
      desc: "Dermatology treatments help manage acne, pigmentation, eczema, psoriasis, hair loss, skin aging, scars, and many other skin and hair conditions using advanced medical and cosmetic techniques.",
    },
    {
      id: 3,
      title: "What is PRP treatment and is it safe?",
      desc: "PRP (Platelet-Rich Plasma) treatment uses your own blood platelets to promote healing and regeneration. It is completely safe, minimally invasive, and commonly used for hair loss, skin rejuvenation, and joint pain.",
    },
    {
      id: 4,
      title: "How long does it take to see results from treatments?",
      desc: "Results vary depending on the treatment. Skin treatments may show improvement within a few weeks, while hair treatments like PRP or transplant usually show visible growth within 3 to 6 months.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-[#dfe8ef] to-[#eef4f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <span className="block text-sm italic text-blue-500 mb-2">
            FAQs
          </span>

          <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-snug mb-10">
            Dermatology & Hair <br /> Treatment FAQs
          </h2>

          {/* ACCORDION */}
          <div className="bg-white shadow-md max-w-md">
            {steps.map((step) => (
              <div key={step.id} className="border-b last:border-none">
                <button
                  onClick={() =>
                    setOpenStep(openStep === step.id ? null : step.id)
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="text-gray-800 text-sm">
                    {step.title}
                  </span>

                  <span className="bg-green-600 text-white w-8 h-8 flex items-center justify-center">
                    {openStep === step.id ? "˄" : "˅"}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openStep === step.id
                      ? "max-h-40 pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/beauty-people-anti-aging-skincare-concept-smiling-middle-aged-woman-with-bare-shoulders-touching-face-blue-background_380164-119292.jpg"
            alt="Dermatology FAQ"
            className="w-full h-auto object-cover"
          />

          {/* TARGET POINTS */}
          {[
            { top: "24%", left: "60%" },
            { top: "40%", left: "50%" },
            { top: "55%", left: "48%" },
            { top: "58%", left: "60%" },
          ].map((dot, i) => (
            <span
              key={i}
              className="absolute w-4 h-4 border border-white rounded-full animate-ping"
              style={{ top: dot.top, left: dot.left }}
            >
              <span className="absolute inset-1 bg-white rounded-full"></span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
