import React from 'react';
import '../../assets/css/home.css';
import homeImage from '../../assets/images/home-image.png';
// import shapeTwo from '../../assets/images/shape/shape-2.png';
// import shapeThree from '../../assets/images/shape/shape-3.png';
// import shapeFour from '../../assets/images/shape/shape-4.png';

function Home({ className }) {
    return (
        <>
            <section className={`appie-home-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                                <div>
                                    <img src={homeImage} alt="" />
                                </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-home-content">
                                <h1 className="appie-title">
                                        <span>90%</span> of learning disabilities go <span>undiagnosed</span>.
                                </h1>
                                <p>
                                    With our unique AI-powered tool, appie 
                                    helps identify early signs of learning disabilities 
                                    through handwriting analysis. 
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            Start Free Assessment
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="home-shape-1">
                    <img src={shapeTwo} alt="" />
                </div>
                <div className="home-shape-2">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="home-shape-3">
                    <img src={shapeFour} alt="" />
                </div> */}
            </section>
        </>
    );
}

export default Home;