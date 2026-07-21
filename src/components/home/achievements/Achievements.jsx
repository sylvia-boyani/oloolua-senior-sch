import "./Achievements.css";
import CountUp from "react-countup";

const achievements = [
  {
    number: 70,
    suffix: "%",
    title: "University & Tertiary Transition",
    text: "Preparing learners for higher education and future careers."
  },
  {
    number: 1200,
    suffix: "+",
    title: "Students",
    text: "A vibrant community of learners growing together."
  },
  {
    number: 40,
    suffix: "+",
    title: "Qualified Teachers",
    text: "Dedicated professionals committed to student success."
  },
  {
    number: 5,
    suffix: "+",
    title: "STEM Facilities",
    text: "Modern science and technology learning spaces."
  },
  {
    number: 10,
    suffix: "+",
    title: "Sports & Clubs",
    text: "Developing talent beyond the classroom."
  },
  {
    number: 25,
    suffix: "+",
    title: "Years of Excellence",
    text: "A tradition of nurturing future leaders."
  }
];

const Achievements = () => {
  return (
    <section className="achievementsSection">

      <div className="achievementsHeading">

        <span>OUR ACHIEVEMENTS</span>

        <h2>
          Excellence
          <span> Measured by Results</span>
        </h2>

        <p>
          We celebrate academic success, innovation, leadership and
          holistic development through measurable achievements that
          inspire confidence in our school community.
        </p>

      </div>

      <div className="achievementGrid">

        {achievements.map((item, index) => (

          <div className="achievementCard" key={index}>

            <h3>

              <CountUp
                end={item.number}
                duration={3}
              />

              {item.suffix}

            </h3>

            <h4>{item.title}</h4>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Achievements;