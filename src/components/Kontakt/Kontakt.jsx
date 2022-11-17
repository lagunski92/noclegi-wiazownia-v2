import React from "react";
import "./Kontakt.css"
import Auto_1 from "./../../assets/icons/Auto1.png"
import Auto_2 from "./../../assets/icons/auto2.png"
import Auto_3 from "./../../assets/icons/auto3.png"
import Auto_4 from "./../../assets/icons/auto4.png"

export const Kontakt = () => {

  return (
    <div id="footer">
      <img className="vehicle p1" src={Auto_1} alt="kwatery pracownicze wiązowna" />
      <img className="vehicle p2" src={Auto_2} alt="kwatery pracownicze wiązowna" />
      <img className="vehicle p3" src={Auto_3} alt="kwatery pracownicze wiązowna" />
      <img className="vehicle p4" src={Auto_4} alt="kwatery pracownicze wiązowna" />
    </div>
  );
};

