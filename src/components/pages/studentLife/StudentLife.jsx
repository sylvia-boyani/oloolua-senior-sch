import "./StudentLife.css";

import studentLifeImage from "../../../assets/images/students.jpeg";
import sportsImage from "../../../assets/images/events.jpeg";

const StudentLife = () => {
  return (
    <main className="studentLifePage">

      {/* =================================
          HERO
      ===================================== */}

      <section
        className="studentLifeHero"
        style={{ backgroundImage: `url(${studentLifeImage})` }}
      >
        <div className="studentLifeHeroOverlay"></div>

        <div className="studentLifeHeroContent">

          <span>STUDENT LIFE</span>

          <h1>
            Learn. Lead.
            <strong>Achieve.</strong>
          </h1>

          <p>
            Student life at Oloolua Senior School is built around
            academic ambition, discipline, teamwork, creativity,
            leadership and the confidence to pursue excellence.
          </p>

        </div>
      </section>


      {/* =================================
          INTRO
      ===================================== */}

      <section className="lifeIntro">

        <div className="lifeIntroLeft">

          <span className="lifeSectionTag">
            LIFE AT OLOOLUA
          </span>

          <h2>
            More Than School.
            <strong>A Community.</strong>
          </h2>

        </div>

        <div className="lifeIntroRight">

          <p>
            At Oloolua Senior School, learning continues beyond the
            classroom. Students are encouraged to participate in
            activities that develop their talents, strengthen their
            character and prepare them to become responsible and
            confident young adults.
          </p>

          <p>
            Through sports, leadership, clubs, teamwork and academic
            challenges, learners build friendships, discover their
            abilities and develop the discipline required to succeed
            both in school and beyond.
          </p>

        </div>

      </section>


      {/* =====================================
          STUDENT CULTURE
      ===================================== */}

      <section className="studentCulture">

        <div className="studentLifeHeading">

          <span>OUR CULTURE</span>

          <h2>
            The Oloolua
            <strong>Mindset.</strong>
          </h2>

          <p>
            We encourage every learner to approach school life with
            purpose, discipline and a determination to become better
            each day.
          </p>

        </div>


        <div className="cultureGrid">

          <article className="cultureCard">
            <span>01</span>

            <h3>Discipline</h3>

            <p>
              Developing self-control, responsibility and respect for
              others in every area of school life.
            </p>
          </article>


          <article className="cultureCard">
            <span>02</span>

            <h3>Consistency</h3>

            <p>
              Encouraging learners to build strong habits and give their
              best effort each day.
            </p>
          </article>


          <article className="cultureCard">
            <span>03</span>

            <h3>Hard Work</h3>

            <p>
              Teaching students that achievement comes through focus,
              determination and continuous effort.
            </p>
          </article>


          <article className="cultureCard">
            <span>04</span>

            <h3>Character</h3>

            <p>
              Building humility, integrity, teamwork and leadership
              alongside academic achievement.
            </p>
          </article>

        </div>

      </section>


      {/* =====================================
          SPORTS & TALENT
      ===================================== */}

      <section className="sportsTalent">

        <div className="sportsTalentImage">

          <img
            src={sportsImage}
            alt="Students participating in sports at Oloolua Senior School"
          />


        </div>


        <div className="sportsTalentContent">

          <span className="lifeSectionTag">
            SPORTS & TALENT
          </span>

          <h2>
            Developing Talent.
            <strong>Building Champions.</strong>
          </h2>

          <p>
            Sports play an important role in student life at Oloolua
            Senior School. Learners are encouraged to develop their
            physical abilities while building teamwork, resilience,
            discipline and confidence.
          </p>

          <div className="sportsList">

            <span>Football</span>
            <span>Volleyball</span>
            <span>Athletics</span>
            <span>Basketball</span>
            <span>Fitness</span>
            <span>Sports Science</span>

          </div>

        </div>

      </section>


      {/* =====================================
          CLUBS & LEADERSHIP
      ===================================== */}

      <section className="clubsLeadership">

        <div className="studentLifeHeading">

          <span>BEYOND THE CLASSROOM</span>

          <h2>
            Discover.
            <strong>Participate. Lead.</strong>
          </h2>

          <p>
            Student activities provide opportunities to explore
            interests, develop leadership skills and contribute to
            the wider school community.
          </p>

        </div>


        <div className="activityGrid">

          <article>
            <span>01</span>

            <h3>Student Leadership</h3>

            <p>
              Learners develop responsibility and communication through
              student leadership and prefect roles.
            </p>
          </article>


          <article>
            <span>02</span>

            <h3>Academic Clubs</h3>

            <p>
              Clubs provide opportunities to explore STEM, languages,
              debate, business and other areas of academic interest.
            </p>
          </article>


          <article>
            <span>03</span>

            <h3>Creative Arts</h3>

            <p>
              Learners express creativity through music, performance,
              visual arts and other artistic activities.
            </p>
          </article>


          <article>
            <span>04</span>

            <h3>Community & Service</h3>

            <p>
              Students are encouraged to serve others and contribute
              positively to the school and surrounding community.
            </p>
          </article>

        </div>

      </section>


      {/* =====================================
          STUDENT VALUES
      ===================================== */}

      <section className="studentValues">

        <div className="valuesContent">

          <span>OUR STUDENT VALUES</span>

          <h2>
            Focus Today.
            <strong>Excellence Tomorrow.</strong>
          </h2>

          <p>
            The values we encourage reflect the spirit of the school
            and help learners remain focused on personal growth,
            achievement and responsible leadership.
          </p>

        </div>


        <div className="valuesGrid">

          <div>
            <strong>Set Goals</strong>
            <span>Dream Big</span>
          </div>

          <div>
            <strong>Work Smart</strong>
            <span>Study Deep</span>
          </div>

          <div>
            <strong>Be Consistent</strong>
            <span>Every Day Counts</span>
          </div>

          <div>
            <strong>Support Each Other</strong>
            <span>Win With Character</span>
          </div>

          <div>
            <strong>Stay Humble</strong>
            <span>Lead With Character</span>
          </div>

          <div>
            <strong>Make History</strong>
            <span>Leave a Legacy</span>
          </div>

        </div>

      </section>


      {/* =====================================
          ACHIEVEMENT BANNER
      ===================================== */}

      <section className="studentGoalBanner">

        <div className="goalBannerContent">

          <span>THE OLOOLUA SPIRIT</span>

          <h2>
            We Don't Just Dream.
            <strong>We Achieve.</strong>
          </h2>

          <p>
            Every learner is encouraged to set ambitious goals,
            remain disciplined and work together towards academic
            and personal excellence.
          </p>

          <div className="goalStatement">
            Together, we break barriers and set new standards.
          </div>

        </div>

      </section>


      {/* =====================================
          CTA
      ===================================== */}

      <section className="studentLifeCTA">

        <div>

          <span>BECOME PART OF OLOOLUA</span>

          <h2>
            Learn With Purpose.
            <strong>Lead With Character.</strong>
          </h2>

          <p>
            Join a student community committed to excellence,
            growth, friendship, talent and achievement.
          </p>

          <div className="studentLifeCTAButtons">

            <a href="/admissions">
              Apply Now
            </a>

            <a href="/contact" className="lifeOutlineButton">
              Visit Our School
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default StudentLife;