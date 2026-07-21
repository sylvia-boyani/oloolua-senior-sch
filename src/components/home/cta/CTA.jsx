import "./CTA.css";
import ctaImage from "../../../assets/images/cta.jpeg";

const CTA = () => {
  return (
    <section
      className="ctaSection"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      <div className="ctaOverlay"></div>

      <div className="ctaContent">

        <span>BEGIN YOUR JOURNEY</span>

        <h2>
          Ready to Join
          <span> Oloolua Senior School?</span>
        </h2>

        <p>
          Discover a school where academic excellence, STEM innovation,
          leadership, character development and sporting talent come
          together to prepare learners for a bright future.
        </p>

        <div className="ctaButtons">

          <a href="/admissions" className="ctaPrimary">
            Apply Now
          </a>

          <a href="/contact" className="ctaSecondary">
            Book a Visit
          </a>

        </div>

      </div>
    </section>
  );
};

export default CTA;