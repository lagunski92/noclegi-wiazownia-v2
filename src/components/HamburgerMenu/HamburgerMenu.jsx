import React from 'react';
import {NavLink} from "react-router-dom";

import {slide as Menu} from 'react-burger-menu'
import "./HamburgerMenu.css"
import Facebook from "../../assets/icons/Facebook.png";
import Youtube from "../../assets/icons/Youtube.png";

export const HamburgerMenu = () => {
    return (
        <Menu right>
            <NavLink
                to=""
                id="home" className="menu-item"
            >
                Home
            </NavLink>
            <NavLink
            to="galeria"
            id="home" className="menu-item"
        >
            Galeria
        </NavLink>
            <NavLink
            to="kontakt"
            id="home" className="menu-item"
        >
            Kontakt
        </NavLink>
            <a
                href="https://www.youtube.com/channel/UC_qzc9J4BGW2B3PF6sXNgUw"
                target="_blank"
                rel="noreferrer"
                style={{color: "#971831"}}
            >
               Youtube
            </a>
            <a
                href="https://www.facebook.com/SuperNocleg"
                target="_blank"
                rel="noreferrer"
                style={{color: "#971831"}}
            >

                Facebook
            </a>
        </Menu>

    );
};