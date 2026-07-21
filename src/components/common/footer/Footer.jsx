import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footerContainer">

        {/* Column 1 */}

        <div className="footerColumn">

          <h2 className="footerLogo">
            OLOOLUA
            <span>Senior School</span>
          </h2>

          <p>
            Inspiring academic excellence, innovation, leadership and
            character through quality education that prepares learners
            for a successful future.
          </p>

          <div className="footerSocial">

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaYoutube />
            </a>

            <a href="/">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* Column 2 */}

        <div className="footerColumn">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Academics</a>
          <a href="/">Admissions</a>
          <a href="/">Student Life</a>
          <a href="/">Gallery</a>

        </div>

        {/* Column 3 */}

        <div className="footerColumn">

          <h3>Resources</h3>

          <a href="/">News & Events</a>
          <a href="/">Downloads</a>
          <a href="/">School Calendar</a>
          <a href="/">Careers</a>
          <a href="/">FAQs</a>
          <a href="/">Privacy Policy</a>

        </div>

        {/* Column 4 */}

        <div className="footerColumn">

          <h3>Contact Us</h3>

          <div className="footerContact">

            <FaMapMarkerAlt />

            <span>
              Oloolua, Kajiado County,
              Kenya
            </span>

          </div>

          <div className="footerContact">

            <FaPhoneAlt />

            <span>
              +254 XXX XXX XXX
            </span>

          </div>

          <div className="footerContact">

            <FaEnvelope />

            <span>
              info@olooluaschool.ac.ke
            </span>

          </div>

        </div>

      </div>

      <div className="footerBottom">

        <p>

          © {new Date().getFullYear()} Oloolua Senior School.
          All Rights Reserved.

        </p>

      </div>

    </footer>
  );
};

export default Footer;