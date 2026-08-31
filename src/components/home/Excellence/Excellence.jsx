import "./Excellence.css";

import stem from "../../../assets/images/aviation-stem.jpeg";
import sports from "../../../assets/images/sports.jpeg";

import { FaLaptopCode, FaFutbol } from "react-icons/fa";

const Excellence = () => {

    return (

        <section className="excellence">

            <div className="sectionHeading">

                <span>ACADEMIC EXCELLENCE</span>

                <h2>

                    Inspiring Innovation Through
                    <span> STEM & Sports</span>

                </h2>

                <p>

                    We believe that every learner deserves an education
                    that develops both the mind and the body, preparing
                    them to thrive in higher education and beyond.

                </p>

            </div>

            {/* STEM */}

            <div className="pathway">

                <div className="pathwayImage">

                    <img src={stem} alt="STEM Learning" />

                </div>

                <div className="pathwayContent">

                    <div className="pathwayIcon">

                        <FaLaptopCode />

                    </div>

                    <h3>STEM Pathway</h3>

                    <p>

                        Our STEM programme equips students with analytical,
                        creative and problem-solving skills through
                        Mathematics, Sciences, Technology and Innovation.

                    </p>

                    <ul>

                        <li>✔ Robotics & Innovation</li>

                        <li>✔ Computer Studies & ICT</li>

                        <li>✔ Modern Science Laboratories</li>

                        <li>✔ Coding & Digital Skills</li>

                        <li>✔ Research Projects</li>

                    </ul>

                </div>

            </div>

            {/* SPORTS */}

            <div className="pathway reverse">

                <div className="pathwayContent">

                    <div className="pathwayIcon">

                        <FaFutbol />

                    </div>

                    <h3>Sports Excellence</h3>

                    <p>

                        We nurture talent beyond the classroom through
                        competitive sports, teamwork and leadership
                        opportunities.

                    </p>

                    <ul>

                        <li>✔ Football</li>

                        <li>✔ Basketball</li>

                        <li>✔ Volleyball</li>

                        <li>✔ Athletics</li>

                        <li>✔ Fitness & Wellness</li>

                    </ul>

                </div>

                <div className="pathwayImage">

                    <img src={sports} alt="Sports Excellence" />

                </div>

            </div>

        </section>

    );

};

export default Excellence;