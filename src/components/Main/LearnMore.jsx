import React from "react";
import "../../assets/css/learnmore.css";
import step1 from "../../assets/videos/child-writing.gif";
import step2 from "../../assets/videos/take-picture.gif";
import step3 from "../../assets/videos/upload-image.gif";

function LearnMore({ className }) {
    return (
        <section
            className={`learnmore-area pt-90 pb-100 ${className}`}
            id="learnmore"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h3 className="title">Learn More</h3>
                        </div>
                    </div>
                </div>

                <div className="steps-container">
                    {/* Step 1 */}
                    <div className="learnmore-step">
                        <div className="gif-container">
                            <img src={step1} alt="Step 1 Animation" />
                        </div>
                        <h4>
                            <span>Copy the text</span> on the screen exactly how you see it
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="button-green">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="learnmore-step">
                        <div className="gif-container">
                            <img src={step2} alt="Step 2 Animation" />
                        </div>
                        <h4>
                            <span>Take a picture</span> of your writing. Make sure it is
                            well-lit and legible.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="button-green">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="learnmore-step">
                        <div className="gif-container">
                            <img src={step3} alt="Step 3 Animation" />
                        </div>
                        <h4>
                            <span>Upload your image</span> and get your results in less than 2
                            minutes.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="button-green">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

                <div className="steps-container">
                    {/* Step 4 */}
                    <div className="learnmore-step">
                        <div className="gif-container">
                            <img src={step1} alt="Step 1 Animation" />
                        </div>
                        <h4>
                            <span>Copy the text</span> on the screen exactly how you see it
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="button-green">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="learnmore-step">
                        <div className="gif-container">
                            <img src={step2} alt="Step 2 Animation" />
                        </div>
                        <h4>
                            <span>Take a picture</span> of your writing. Make sure it is
                            well-lit and legible.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="button-green">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="learnmore-step">
                        <div className="gif-container">
                            <img src={step3} alt="Step 3 Animation" />
                        </div>
                        <h4>
                            <span>Upload your image</span> and get your results in less than 2
                            minutes.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="button-green">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LearnMore;
