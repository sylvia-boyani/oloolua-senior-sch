import {
  FaFlask,
  FaLaptopCode,
  FaLeaf,
  FaCalculator,
  FaAtom,
  FaDna,
  FaTools,
  FaCogs,
  FaDraftingCompass,
  FaMicrochip
} from "react-icons/fa";

import "./STEM.css";

const STEM = () => {
  return (
    <main className="stemPage">

      {/* ================= HERO ================= */}
      <section className="stemHero">

        <div className="stemHeroOverlay"></div>

        <div className="stemHeroContent">

          <span>STEM PATHWAY</span>

          <h1>
            Science.
            <span>Innovation. Discovery.</span>
          </h1>

          <p>
            The STEM pathway empowers learners to explore science,
            technology, engineering and mathematics while developing
            practical skills, creativity and problem-solving abilities.
          </p>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="stemIntro">

        <div>

          <span>STEM PATHWAY</span>

          <h2>
            Building Tomorrow's
            <strong> Innovators.</strong>
          </h2>

        </div>

        <p>
          Oloolua Senior School's STEM pathway provides learners with
          opportunities to develop scientific knowledge, technical
          competence and innovative thinking. The pathway encourages
          learners to investigate, experiment, create and solve real-world
          problems.
        </p>

      </section>


      {/* ================= AREAS ================= */}
      <section className="stemAreas">

        <div className="stemSectionHeading">

          <span>AREAS OF STUDY</span>

          <h2>
            Explore the STEM
            <strong> Disciplines.</strong>
          </h2>

          <p>
            Discover the subjects and learning experiences available
            within each STEM area.
          </p>

        </div>


        <div className="stemAreaGrid">

          {/* ================= APPLIED SCIENCES ================= */}
          <article className="stemAreaCard">

            <div className="stemAreaTop">

              <span className="stemNumber">01</span>

              <div className="stemAreaIcon">
                <FaFlask />
              </div>

            </div>

            <h3>Applied Sciences</h3>

            <p>
              Learners explore scientific knowledge and its practical
              applications in solving real-world problems.
            </p>

            <div className="stemSubjects">

              <h4>Subjects</h4>

              <div className="subjectGrid">

                <div className="subjectItem">
                  <FaFlask />
                  <span>General Science</span>
                </div>

                <div className="subjectItem">
                  <FaLeaf />
                  <span>Agriculture</span>
                </div>

                <div className="subjectItem">
                  <FaLaptopCode />
                  <span>Computer Studies</span>
                </div>

                <div className="subjectItem">
                  <FaFlask />
                  <span>Home Science</span>
                </div>

              </div>

            </div>

            <small>Coordinator: Freida</small>

          </article>


          {/* ================= TECHNICAL STUDIES ================= */}
          <article className="stemAreaCard">

            <div className="stemAreaTop">

              <span className="stemNumber">02</span>

              <div className="stemAreaIcon">
                <FaCogs />
              </div>

            </div>

            <h3>Technical Studies</h3>

            <p>
              Practical and technical learning develops problem-solving,
              design and hands-on skills.
            </p>

            <div className="stemSubjects">

              <h4>Subjects</h4>

              <div className="subjectGrid">

                <div className="subjectItem">
                  <FaTools />
                  <span>Technical Studies</span>
                </div>

                <div className="subjectItem">
                  <FaDraftingCompass />
                  <span>Aviation</span>
                </div>

                <div className="subjectItem">
                  <FaMicrochip />
                  <span>Electrical Technology</span>
                </div>

                <div className="subjectItem">
                  <FaCogs />
                  <span>Building & Construction</span>
                </div>

              </div>

            </div>

            <small>Coordinator: Onyancha</small>

          </article>


          {/* ================= PURE SCIENCES ================= */}
          <article className="stemAreaCard">

            <div className="stemAreaTop">

              <span className="stemNumber">03</span>

              <div className="stemAreaIcon">
                <FaAtom />
              </div>

            </div>

            <h3>Pure Sciences</h3>

            <p>
              Learners develop a strong foundation in scientific principles,
              investigation and analytical thinking.
            </p>

            <div className="stemSubjects">

              <h4>Subjects</h4>

              <div className="subjectGrid">

                <div className="subjectItem">
                  <FaCalculator />
                  <span>Mathematics</span>
                </div>

                <div className="subjectItem">
                  <FaDna />
                  <span>Biology</span>
                </div>

                <div className="subjectItem">
                  <FaFlask />
                  <span>Chemistry</span>
                </div>

                <div className="subjectItem">
                  <FaAtom />
                  <span>Physics</span>
                </div>

              </div>

            </div>

            <small>Coordinator: Mrs. Mitema</small>

          </article>

        </div>

      </section>


      {/* ================= LEADERSHIP ================= */}
      <section className="stemLeadership">

        <div className="stemLeaderImage">
          <span>Head of Pathway Photo</span>
        </div>

        <div>

          <span>PATHWAY LEADERSHIP</span>

          <h2>
            Meet the Head of
            <strong> STEM Pathway.</strong>
          </h2>

          <h3>
            Mr. Simiyu
          </h3>

          <p>
            The Head of STEM Pathway provides academic leadership and
            coordination across the STEM disciplines, supporting learners
            and teachers in achieving excellence.
          </p>

        </div>

      </section>

    </main>
  );
};

export default STEM;
