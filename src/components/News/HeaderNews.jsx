import React, { useEffect } from 'react';
import logo from '../../assets/images/logo-7.png';
import StickyMenu from '../../lib/StickyMenu.js';
import Navigation from '../Navigation.jsx';

function HeaderNews({ action }) {
    useEffect(() => {
        StickyMenu();
    });
    return (
        <>
            <header className="header-container dyscoverAI-header-page-area sticky-header">
                <div className="container">
                    <div className="header-nav-box header-nav-box-3 header-nav-box-inner-page">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="logo-container">
                                    <a href="/">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                                <div className="main-navigation">
                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                                <div className="right-nav-controls text-right">
                                    <a className="login-button" href="#">
                                        <i className="user-icon"></i> Login
                                    </a>
                                    <a className="start-assessment-button ml-30" href="#">
                                        Get Started
                                    </a>
                                    <div
                                        onClick={(e) => action(e)}
                                        className="mobile-menu-toggle ml-30 canvas_open d-lg-none d-block"
                                    >
                                        <i className="menu-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderNews;
