import "./Teachers.css";
import { useState } from "react";

const teachers = [
  { name: "Teacher Name", subject: "Mathematics" },
  { name: "Teacher Name", subject: "Physics" },
  { name: "Teacher Name", subject: "Chemistry" },
  { name: "Teacher Name", subject: "Biology" },
  { name: "Teacher Name", subject: "English" },
  { name: "Teacher Name", subject: "Kiswahili" },
  { name: "Teacher Name", subject: "History" },
  { name: "Teacher Name", subject: "Geography" },
  { name: "Teacher Name", subject: "Computer Science" },
  { name: "Teacher Name", subject: "Business Studies" },
  { name: "Teacher Name", subject: "Agriculture" },
  { name: "Teacher Name", subject: "Physical Education" }
];

const Teachers = () => {

  const [showAll, setShowAll] = useState(false);

  const displayedTeachers = showAll
    ? teachers
    : teachers.slice(0, 4);

  return (

    <section className="teachersSection">

      <div className="teachersHeading">

        <span>OUR TEACHERS</span>

        <h2>
          Dedicated Educators,
          <span> Inspiring Future Leaders.</span>
        </h2>

        <p>
          Our teachers are committed professionals who inspire curiosity,
          nurture talent and guide every learner towards academic and
          personal excellence.
        </p>

      </div>

      <div className="teachersGrid">

        {displayedTeachers.map((teacher, index) => (

          <div className="teacherCard" key={index}>

            <div className="teacherImage">

              <span>Photo</span>

            </div>

            <div className="teacherContent">

              <h3>{teacher.name}</h3>

              <p>{teacher.subject}</p>

            </div>

          </div>

        ))}

      </div>

      <div className="teachersButton">

        <button onClick={() => setShowAll(!showAll)}>

          {showAll ? "Show Less ▲" : "See All Teachers ▼"}

        </button>

      </div>

    </section>

  );

};

export default Teachers;