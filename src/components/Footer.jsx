import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* LOGO + ABOUT + STAY CONNECTED */}
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/assets/images/logo/logo.png"
              alt="Natural Derma Clinic"
              className="h-20 w-auto"
            />
            <div>
              <h3 className="text-white font-semibold text-lg">
                Natural Derma Clinic
              </h3>
              <p className="text-sm text-green-400">
                Beyond Your Beauty
              </p>
            </div>
          </div>

          {/* About */}
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Natural Derma Clinic offers advanced dermatology solutions with
            expert care, modern technology, and a patient-first approach.
          </p>

          {/* Stay Connected */}
          <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
          <div className="flex space-x-3">
          <a
            href="https://www.facebook.com/profile.php?id=61550768777853"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/natural_derma_clinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/natural-derma-clinic-71244629a"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>


        </div>

        {/* Skin Treatments */}
        <div>
          <h3 className="text-white font-semibold mb-4">Skin Treatments</h3>
          <ul className="space-y-2 text-sm">
            <li>Acne Treatment</li>
            <li>Eczema</li>
            <li>Psoriasis</li>
            <li>Skin Cancer</li>
            <li>Mole Analysis</li>
            <li>Online Consultation</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>How We Work</li>
            <li>FAQs</li>
            <li>Online Shop</li>
            <li>Delivery Information</li>
          </ul>
        </div>

        {/* Clinic Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Clinic Information</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="text-white">Address:</span><br />
                1st floor, plot no – N-6, 321, Biju Pattnaik <br /> College Rd, near utkarsh small finance Bank,<br /> Block N6, IRC Village,
                Jayadev Vihar, Bhubaneswar, Odisha 751015
              </li>

              <li>
                <span className="text-white">Phone:</span><br />
                +91 97766 71509
              </li>

              <li>
                <span className="text-white">Email:</span><br />
                naturaldermaclinic@gmail.com
              </li>

              <li>
                <span className="text-white">Working Hours:</span><br />
                Mon – Sat: 10:00 AM – 7:00 PM
              </li>
            </ul>
          </div>


      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-gray-500 text-sm py-4 text-center">
        Natural Derma Clinic © 2026. All Rights Reserved
      </div>
    </footer>
  );
}
