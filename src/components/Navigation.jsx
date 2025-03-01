import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navigation({ lang = false }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleScroll = (event, sectionId) => {
        event.preventDefault(); // Prevent default link behavior

        if (location.pathname === "/") {
            // If already on home, scroll immediately
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navigate to /how-it-works (which auto-scrolls after load)
            navigate("/how-it-works");
        }
    };

    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#how-it-works" onClick={(e) => handleScroll(e, "how-it-works")}>
                        How it Works
                    </a>
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
                <li>
                    <Link to="/contact">About</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
