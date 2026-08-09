import "./AcademicPhilosophy.css";
import {
  FaLightbulb,
  FaUserGraduate,
  FaChartLine
} from "react-icons/fa";

const AcademicPhilosophy = () => {
  return (
    <section className="academicPhilosophy">

      <div className="philosophyContainer">

        {/* LEFT SIDE */}

        <div className="philosophyIntro">

          <span className="philosophyTag">
            OUR ACADEMIC PHILOSOPHY
          </span>

          <h2>
            Learning That
            <span> Goes Beyond the Classroom.</span>
          </h2>

          <p>
            At Oloolua Senior School, we believe education should do more
            than prepare learners for examinations. It should help every
            student discover their abilities, develop confidence and
            acquire the knowledge, skills and values needed to thrive in
            a changing world.
          </p>

          <p>
            Through the Competency-Based Curriculum, we provide learners
            with opportunities to explore their interests, develop their
            talents and prepare for meaningful careers and responsible
            citizenship.
          </p>

        </div>


        {/* RIGHT SIDE */}

        <div className="philosophyPrinciples">

          <div className="philosophyCard">

            <div className="philosophyIcon">
              <FaLightbulb />
            </div>

            <div>
              <h3>Discover & Explore</h3>

              <p>
                We encourage curiosity, creativity and critical thinking,
                allowing learners to discover their strengths and explore
                new possibilities.
              </p>
            </div>

          </div>


          <div className="philosophyCard">

            <div className="philosophyIcon">
              <FaUserGraduate />
            </div>

            <div>
              <h3>Student-Centred Learning</h3>

              <p>
                Every learner is unique. Our approach places students at
                the centre of learning while supporting their individual
                abilities, interests and aspirations.
              </p>
            </div>

          </div>


          <div className="philosophyCard">

            <div className="philosophyIcon">
              <FaChartLine />
            </div>

            <div>
              <h3>Grow & Excel</h3>

              <p>
                We nurture academic excellence alongside character,
                leadership, collaboration and practical skills that
                prepare learners for life beyond school.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AcademicPhilosophy;