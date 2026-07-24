import "./Deputies.css";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

const deputies = [
  {
    name: "Goerge Ndun'gu",
    role: "Deputy Principal - Administration",
    description:
      "Provides leadership in school administration, student welfare, discipline and the smooth day-to-day running of the institution.",
    icon: <FaGraduationCap />
  },
  {
    name: "Bernice Nderitu",
    role: "Deputy Principal - Academics",
    description:
      "Oversees curriculum implementation, academic performance, examinations and instructional quality across all learning areas.",
    icon: <FaBookOpen />
  }
];

const Deputies = () => {
  return (
    <section className="deputiesSection">

      <div className="deputiesHeading">

        <span>DEPUTY PRINCIPALS</span>

        <h2>
          Supporting Excellence,
          <span> Every Day.</span>
        </h2>

        <p>
          Working alongside the Principal, our Deputy Principals provide
          leadership in academic excellence, administration and student
          development, ensuring that every learner thrives in a supportive
          environment.
        </p>

      </div>

      <div className="deputiesGrid">

        {deputies.map((deputy, index) => (

          <div className="deputyCard" key={index}>

            <div className="deputyImage">

              <span>Photo</span>

            </div>

            <div className="deputyContent">

              <div className="deputyIcon">
                {deputy.icon}
              </div>

              <h3>{deputy.name}</h3>

              <h4>{deputy.role}</h4>

              <p>{deputy.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Deputies;