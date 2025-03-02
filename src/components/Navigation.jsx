import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/navigation.css';

function Navigation({ lang = false }) {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
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
                        <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <a href="https://my.clevelandclinic.org/health/diseases/6005-dyslexia" target="_blank" rel="noopener noreferrer">Dyslexia</a>
                        </li>
                        <li>
                            <a href="https://my.clevelandclinic.org/health/diseases/23294-dysgraphia" target="_blank" rel="noopener noreferrer">Dysgraphia</a>
                        </li>
                        <li>
                            <a href="https://my.clevelandclinic.org/health/diseases/23949-dyscalculia" target="_blank" rel="noopener noreferrer">Dyscalculia</a>
                        </li>
                        <li>
                            <a href="https://my.clevelandclinic.org/health/diseases/4784-attention-deficithyperactivity-disorder-adhd" target="_blank" rel="noopener noreferrer">ADHD</a>
                        </li>
                        <li>
                            <a href="https://my.clevelandclinic.org/health/diseases/pervasive-developmental-disorders" target="_blank" rel="noopener noreferrer">PDD</a>
                        </li>
                        <li>
                            <a href="https://my.clevelandclinic.org/health/diseases/4865-learning-disabilities-what-you-need-to-know" target="_blank" rel="noopener noreferrer">Other</a>
                        </li>
                    </ul>
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