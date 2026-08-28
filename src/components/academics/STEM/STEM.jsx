import "./STEM.css";

const STEM = () => {
  return (
    <main className="stemPage">

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


      <section className="stemAreas">

        <div className="stemSectionHeading">

          <span>AREAS OF STUDY</span>

          <h2>
            Explore the STEM
            <strong> Disciplines.</strong>
          </h2>

        </div>


        <div className="stemAreaGrid">

          <article>
            <span>01</span>

            <h3>Applied Sciences</h3>

            <p>
              Learners explore scientific knowledge and its practical
              applications in solving real-world problems.
            </p>

            <small>Coordinator: Freida</small>
          </article>


          <article>
            <span>02</span>

            <h3>Technical Studies</h3>

            <p>
              Practical and technical learning develops problem-solving,
              design and hands-on skills.
            </p>

            <small>Coordinator: Onyancha</small>
          </article>


          <article>
            <span>03</span>

            <h3>Pure Sciences</h3>

            <p>
              Learners develop a strong foundation in scientific principles,
              investigation and analytical thinking.
            </p>

            <small>Coordinator: Mrs. Mitema</small>
          </article>

        </div>

      </section>


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