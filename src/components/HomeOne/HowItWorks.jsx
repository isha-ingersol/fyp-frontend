import React from 'react';
import '../../assets/css/howitworks.css';
import IconOne from '../../assets/images/icon/1.png';
import IconTwo from '../../assets/images/icon/2.png';
import IconThree from '../../assets/images/icon/3.png';

function HowItWorks({ className }) {
    return (
        <section className={`howitworks-area pt-90 pb-100 ${className}`} id="howitworks">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h3 className="title">How It Works</h3>
                        </div>
                    </div>
                </div>

                <div className="steps-container">
                    {/* Step 1 */}
                    <div className="howitworks-step">
                        <div className="icon">
                            <img src={IconOne} alt="Step 1" />
                        </div>
                        <h4><span>Copy the text</span> on the screen exactly how you see it</h4>
                    </div>

                    {/* Step 2 */}
                    <div className="howitworks-step">
                        <div className="icon">
                            <img src={IconTwo} alt="Step 2" />
                        </div>
                        <h4><span>Take a picture</span> of your writing. Make sure it is well-lit and legible.</h4>
                    </div>

                    {/* Step 3 */}
                    <div className="howitworks-step">
                        <div className="icon">
                            <img src={IconThree} alt="Step 3" />
                        </div>
                        <h4><span>Upload your image</span> and get your results in less than 2 minutes.</h4>
                    </div>
                </div>

                {/* Start Assessment Button */}
                <div className="button-container">
                    <a href="#" className="button-green">Start Free Assessment</a>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;