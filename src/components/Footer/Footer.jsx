import React from "react";
import "./Footer.css";
import Tlo from "./../../assets/images/Tlo_kontakt.png";
import Tlo_min from "./../../assets/images/Tlo_min.png";
import Auto_1 from "./../../assets/icons/Auto1.png";
import Auto_2 from "./../../assets/icons/auto2.png";
import Auto_3 from "./../../assets/icons/auto3.png";
import Auto_4 from "./../../assets/icons/auto4.png";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const isKontaktPage = location.pathname === "/kontakt";
  return (
    <div
      className="footer"
      style={
        isKontaktPage
          ? { backgroundImage: `url(${Tlo_min})`, minHeight: 400 }
          : { backgroundImage: `url(${Tlo})`, minHeight: 562 }
      }
    >
      <img
        className="vehicle p1"
        src={Auto_1}
        alt="kwatery pracownicze wiązowna"
      />
      <img
        className="vehicle p2"
        src={Auto_2}
        alt="kwatery pracownicze wiązowna"
      />
      <img
        className="vehicle p3"
        src={Auto_3}
        alt="kwatery pracownicze wiązowna"
      />
      <img
        className="vehicle p4"
        src={Auto_4}
        alt="kwatery pracownicze wiązowna"
      />
    </div>
  );
};
