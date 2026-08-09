import "./AcademicsHero.css";
import banner from "../../../assets/images/cta.jpeg";

const AcademicsHero = () => {
  return (
    <section
      className="academicsHero"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="academicsOverlay"></div>

      <div className="academicsHeroContent">

        <span className="academicsTag">
          ACADEMICS
        </span>

        <h1>
          Preparing Learners
          <span> for Tomorrow's Opportunities.</span>
        </h1>

        <p>
          At Oloolua Senior School, we offer a dynamic Competency-Based
          Curriculum that empowers learners to discover their strengths,
          pursue their passions and excel through specialized academic
          pathways designed for the future.
        </p>

      </div>

    </section>
  );
};

export default AcademicsHero;