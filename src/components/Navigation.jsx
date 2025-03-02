import React from "react";
import { Link } from "react-router-dom";

function Navigation({ lang = false }) {
    return (
        <>
            <ul>
                <li>
                    <Link to="/home-dark">Home</Link>
                </li>
                <li>
                    <Link to="/service">How it Works</Link>
                </li>
                <li>
                    <Link to="/service">Assessment</Link>
                </li>
                <li>
                    <a href="#">
                        Learn More 
                        {/* <i className="fal fa-angle-down" /> */}
                    </a>
                    {/* <ul className="sub-menu">
                        <li>
                            <Link to="/about-us">Dyslexia</Link>
                        </li>
                        <li>
                            <Link to="/about-us-another">Dysgraphia</Link>
                        </li>
                        <li>
                            <Link to="/error">Dyscalculia</Link>
                        </li>
                        <li>
                            <Link to="/shops">ADHD</Link>
                        </li>
                        <li>
                            <Link to="/shops/shop-details">ASD</Link>
                        </li>
                        <li>
                            <Link to="/shops/shop-details">Other</Link>
                        </li>
                    </ul> */}
                </li>
                {/* <li>
                    <a href="#">
                        News <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/news">News Page</Link>
                        </li>
                        <li>
                            <Link to="/news/single-news">Single News</Link>
                        </li>
                    </ul>
                </li> */}
                <li>
                    <Link to="/contact">About</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;