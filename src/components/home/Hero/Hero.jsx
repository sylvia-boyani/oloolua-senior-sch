import "./hero.css";
import heroVideo from "../../../assets/oloolua-vida.mp4";

const Hero = () => {
  return (
    <section className="olooluaHero">

      {/* Background Video */}
      <video
        className="olooluaHeroVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="olooluaHeroOverlay"></div>

      {/* Hero Content */}
      <div className="olooluaHeroContent">

        <span className="olooluaHeroTag">
          WELCOME TO
        </span>

        <h1 className="olooluaHeroTitle">
          OLOOLUA
          <span> Senior School</span>
        </h1>
        <p>It Can be Done!</p>
        <p className="olooluaHeroText">
          Nurturing Excellence, Character, Innovation and Leadership
          through holistic education that prepares learners for a
          dynamic world.
        </p>

        <div className="olooluaHeroButtons">

          <a href="/admissions" className="heroPrimaryBtn">
            Apply Now
          </a>

          <a href="/about" className="heroSecondaryBtn">
            Discover More
          </a>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="heroScroll">
        <span></span>
      </div>

    </section>
  );
};

export default Hero;