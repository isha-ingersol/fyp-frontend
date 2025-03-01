import React from "react";
import "../../assets/css/learnmore.css";
import type1 from "../../assets/videos/child-writing.gif";
import type2 from "../../assets/videos/take-picture.gif";
import type3 from "../../assets/videos/upload-image.gif";

function LearnMore({ className }) {
    return (
        <section className={`learnmore-area ${className}`} id="learnmore">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h2>Learn More</h2>
                        </div>
                    </div>
                </div>

                <div className="types-container">
                    {/* Type 1 */}
                    <div className="learnmore-type">
                        <div className="gif-container">
                            <img src={type1} alt="Type 1 Animation" />
                        </div>
                        <h4>
                            <span>Copy the text</span> on the screen exactly how you see it
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="learnmore-button">
                                Read More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>

                    {/* Type 2 */}
                    <div className="learnmore-type">
                        <div className="gif-container">
                            <img src={type2} alt="Type 2 Animation" />
                        </div>
                        <h4>
                            <span>Take a picture</span> of your writing. Make sure it is well-lit and legible.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="learnmore-button">
                                Read More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>

                    {/* Type 3 */}
                    <div className="learnmore-type">
                        <div className="gif-container">
                            <img src={type3} alt="Type 3 Animation" />
                        </div>
                        <h4>
                            <span>Upload your image</span> and get your results in less than 2 minutes.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="learnmore-button">
                                Read More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="types-container">
                    {/* Type 4 */}
                    <div className="learnmore-type">
                        <div className="gif-container">
                            <img src={type1} alt="Type 1 Animation" />
                        </div>
                        <h4>
                            <span>Copy the text</span> on the screen exactly how you see it
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="learnmore-button">
                                Read More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>

                    {/* Type 5 */}
                    <div className="learnmore-type">
                        <div className="gif-container">
                            <img src={type2} alt="Type 2 Animation" />
                        </div>
                        <h4>
                            <span>Take a picture</span> of your writing. Make sure it is well-lit and legible.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="learnmore-button">
                                Read More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>

                    {/* Type 6 */}
                    <div className="learnmore-type">
                        <div className="gif-container">
                            <img src={type3} alt="Type 3 Animation" />
                        </div>
                        <h4>
                            <span>Upload your image</span> and get your results in less than 2 minutes.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="#" className="learnmore-button">
                                Read More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LearnMore;
