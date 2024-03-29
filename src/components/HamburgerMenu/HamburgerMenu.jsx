import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";
import "./HamburgerMenu.css";
import Facebook from "../../assets/icons/Facebook.png";
import Youtube from "../../assets/icons/Youtube.png";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} className="menu" slide>
      <NavLink
        to="galeria"
        id="home"
        className="menu-item"
        onClick={closeSideBar}
      >
        Galeria
      </NavLink>
      <NavLink
        to="kontakt"
        id="home"
        className="menu-item"
        onClick={closeSideBar}
      >
        Kontakt
      </NavLink>
        <a
        href="https://www.youtube.com/channel/UC_qzc9J4BGW2B3PF6sXNgUw"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#971831" }}
      >
         Youtube
        <img src={Youtube} alt="youtube" style={{position: "relative", top: -29}}/>
      </a>
      <a
        href="https://www.facebook.com/SuperNocleg"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#971831", position: "relative", top: -24 }}
      >
        Facebook
        <img src={Facebook} alt="youtube" style={{position: "relative", top: -30}}/>
      </a>
      <div ref={ref} />
    </Menu>
  );
};
