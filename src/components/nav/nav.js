import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Nav(props) {
	return (
        <nav className="navbar navbar-expand-lg navbar-light custom-nav">
            <NavLink className="navbar-brand" to="/">
                <img src="/img/system.png" height="30px" /> Thanh Phan
            </NavLink>
            <button
                className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation"  >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto ul-custom">
                    <li className="nav-item active">
                        <NavLink className="nav-link nav-link-custom ml-2"to="/about">About</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link nav-link-custom ml-2"to="/app">Mobile App{" "}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link nav-link-custom ml-2" to="/wen">Webite{" "}</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
	);
}
