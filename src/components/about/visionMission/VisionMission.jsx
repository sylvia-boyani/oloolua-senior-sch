import "./VisionMission.css";
import { FaEye, FaBullseye, FaGem } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="visionMission">

      <div className="visionHeading">

        <span>OUR FOUNDATION</span>

        <h2>
          Guided by Purpose,
          <span> Driven by Excellence.</span>
        </h2>

        <p>
          Everything we do is inspired by our commitment to nurturing
          responsible, innovative and confident learners who are prepared
          to make a positive impact in society.
        </p>

      </div>

      <div className="visionGrid">

        {/* Vision */}

        <div className="visionCard">

          <div className="visionIcon">

            <FaEye />

          </div>

          <h3>Our Vision</h3>

          <p>
            To be a centre of excellence that nurtures innovative,
            responsible and globally competitive learners through
            holistic education.
          </p>

        </div>

        {/* Mission */}

        <div className="visionCard">

          <div className="visionIcon">

            <FaBullseye />

          </div>

          <h3>Our Mission</h3>

          <p>
            To provide quality education that promotes academic
            excellence, integrity, innovation, leadership and lifelong
            learning in a supportive environment.
          </p>

        </div>

        {/* Core Values */}

        <div className="visionCard">

          <div className="visionIcon">

            <FaGem />

          </div>

          <h3>Core Values</h3>

          <ul>

            <li>Integrity</li>

            <li>Diligence</li>

            <li>Discipline</li>

            <li>Team Work</li>

            <li>Professionalism</li>

            <li>Continued Improvement</li>

          </ul>

        </div>

      </div>

    </section>
  );
};

export default VisionMission;