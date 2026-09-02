import "./Admission.css";

import banner from "../../../assets/images/5.jpeg";

const Admissions = () => {
  return (
    <main className="admissionsPage">

      {/* =====================================
          HERO
      ===================================== */}

      <section
        className="admissionsHero"
        style={{ backgroundImage: `url(${banner})` }}
      >

        <div className="admissionsHeroOverlay"></div>

        <div className="admissionsHeroContent">

          <span>ADMISSIONS</span>

          <h1>
            Begin Your Journey.
            <strong>Shape Your Future.</strong>
          </h1>

          <p>
            Discover an environment where academic excellence,
            character, creativity and talent come together to
            prepare learners for a successful future.
          </p>

        </div>

      </section>


      {/* =====================================
          INTRODUCTION
      ===================================== */}

      <section className="admissionIntro">

        <div className="admissionIntroText">

          <span className="sectionLabel">
            JOIN OLOOLUA
          </span>

          <h2>
            A Place to Learn,
            <strong>Grow & Excel.</strong>
          </h2>

          <p>
            At Oloolua Senior School, we believe that every learner
            has the potential to achieve greatness. Our school provides
            a supportive and inspiring environment where students are
            encouraged to discover their strengths, develop their
            talents and pursue academic excellence.
          </p>

          <p>
            Through quality teaching, strong values, STEM innovation,
            sports and co-curricular opportunities, we prepare our
            students to become confident, responsible and capable
            members of society.
          </p>

        </div>


        <div className="admissionIntroCard">

          <span className="introCardNumber">
            01
          </span>

          <h3>
            Your Future
            <br />
            Starts Here.
          </h3>

          <p>
            Take the first step towards an enriching
            senior school experience.
          </p>

        </div>

      </section>


      {/* =====================================
          WHY CHOOSE OLOOLUA
      ===================================== */}

      <section className="whyOloolua">

        <div className="sectionHeading">

          <span>
            WHY OLOOLUA
          </span>

          <h2>
            More Than
            <strong>Education.</strong>
          </h2>

          <p>
            We provide a well-rounded learning experience designed
            to nurture academic ability, character, creativity and
            talent.
          </p>

        </div>


        <div className="admissionFeatures">

          <article className="admissionFeature">

            <div className="featureIcon">
              01
            </div>

            <h3>
              Academic Excellence
            </h3>

            <p>
              A strong academic environment that challenges learners
              to think critically, solve problems and pursue their
              highest potential.
            </p>

          </article>


          <article className="admissionFeature">

            <div className="featureIcon">
              02
            </div>

            <h3>
              STEM Innovation
            </h3>

            <p>
              Students are encouraged to explore science, technology,
              engineering and mathematics through practical learning
              and innovation.
            </p>

          </article>


          <article className="admissionFeature">

            <div className="featureIcon">
              03
            </div>

            <h3>
              Sports & Talent
            </h3>

            <p>
              We recognise the importance of sports, creativity and
              talent in developing confident and well-rounded learners.
            </p>

          </article>


          <article className="admissionFeature">

            <div className="featureIcon">
              04
            </div>

            <h3>
              Character Development
            </h3>

            <p>
              We nurture discipline, integrity, responsibility,
              leadership and respect as essential foundations for life.
            </p>

          </article>


          <article className="admissionFeature">

            <div className="featureIcon">
              05
            </div>

            <h3>
              Supportive Community
            </h3>

            <p>
              Students learn in an environment where teachers,
              staff and fellow learners work together to encourage
              growth and success.
            </p>

          </article>


          <article className="admissionFeature">

            <div className="featureIcon">
              06
            </div>

            <h3>
              Future Ready
            </h3>

            <p>
              We prepare learners with knowledge, skills and values
              that will enable them to confidently navigate the future.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================
          REQUIREMENTS
      ===================================== */}

      <section className="admissionRequirements">

        <div className="sectionHeading">

          <span>
            ADMISSION REQUIREMENTS
          </span>

          <h2>
            What You
            <strong>Need to Know.</strong>
          </h2>

          <p>
            Prospective students and parents should prepare the
            necessary information and documents when beginning the
            admission process.
          </p>

        </div>


        <div className="requirementsGrid">

          <div className="requirementCard">

            <span>01</span>

            <h3>
              Student Information
            </h3>

            <p>
              Basic information about the learner and their
              previous academic background.
            </p>

          </div>


          <div className="requirementCard">

            <span>02</span>

            <h3>
              Academic Records
            </h3>

            <p>
              Relevant academic records or examination results
              from the learner's previous school.
            </p>

          </div>


          <div className="requirementCard">

            <span>03</span>

            <h3>
              Parent / Guardian Details
            </h3>

            <p>
              Contact and identification information for the
              parent or guardian.
            </p>

          </div>


          <div className="requirementCard">

            <span>04</span>

            <h3>
              Admission Documentation
            </h3>

            <p>
              Any additional documents requested by the school
              during the admission process.
            </p>

          </div>

        </div>

        <p className="requirementsNote">
          <strong>Note:</strong> Official admission requirements,
          fees and documentation will be provided by the school
          and can be updated here when available.
        </p>

      </section>


      {/* =====================================
          APPLICATION PROCESS
      ===================================== */}

      <section className="applicationProcess">

        <div className="sectionHeading">

          <span>
            HOW TO APPLY
          </span>

          <h2>
            Your Path to
            <strong>Oloolua.</strong>
          </h2>

          <p>
            Our application process is designed to make joining
            Oloolua Senior School as simple and straightforward
            as possible.
          </p>

        </div>


        <div className="processGrid">

          <div className="processStep">

            <div className="processNumber">
              01
            </div>

            <h3>
              Enquire
            </h3>

            <p>
              Contact the school or visit us to learn more about
              admissions and available opportunities.
            </p>

          </div>


          <div className="processLine"></div>


          <div className="processStep">

            <div className="processNumber">
              02
            </div>

            <h3>
              Apply
            </h3>

            <p>
              Complete the admission application and provide the
              required information and documentation.
            </p>

          </div>


          <div className="processLine"></div>


          <div className="processStep">

            <div className="processNumber">
              03
            </div>

            <h3>
              Review
            </h3>

            <p>
              The school reviews the application and communicates
              the next steps to the applicant.
            </p>

          </div>


          <div className="processLine"></div>


          <div className="processStep">

            <div className="processNumber">
              04
            </div>

            <h3>
              Join Us
            </h3>

            <p>
              Complete the admission process and begin your journey
              at Oloolua Senior School.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          CTA
      ===================================== */}

      <section className="admissionCTA">

        <div className="admissionCTAContent">

          <span>
            READY TO BEGIN?
          </span>

          <h2>
            Your Future
            <strong>Starts at Oloolua.</strong>
          </h2>

          <p>
            Take the first step towards a rewarding senior school
            experience built around excellence, character and
            opportunity.
          </p>

          <div className="admissionCTAButtons">

            <a
              href="admissions"
              className="admissionPrimaryButton"
            >
              Apply Now
            </a>

            <a
              href="/contact"
              className="admissionSecondaryButton"
            >
              Contact School
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Admissions;