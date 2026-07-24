import "./Story.css";

const Story = () => {
  return (
    <section className="storySection">

      <div className="storyContainer">

        <div className="storyContent">

          <span className="storyTag">
            OUR STORY
          </span>

          <h2>
            A Legacy of Learning,
            <span> A Future of Excellence.</span>
          </h2>

          <p>
            Oloolua Senior School was established with a vision of
            providing quality education that nurtures academic
            excellence, leadership, innovation and integrity. Since its
            inception, the school has remained committed to preparing
            learners for success in higher education and in life through
            holistic learning experiences.
          </p>

          <p>
            As a STEM Pathway School, we embrace modern teaching methods,
            scientific inquiry and technological innovation while
            maintaining strong values of discipline, respect and
            responsibility. Alongside academics, we encourage
            participation in sports, leadership, culture and community
            service, ensuring that every learner develops into a
            confident and responsible citizen.
          </p>

          <div className="storyHighlights">

            <div className="storyItem">
              <h3>Academic Excellence</h3>
              <p>Committed to high standards of teaching and learning.</p>
            </div>

            <div className="storyItem">
              <h3>STEM Innovation</h3>
              <p>Preparing learners for careers in science and technology.</p>
            </div>

            <div className="storyItem">
              <h3>Character Development</h3>
              <p>Building responsible, confident and ethical leaders.</p>
            </div>

          </div>

        </div>

        <div className="storyImage">

          <div className="imagePlaceholder">

            <span>
              School History Image
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Story;