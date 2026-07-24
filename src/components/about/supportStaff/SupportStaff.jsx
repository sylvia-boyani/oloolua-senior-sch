import "./SupportStaff.css";
import { useState } from "react";

const supportStaff = [
  { name: "Staff Name", role: "School Administrator" },
  { name: "Staff Name", role: "School Accountant" },
  { name: "Staff Name", role: "School Nurse" },
  { name: "Staff Name", role: "Librarian" },
  { name: "Staff Name", role: "Laboratory Technician" },
  { name: "Staff Name", role: "ICT Technician" },
  { name: "Staff Name", role: "School Cook" },
  { name: "Staff Name", role: "Groundskeeper" },
  { name: "Staff Name", role: "Security Officer" },
  { name: "Staff Name", role: "Cleaner" },
  { name: "Staff Name", role: "Driver" },
  { name: "Staff Name", role: "Storekeeper" }
];

const SupportStaff = () => {

  const [showAll, setShowAll] = useState(false);

  const visibleStaff = showAll
    ? supportStaff
    : supportStaff.slice(0, 4);

  return (

    <section className="supportSection">

      <div className="supportHeading">

        <span>ESSENTIAL STAFF</span>

        <h2>
          The Team Behind
          <span> Our Success.</span>
        </h2>

        <p>
          Behind every successful school is a dedicated essential team.
          Our administrative and essential staff work tirelessly to create
          a safe, organized and welcoming environment where learning can
          flourish every day.
        </p>

      </div>

      <div className="supportGrid">

        {visibleStaff.map((staff, index) => (

          <div className="supportCard" key={index}>

            <div className="supportImage">

              <span>Photo</span>

            </div>

            <div className="supportContent">

              <h3>{staff.name}</h3>

              <p>{staff.role}</p>

            </div>

          </div>

        ))}

      </div>

      <div className="supportButton">

        <button onClick={() => setShowAll(!showAll)}>

          {showAll ? "Show Less ▲" : "See All Support Staff ▼"}

        </button>

      </div>

    </section>

  );

};

export default SupportStaff;