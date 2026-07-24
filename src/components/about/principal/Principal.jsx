import "./Principal.css";
import { FaGraduationCap, FaAward, FaUserTie } from "react-icons/fa";

const Principal = () => {
  return (
    <section className="aboutPrincipal">

      <div className="principalHeading">

        <span>THE PRINCIPAL</span>

        <h2>
          Leading With Vision,
          <span> Inspiring Every Learner.</span>
        </h2>

        <p>
          Meet the educational leader guiding Oloolua Senior School with
          dedication, integrity and a commitment to academic excellence.
        </p>

      </div>

      <div className="principalContainer">

        {/* Image */}

        <div className="principalImage">

          <div className="principalPlaceholder">

            <span>Principal's Photo</span>

          </div>

        </div>

        {/* Content */}

        <div className="principalContent">

          <small>PRINCIPAL</small>

          <h3>Principal's Name</h3>

          <h4>Principal, Oloolua Senior School</h4>

          <p>
            The Principal provides visionary leadership, ensuring that
            Oloolua Senior School remains a centre of academic excellence,
            innovation and character development. Working closely with
            staff, learners, parents and the Board of Management, the
            Principal fosters an environment where every learner is
            encouraged to achieve their highest potential.
          </p>

          <p>
            Through a commitment to quality education, discipline and
            holistic development, the Principal continues to champion
            programmes that prepare students for higher education,
            leadership and responsible citizenship.
          </p>

          <div className="principalHighlights">

            <div className="highlight">

              <FaGraduationCap />

              <div>

                <h5>Education</h5>

                <p>B.Ed / M.Ed (Update Later)</p>

              </div>

            </div>

            <div className="highlight">

              <FaAward />

              <div>

                <h5>Experience</h5>

                <p>Years of Educational Leadership</p>

              </div>

            </div>

            <div className="highlight">

              <FaUserTie />

              <div>

                <h5>Leadership</h5>

                <p>Academic Excellence & Student Development</p>

              </div>

            </div>

          </div>

          <blockquote>

            "Education is not only about achieving academic success;
            it is about nurturing responsible citizens, innovative
            thinkers and compassionate leaders."

          </blockquote>

        </div>

      </div>

    </section>
  );
};

export default Principal;