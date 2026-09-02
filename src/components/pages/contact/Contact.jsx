import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

import contactImage from "../../../assets/images/5.jpeg";

const Contact = () => {
  return (
    <main className="contactPage">

      {/* =====================================
          HERO
      ===================================== */}

      <section
        className="contactHero"
        style={{ backgroundImage: `url(${contactImage})` }}
      >

        <div className="contactHeroOverlay"></div>

        <div className="contactHeroContent">

          <span>GET IN TOUCH</span>

          <h1>
            Connect With
            <strong>Oloolua.</strong>
          </h1>

          <p>
            Have a question about admissions, academics, student life,
            or our school community? We would be happy to hear from you.
          </p>

        </div>

      </section>


      {/* =====================================
          CONTACT INTRO
      ===================================== */}

      <section className="contactIntro">

        <div className="contactIntroHeading">

          <span>CONTACT US</span>

          <h2>
            We Are Here
            <strong>To Help.</strong>
          </h2>

        </div>

        <p>
          Whether you are a prospective parent, learner, partner,
          former student or member of our community, our team is
          ready to assist you with the information you need.
        </p>

      </section>


      {/* =====================================
          CONTACT INFORMATION
      ===================================== */}

      <section className="contactInformation">

        <div className="contactInfoGrid">

          {/* LOCATION */}

          <div className="contactInfoCard">

            <div className="contactIcon">
              <FaMapMarkerAlt />
            </div>

            <h3>Visit Us</h3>

            <p>
              Oloolua Senior School
              <br />
              Oloolua, Kajiado County
              <br />
              Kenya
            </p>

          </div>


          {/* PHONE */}

          <div className="contactInfoCard">

            <div className="contactIcon">
              <FaPhoneAlt />
            </div>

            <h3>Call Us</h3>

            <p>
              +254 758025069
    
            </p>

          </div>


          {/* EMAIL */}

          <div className="contactInfoCard">

            <div className="contactIcon">
              <FaEnvelope />
            </div>

            <h3>Email Us</h3>

            <p>
              olooluasecondary@gmail.com
            </p>

          </div>


          {/* HOURS */}

          <div className="contactInfoCard">

            <div className="contactIcon">
              <FaClock />
            </div>

            <h3>School Hours</h3>

            <p>
              Monday – Friday
              <br />
              8:00 AM – 5:00 PM
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          CONTACT FORM
      ===================================== */}

      <section className="contactFormSection">

        <div className="contactFormWrapper">

          <div className="contactFormText">

            <span>DROP US A MESSAGE</span>

            <h2>
              Let's Start
              <strong>A Conversation.</strong>
            </h2>

            <p>
              Send us a message and our team will get back to you
              with the information and guidance you need.
            </p>

            <div className="contactQuote">
              "We don't just educate learners. We prepare them
              to lead and achieve."
            </div>

          </div>


          <form className="contactForm">

            <div className="formRow">

              <div className="formGroup">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                />

              </div>


              <div className="formGroup">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                />

              </div>

            </div>


            <div className="formRow">

              <div className="formGroup">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+254 758025069"
                />

              </div>


              <div className="formGroup">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                />

              </div>

            </div>


            <div className="formGroup">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
              ></textarea>

            </div>


            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* =====================================
          MAP
      ===================================== */}

      <section className="contactMapSection">

        <div className="contactMapText">

          <span>FIND US</span>

          <h2>
            Come And
            <strong>Visit Oloolua.</strong>
          </h2>

          <p>
            We welcome parents, prospective learners and members
            of our community to visit the school and experience
            the Oloolua environment.
          </p>

        </div>

        <div className="contactMap">
            <iframe
                title="Oloolua High School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.695080250665!2d36.67254571039516!3d-1.3595887357045862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f03401a24fadb%3A0x7b909d6b7124561b!2sOloolua%20High%20School!5e0!3m2!1sen!2ske!4v1788329439342!5m2!1sen!2ske"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>

      </section>


      {/* =====================================
          SOCIAL / CTA
      ===================================== */}

      <section className="contactCTA">

        <span>STAY CONNECTED</span>

        <h2>
          Follow The
          <strong>Oloolua Journey.</strong>
        </h2>

        <p>
          Keep up with school news, activities, achievements and
          important announcements.
        </p>

        <div className="contactSocials">

          <a href="/" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="/" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="/" aria-label="YouTube">
            <FaYoutube />
          </a>

        </div>

      </section>

    </main>
  );
};

export default Contact;