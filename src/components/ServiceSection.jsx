import React from "react";

export default function ServiceSection() {
  const services = [
    {
      img: "https://img.freepik.com/free-photo/client-beautician-s-appointment-consultation-face-shaping-preparation-upcoming-procedures-visual-examination-problem-areas_343596-4175.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      count: "4 Procedures",
      title: "Women Aesthetics",
      desc: "Clinic provide many treatments from skin aging to body contouring.",
    },
    {
      img: "https://img.freepik.com/free-photo/patient-undergoing-microneedling-procedure_23-2149374052.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      count: "5 Procedures",
      title: "Medical Dermatology",
      desc: "Cosmetic & Pediatric Dermatology, Skin Cancer and Surgery.",
    },
    {
      img: "https://img.freepik.com/premium-photo/shirtless-man-lying-with-closed-eyes-careful-beautician-nourishing-skin-his-forehead_376548-2628.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      count: "6 Procedures",
      title: "Male Treatments",
      desc: "Explore procedures specializing in addressing men’s needs.",
    },
    {
      img: "https://img.freepik.com/premium-photo/bearded-man-getting-anti-hair-loss-treatment-by-beautician_118628-2305.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      count: "6 Procedures",
      title: "Hair Restoration & PRP",
      desc: "Advanced hair transplant and PRP therapies for natural and permanent results.",
    },
  ];

  const procedures = [
    "Hydra Facial",
    "Meso prp",
    "Allergies",
    "Wart Mole Removal",
    "Chemical Peel",
    "Facial Redness",
    "Melasma",
    "Scar Removal",
    "Angiofibromas",

    // 🔹 Hair & PRP Services
    "Hair Transplant",
    "FUE Hair Transplant",
    "FUT Hair Transplant",
    "PRP Hair Treatment",
    "Hair Loss Treatment",
    "Skin Rejuvenation (PRP)",
    "Joint Pain PRP Therapy",
  ];

  return (
    <section className="bg-gradient-to-b from-green-900 via-green-600 to-green-950 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="block text-sm italic text-blue-500 mb-1">
            PROCEDURES
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Our Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute inset-y-0 left-1/2 w-px bg-white/70"></span>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <span className="block text-xs uppercase tracking-wide text-blue-500 mb-2">
                  {service.count}
                </span>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {service.desc}
                </p>
                <button className="bg-yellow-200 hover:bg-yellow-300 text-gray-900 px-6 py-3 text-xs tracking-wide font-medium transition">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Explore Procedures */}
        <div>
          <h3 className="text-lg font-medium text-white mb-6">
            Explore All Procedures
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8 text-sm">
            {procedures.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-white hover:text-blue-600 transition"
              >
                <span className="text-blue-500 text-lg">›</span>
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
