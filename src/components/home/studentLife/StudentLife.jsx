import "./StudentLife.css";

import lab from "../../../assets/images/4.jpeg";
import sports from "../../../assets/images/sports.jpeg";
import clubs from "../../../assets/images/7.jpeg";
import leadership from "../../../assets/images/11.jpeg";

const StudentLife = () => {

    return (

        <section className="studentLife">

            <div className="lifeHeading">

                <span>STUDENT LIFE</span>

                <h2>

                    Learning Beyond
                    <span> The Classroom</span>

                </h2>

                <p>

                    At Oloolua Senior School, education extends beyond the
                    classroom. Students discover their passions, develop
                    leadership skills and build lifelong friendships through
                    diverse co-curricular experiences.

                </p>

            </div>

            {/* STEM */}

            <div className="lifeRow">

                <img src={lab} alt="STEM Laboratory" />

                <div>

                    <h3>STEM Discovery</h3>

                    <p>

                        Modern laboratories and innovation spaces encourage
                        learners to experiment, research and solve real-world
                        challenges through science and technology.

                    </p>

                </div>

            </div>

            {/* SPORTS */}

            <div className="lifeRow reverse">

                <div>

                    <h3>Sports & Wellness</h3>

                    <p>

                        Students participate in football, volleyball,
                        basketball, athletics and other activities that
                        promote discipline, teamwork and healthy living.

                    </p>

                </div>

                <img src={sports} alt="Sports" />

            </div>

            {/* CLUBS */}

            <div className="lifeRow">

                <img src={clubs} alt="Clubs" />

                <div>

                    <h3>Clubs & Talent</h3>

                    <p>

                        From debate and music to robotics and environmental
                        clubs, students discover talents while building
                        confidence and creativity.

                    </p>

                </div>

            </div>

            {/* LEADERSHIP */}

            <div className="lifeRow reverse">

                <div>

                    <h3>Leadership Development</h3>

                    <p>

                        Through student leadership programmes and community
                        service, learners develop responsibility,
                        communication and decision-making skills.

                    </p>

                </div>

                <img src={leadership} alt="Leadership" />

            </div>

        </section>

    );

};

export default StudentLife;