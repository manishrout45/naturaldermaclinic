import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[600px]">
          <iframe
            title="Natural Derma Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.100626343395!2d85.81892607447611!3d20.296101612540596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c4f5f4c35f%3A0xcf566f3d7d8b888b!2sNatural%20Derma%20Clinic!5e0!3m2!1sen!2sin!4v1768827248603!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 bg-white p-10 flex flex-col justify-between">
          
          {/* Header */}
          <div>
            <h4 className="text-sm text-brown-500 tracking-wide mb-2">
              ANY MORE DETAILS?
            </h4>
            <h2 className="text-3xl font-semibold mb-8">
              Request A Consultation
            </h2>
          </div>

          {/* Form */}
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-300 focus:outline-none focus:border-b-brown-500 flex-1 pb-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-300 focus:outline-none focus:border-b-brown-500 flex-1 pb-2"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="4"
              className="border-b border-gray-300 focus:outline-none focus:border-b-brown-500 pb-2"
            ></textarea>

            <button
              type="submit"
              className="self-start bg-white border border-brown-500 text-brown-500 px-6 py-2 font-medium hover:bg-brown-500 hover:text-blue-700white transition"
            >
              SUBMIT →
            </button>
          </form>

          {/* Opening Hours */}
          <div className="mt-10 bg-gray-800 text-white p-6 rounded">
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <p>Mon – Sat: 9 am to 8 pm</p>
            <p>Sun: 10 am to 3 pm</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
