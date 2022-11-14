import React from "react";
import "./header.css";
import SuperNocleg from "../../assets/icons/SuperNocleg.png";
import Facebook from "../../assets/icons/Facebook.png";
import Youtube from "../../assets/icons/Youtube.png";
import {NavLink} from "react-router-dom";
import Phone from "../../assets/icons/Phone.png";
import Map from "../../assets/icons/Map2.png";

export const Header = () => {
    return (
            <>
                <div className="links-container">
                    <img src={SuperNocleg} alt="super-nocleg" className="nocleg"/>
                    <div className="links">
                        <div>
                            <NavLink to="/galeria" className="image" style={({ isActive }) =>
                                isActive
                                    ? {
                                        textDecoration: 'underline #971831',
                                        textDecorationThickness: "4px",
                                    }
                                    : {textDecoration: ""}
                            }>
                                Galeria
                            </NavLink>
                            <NavLink to="/kontakt" className="image" style={({ isActive }) =>
                                isActive
                                    ? {
                                        textDecoration: 'underline #971831',
                                        textDecorationThickness: "4px",
                                    }
                                    : {textDecoration: ""}
                            }>
                                Kontakt
                            </NavLink>
                        </div>
                        <a
                            href="https://www.youtube.com/channel/UC_qzc9J4BGW2B3PF6sXNgUw"
                            target="_blank"
                            rel="noreferrer"
                            className="youtube"
                        >
                            {" "}
                            <img src={Youtube} alt="youtube"/>{" "}
                        </a>
                        <a
                            href="https://www.facebook.com/SuperNocleg"
                            target="_blank"
                            rel="noreferrer"
                            className="facebook"
                        >
                            {" "}
                            <img src={Facebook} alt="facebook"/>{" "}
                        </a>
                    </div>
                </div>
                <div className="block title ">
                    <h2>Pokoje <br/>w Wiązownie</h2>
                    <h3>K. Warszawy</h3>
                </div>
                <div className="inline-flex">
                    <div className="contact">
                        <img src={Phone} alt="phone" className="phone-icon"/>
                        <p>667 433 777</p>
                    </div>

                    <div className="map">
                        <img src={Map} alt="map" className="map-icon"/>
                        <p>Wyznacz trasę</p>
                    </div>
                </div>
            </>

    );
};
