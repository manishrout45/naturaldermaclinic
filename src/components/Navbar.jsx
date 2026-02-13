import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Service", id: "service" },
    { name: "Gallery", id: "gallery" },
    { name: "Testimonial", id: "testimonial" },
    { name: "Contact", id: "contact" },
  ];

  // Smooth scroll with navbar offset
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100; // Adjust based on navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setActive(id);
      setMenuOpen(false);
    }
  };

  // Active menu on scroll
  useEffect(() => {
    const handleActiveOnScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleActiveOnScroll);
    return () =>
      window.removeEventListener("scroll", handleActiveOnScroll);
  }, []);

  return (
    <header className="bg-white text-blue-800 fixed top-0 left-0 w-full z-50">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center space-x-1 sm:space-x-3">
          <img
            src="/assets/images/logo/logo.png"
            alt="DermNet"
            className="h-12 sm:h-20 w-auto"
          />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-base sm:text-lg leading-none">
              Natural Derma Clinic
            </span>
            <span className="text-xs sm:text-sm text-green-500 leading-none">
              Beyond your Beauty
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-3">
          <span className="hidden md:block text-sm">
            Are you looking for appointment ?
          </span>

          {/* DESKTOP CTA */}
          <button
            onClick={() => handleScroll("contact")}
            className="hidden md:block bg-blue-900 hover:bg-blue-800 px-4 py-2 rounded text-white"
          >
            Book Now →
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-0.5 w-6 bg-blue-600 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-blue-600 my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-blue-600 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="bg-blue-800 text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex h-12 items-center divide-x divide-blue-600 text-sm">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="h-full">
                  <button
                    onClick={() => handleScroll(item.id)}
                    className={`relative h-full px-5 flex items-center transition
                      ${
                        isActive
                          ? "bg-green-900 font-semibold"
                          : "hover:bg-green-700"
                      }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-white" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <div
        className={`md:hidden bg-blue-800 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col divide-y divide-blue-600 text-white text-sm">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`w-full text-left px-6 py-4 transition ${
                    isActive
                      ? "bg-green-900 font-semibold"
                      : "hover:bg-green-700"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>

        {/* MOBILE CTA */}
        <div className="px-6 py-4 border-t border-blue-600">
          <button
            onClick={() => handleScroll("contact")}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded"
          >
            Book Now →
          </button>
        </div>
      </div>
    </header>
  );
}
