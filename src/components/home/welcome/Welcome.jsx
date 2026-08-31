import "./Welcome.css";
import schoolImage from "../../../assets/images/highschool.jpeg";

const Welcome = () => {
  return (
    <section className="olooluaWelcome">

      <div className="welcomeContainer">

        <div className="welcomeText">

          <span className="welcomeTag">
            WELCOME
          </span>

          <h2>
            Building Tomorrow's
            <span> Leaders Today</span>
          </h2>

          <p>
            Oloolua Senior School is committed to providing a holistic
            education that nurtures academic excellence, integrity,
            leadership, creativity, and innovation. We empower every
            learner to reach their full potential in a safe and inspiring
            environment.
          </p>

          <a href="/about" className="welcomeButton">
            Learn More
          </a>

        </div>

        <div className="welcomeImage">

          <img
            src={schoolImage}
            alt="Oloolua Senior School"
          />

          <div className="experienceCard">

            <h3>Excellence</h3>

            <p>
              Academic, Character &
              Leadership Development
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Welcome;