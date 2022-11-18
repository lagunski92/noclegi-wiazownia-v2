import React from "react";
import Sprzatanie from "./../../assets/icons/Sprzątanie.png";
import Standart from "./../../assets/icons/Wysoki_standart.png";
import Mapa2 from "./../../assets/icons/Mapa2.png";
import "./About.css";

const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.1935208942677!2d21.285948916040397!3d52.167174870068514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed5ebb1a6942f%3A0x7743f6004419ee09!2sSuperNocleg%20-%20kwatera%20pracownicza!5e0!3m2!1spl!2spl!4v1668771387911!5m2!1spl!2spl"

export const About = () => {
  return (
    <div className="rooms-wrapper">
      <div className="main-title">
        <h3>O nas</h3>
      </div>
      <div className="flex flex-row justify-center ml-72 mr-72 mt-28 mb-40">
        <div className="location flex-col flex-1">
          <span>LOKALIZACJA</span>
          <ul className="ml-11 mt-7">
            <li>Wiązownia</li>
            <li>
              W pobliżu: Centrum Handlowe Góraszka, węzeł Lubelska, węzeł
              Góraszka, węzeł Wiązowna, droga ekspresowa nr 17 (S17)
            </li>
            <li>
              Bardzo dobry dojazd w kierunkach: Warszawa-Lublin, Mińsk Maz.,
              Otwock, Józefów, Stara Miłosna, Wesoła, Zakręt
            </li>
            <li>W pobliżu sklep spożywczy i stacja benzynowa</li>
          </ul>
        </div>
        <div className="flex-col flex-1">
          <iframe
            title="map"
            src={location}
            width="680"
            height="311"
            loading="lazy"
          />
        </div>
      </div>
      <div className="ml-72">
        <h1 className="mb-44">Dlaczego właśnie my?</h1>
      </div>
      <div className="flex justify-center gap-56 mb-40">
        <div className="icons">
          <img src={Sprzatanie} alt="sprzątanie" />
          <p style={{ textAlign: "center", width: 350, marginTop: 10 }}>REGULARNE SPRZĄTANIE</p>
          <p style={{ textAlign: "center", width: 350, fontSize: 16, fontWeight: 400 }}>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Adipisci consequuntur dignissimos. </p>
        </div>
        <div className="standart icons">
          <img src={Standart} alt="standart" />
          <p style={{ textAlign: "center", width: 350, marginTop: 10 }}>WYSOKI STANDARD POKOI</p>
          <p style={{ textAlign: "center", width: 350, fontSize: 16, fontWeight: 400 }}>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Adipisci consequuntur dignissimos. </p>
        </div>
        <div className="icons maps">
          <img src={Mapa2} alt="mapa" />
          <p style={{ textAlign: "center", width: 350, marginTop: 10 }}>ŚWIETNA LOKALIZACJA</p>
          <p style={{ textAlign: "center", width: 350, fontSize: 16, fontWeight: 400 }}>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Adipisci consequuntur dignissimos. </p>
        </div>
      </div>
      <div className="main-title">
        <h3>Kontakt</h3>
      </div>
    </div>
  );
};
