import React from 'react';
import '../../assets/css/howitworks.css'; // Import the specific CSS for this page
import IconOne from '../../assets/images/icon/1.png';
import IconTwo from '../../assets/images/icon/2.png';
import IconThree from '../../assets/images/icon/3.png';
import IconFour from '../../assets/images/icon/4.png';

function HowItWorks({ className }) {
    return (
        <section className={`appie-howitworks-area pt-90 pb-100 ${className}`} id="howitworks">
            <div className="container">
                <div className="row justify-content-left">
                    <div className="col-lg-6">
                        <div className="appie-section-title">
                            <h3 className="appie-title">
                                How It Works
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="steps">
                    {/* Step 1 */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-howitworks text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={IconOne} alt="" />
                                <span>1</span>
                            </div>
                            <h4 className="appie-title">Searching</h4>
                            <p>Mucker plastered bugger all mate morish are.</p>
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-howitworks text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <img src={IconTwo} alt="" />
                                <span>2</span>
                            </div>
                            <h4 className="appie-title">Designing</h4>
                            <p>Mucker plastered bugger all mate morish are.</p>
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-howitworks text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img src={IconThree} alt="" />
                                <span>3</span>
                            </div>
                            <h4 className="appie-title">Building</h4>
                            <p>Mucker plastered bugger all mate morish are.</p>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        <a href="#">
                            Start Free Assessment
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default HowItWorks;
