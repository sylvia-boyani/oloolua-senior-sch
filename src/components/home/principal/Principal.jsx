import "./Principal.css";
import principal from "../../../assets/images/1.jpeg";

const Principal = () => {

    return (

        <section className="principalSection">

            <div className="principalHeading">

                <span>A MESSAGE FROM THE PRINCIPAL</span>

                <h2>

                    Leading With Vision,
                    <span> Inspiring Excellence</span>

                </h2>

            </div>

            <div className="principalCard">

                <div className="principalImage">

                    <img
                        src={principal}
                        alt="Principal"
                    />

                </div>

                <div className="principalContent">

                    <p>

                        Welcome to Oloolua Senior School.

                    </p>

                    <p>

                        Our school is founded on the belief that education
                        extends far beyond academic achievement. We strive
                        to nurture young people who are intellectually
                        curious, morally grounded, innovative and prepared
                        to become responsible global citizens.

                    </p>

                    <p>

                        Through our STEM pathway, vibrant sporting
                        programmes and holistic approach to education, we
                        empower every learner to discover their strengths,
                        embrace challenges and pursue excellence with
                        confidence.

                    </p>

                    <p>

                        We invite you to become part of our journey as we
                        continue shaping future leaders equipped with the
                        knowledge, skills and values to make a positive
                        impact on society.

                    </p>

                    <div className="principalSignature">

                        <h4>Dr. Jane Wanjiku</h4>

                        <span>Principal</span>

                    </div>

                    <a
                        href="/about"
                        className="principalBtn"
                    >

                        Read More

                    </a>

                </div>

            </div>

        </section>

    );

};

export default Principal;