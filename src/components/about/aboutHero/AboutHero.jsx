import "./AboutHero.css";
import banner from "../../../assets/images/5.jpeg";

const AboutHero = () => {
  return (
    <section
      className="aboutHero"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="aboutHeroOverlay"></div>

      <div className="aboutHeroContent">

        <span className="aboutHeroTag">
          ABOUT OLOOLUA SENIOR SCHOOL
        </span>

        <h1>
          Building Character.
          <span> Inspiring Excellence.</span>
        </h1>

        <p>
          Discover our story, our leadership, and the dedicated people
          committed to providing quality education that empowers every
          learner to achieve excellence.
        </p>

        {/* <div className="breadcrumb">
          <a href="/">Home</a>

          <span>/</span>

          <strong>About Us</strong>
        </div> */}

      </div>

    </section>
  );
};

export default AboutHero;