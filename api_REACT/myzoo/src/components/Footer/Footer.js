import React from "react";
import facebook from '../../assets/images/footer/fb.png'
import youtube from '../../assets/images/footer/youtube.png'
import twitter from '../../assets/images/footer/twitter.png'
import { NavLink } from "react-router-dom";
import classes from '../Footer/Footer.module.css'

const footer = (props) => (
        <>
            <footer className="bg-primary">
                <div className="text-white text-center">
                    MyZoo - Tout droits reservés.
                </div>
                <a href="https://www.newsletter.org" className="d-block" target="_blank">
                    <div className="container text-white text-center">
                        <i>Cliquez ici pour vous inscrire à notre newsletter.</i>
                    </div>
                </a>
                <div className="row no-gutters align-items-center text-center pt-2">
                    <div className="col-3">
                        <a href="https://www.facebook.com" className="d-block" target="_blank" >
                            <img className="imgFcbTwt" src ={facebook} alt ='facebook'  />
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="https://www.youtube.com/" className="d-block" target="_blank" >
                            <img className="ytb" src ={youtube} alt ='youtube'  />
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="https://twitter.com/home" className="d-block" target="_blank" >
                            <img className="imgFcbTwt" src ={twitter} alt ='twitter'  />
                        </a>
                    </div>
                    <div className="col-3">
                        <NavLink to ="/mentionLegales" className={["nav-link", "p-0", "m-0", classes.p_footerLink].join(" ")}> Mentions Légales</NavLink>
                        <a href="mailto:contact@MyZoo.com" className={["nav-link", "p-0", "m-0", classes.p_footerLink].join(" ")} >contact@MyZoo.com</a>
                    </div>
                </div>                                
            </footer>
        </>
);

export default footer;