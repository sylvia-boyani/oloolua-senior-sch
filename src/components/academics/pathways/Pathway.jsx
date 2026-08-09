import "./Pathway.css";

const pathways = [
  {
    number: "01",
    title: "STEM Pathway",
    description:
      "The STEM pathway develops scientific thinking, innovation, problem-solving and practical skills that prepare learners for opportunities in science, technology, engineering and related fields.",
    head: "Mr. Simiyu",
    areas: [
      {
        name: "Applied Sciences",
        coordinator: "Freida"
      },
      {
        name: "Technical Studies",
        coordinator: "Onyancha"
      },
      {
        name: "Pure Sciences",
        coordinator: "Mrs. Mitema"
      }
    ]
  },

  {
    number: "02",
    title: "Social Sciences Pathway",
    description:
      "The Social Sciences pathway equips learners with knowledge and skills in languages, humanities and business while developing communication, analytical and social awareness skills.",
    head: "Mrs. Tungas",
    areas: [
      {
        name: "Languages & Literature",
        coordinator: "Ms. Florence"
      },
      {
        name: "Humanities & Business Studies",
        coordinator: "Mr. Alex"
      }
    ]
  },

  {
    number: "03",
    title: "Arts & Sports Science",
    description:
      "This pathway provides opportunities for learners to develop creativity, physical abilities, talent and discipline through the arts and sports while nurturing confidence and self-expression.",
    head: "Mr. Wasike",
    areas: [
      {
        name: "Arts",
        coordinator: "Mr. Joseph"
      },
      {
        name: "Sports Science",
        coordinator: "Mr. Albanus"
      }
    ]
  }
];

const Pathways = () => {
  return (
    <section className="pathwaysSection">

      <div className="pathwaysHeading">

        <span>GRADE 10 PATHWAYS</span>

        <h2>
          Discover Your Path.
          <span> Shape Your Future.</span>
        </h2>

        <p>
          Oloolua Senior School offers three pathways that allow learners
          to explore their interests, develop their talents and build the
          competencies needed for their future careers and aspirations.
        </p>

      </div>


      <div className="pathwaysGrid">

        {pathways.map((pathway) => (

          <article
            className="pathwayCard"
            key={pathway.number}
          >

            <div className="pathwayTop">

              <span className="pathwayNumber">
                {pathway.number}
              </span>

              <span className="pathwayLabel">
                PATHWAY
              </span>

            </div>


            <h3>
              {pathway.title}
            </h3>


            <p className="pathwayDescription">
              {pathway.description}
            </p>


            <div className="pathwayHead">

              <span>HEAD OF PATHWAY</span>

              <strong>
                {pathway.head}
              </strong>

            </div>


            <div className="pathwayAreas">

              <h4>
                Areas of Study
              </h4>

              {pathway.areas.map((area, index) => (

                <div
                  className="pathwayArea"
                  key={index}
                >

                  <div>

                    <strong>
                      {area.name}
                    </strong>

                    <small>
                      Pathway Coordinator
                    </small>

                  </div>

                  <span>
                    {area.coordinator}
                  </span>

                </div>

              ))}

            </div>

          </article>

        ))}

      </div>

    </section>
  );
};

export default Pathways;