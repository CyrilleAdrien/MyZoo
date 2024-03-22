import React, { Component } from 'react';
import Navbar from "../../components/UserInterface/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import Contact from './Application/Contact/Contact';
import Error from '../../components/Error/Error';
import Footer from '../../components/Footer/Footer';
import Application from '../Site/Application/Application';

class Site extends Component {
    render() {
        return (
            <>
            <div className="site">
                <Navbar />
                    <Routes>
                        <Route path="/" exact element = {<Accueil />} />
                        <Route path="/contact" exact element = {<Contact/>} />
                        <Route path="/animaux" exact element ={<Application />} />
                        <Route path = "*"  element = {<Error type = "404"> La page n'existe pas</Error>} />
                    </Routes>                
            </div>
            <div className='minSite'></div>
                <Footer />    
            </>
        );
    }
}
export default Site;