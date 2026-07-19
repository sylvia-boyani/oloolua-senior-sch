import "./WhyChoose.css";
import {
    FaGraduationCap,
    FaMedal,
    FaLaptopCode,
    FaFutbol
} from "react-icons/fa";

const WhyChoose = () => {

    return (

        <section className="whyChoose">

            <div className="whyHeader">

                <span>WHY CHOOSE US</span>

                <h2>
                    Excellence That
                    <span> Shapes Futures</span>
                </h2>

                <p>
                    At Oloolua Senior School, we inspire every learner to
                    achieve academic excellence while developing character,
                    leadership and lifelong skills that prepare them for
                    success in an ever-changing world.
                </p>

            </div>

            <div className="whyGrid">

                <div className="whyCard">

                    <div className="whyIcon">
                        <FaGraduationCap />
                    </div>

                    <h3>Academic Excellence</h3>

                    <p>
                        High quality teaching that nurtures curiosity,
                        critical thinking and outstanding academic
                        performance.
                    </p>

                </div>

                <div className="whyCard">

                    <div className="whyIcon">
                        <FaMedal />
                    </div>

                    <h3>Proven Results</h3>

                    <p>
                        Consistent academic success supported by dedicated
                        teachers and a culture of excellence.
                    </p>

                </div>

                <div className="whyCard">

                    <div className="whyIcon">
                        <FaLaptopCode />
                    </div>

                    <h3>Innovation</h3>

                    <p>
                        Modern learning experiences that integrate
                        technology, creativity and problem-solving.
                    </p>

                </div>

                <div className="whyCard">

                    <div className="whyIcon">
                        <FaFutbol />
                    </div>

                    <h3>Holistic Development</h3>

                    <p>
                        Sports, clubs, leadership and co-curricular
                        activities that develop confident, well-rounded
                        learners.
                    </p>

                </div>

            </div>

        </section>

    );

};

export default WhyChoose;