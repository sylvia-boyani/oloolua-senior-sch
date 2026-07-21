import "./Testimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Parent Name",
    role: "Parent",
    message:
      "Oloolua Senior School has provided an environment where my child has grown academically, socially and in confidence. The teachers are supportive and the STEM programme has inspired a genuine love for learning."
  },
  {
    name: "Student Name",
    role: "Form 4 Student",
    message:
      "The opportunities in sports, leadership and science have helped me discover my strengths. Every day at Oloolua motivates me to become the best version of myself."
  },
  {
    name: "Alumni Name",
    role: "Alumnus",
    message:
      "The values and discipline I gained at Oloolua prepared me for university and life beyond school. I will always be proud to call this my school."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="testimonialHeading">

        <span>TESTIMONIALS</span>

        <h2>

          Voices of
          <span> Our Community</span>

        </h2>

      </div>

      <div className="testimonialGrid">

        {testimonials.map((item, index) => (

          <div className="testimonialCard" key={index}>

            <FaQuoteLeft className="quoteIcon" />

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p>{item.message}</p>

            <h4>{item.name}</h4>

            <span>{item.role}</span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Testimonials;