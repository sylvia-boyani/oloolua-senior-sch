import "./Board.css";

const boardMembers = [
  {
    name: "Board Chairperson",
    position: "Chairperson"
  },
  {
    name: "Vice Chairperson",
    position: "Vice Chairperson"
  },
  {
    name: "Board Secretary",
    position: "Secretary"
  },
  {
    name: "Board Treasurer",
    position: "Treasurer"
  },
  {
    name: "Board Member",
    position: "Member"
  },
  {
    name: "Board Member",
    position: "Member"
  }
];

const Board = () => {
  return (
    <section className="boardSection">

      <div className="boardHeading">

        <span>BOARD OF MANAGEMENT</span>

        <h2>
          Strong Leadership,
          <span> Shared Vision.</span>
        </h2>

        <p>
          Our Board of Management provides strategic leadership,
          governance and oversight, ensuring that Oloolua Senior School
          continues to provide quality education while remaining true to
          its vision and values.
        </p>

      </div>

      {/* Featured Chairperson */}

      <div className="chairCard">

        <div className="chairImage">

          <span>Photo</span>

        </div>

        <div className="chairContent">

          <small>BOARD CHAIRPERSON</small>

          <h3>Chairperson Name</h3>

          <p>
            The Chairperson leads the Board of Management in providing
            strategic direction, strengthening governance and supporting
            the continued growth and success of Oloolua Senior School.
          </p>

        </div>

      </div>

      {/* Other Members */}

      <div className="boardGrid">

        {boardMembers.slice(1).map((member, index) => (

          <div className="boardCard" key={index}>

            <div className="boardImage">

              <span>Photo</span>

            </div>

            <h4>{member.name}</h4>

            <p>{member.position}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Board;