import React from "react";
import logo from "../../../assets/images/logo.png";
import {NavLink} from "react-router-dom";
import Search_bar from "../../search_bar/search";
import '../../search_bar/search.css';


const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                <img src={logo} alt='logo My Zoo' width='50px' className="rounded"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to = '/' exact="true" className = "nav-link">Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to = '/contact' exact="true" className = "nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to = '/animaux' exact ="true" className = "nav-link">Animaux</NavLink>
                    </li>
                    <li>
                        <Search_bar className="left-aligned" />
                    </li>                    
                </ul>
            </div>
            <div>
                
            </div>
        </nav>
    </>
);

export default navbar;