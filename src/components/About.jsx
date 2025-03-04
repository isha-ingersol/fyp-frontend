import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/about.css';
import step1 from '../assets/videos/child-writing.gif'; 
import step2 from '../assets/videos/take-picture.gif';
import step3 from '../assets/videos/upload-image.gif';

function about({ className }) {
    return (
        <section id="about" className={`about-area ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h3 className="title">About</h3>
                        </div>
                    </div>
                </div>

                <div className="types-container">
                    {/* Type 1 */}
                    <div className="about-type">
                        <h3>
                            Our Mission
                        </h3>
                        <h4>
                            Dyslexia is a learning difficulty which primarily affects reading and writing skills, 
                            specifically with <span>information processing.</span>
                            Dyslexia can also impact on other areas such as <span>organisational skills.</span>
                        </h4>
                    </div>

                    {/* Type 2 */}
                    <div className="about-type">
                        <h3>
                            Our Vision
                        </h3>
                        <h4>
                            Dysgraphia is a neurological condition, where a person has difficulty turning 
                            their <span>thoughts into written language,</span> despite exposure to adequate instruction 
                            and education.
                        </h4>
                    </div>

                    {/* Type 3 */}
                    <div className="about-type">
                        <h3>
                            Our Future
                        </h3>
                        <h4>
                            Dyscalculia affects brain areas that handle <span>mathematics and math-related skills and understanding.</span>
                            <p />
                            Symptoms usually appear in childhood, but adults may have dyscalculia without knowing it.
                        </h4>
                    </div>
                </div>

                {/* Start Free Assessment Button */}
                <div className="button-container">
                    <Link to="/assessment" className="button">Start Free Assessment</Link>
                </div>
            </div>
        </section>
    );
}

export default about;