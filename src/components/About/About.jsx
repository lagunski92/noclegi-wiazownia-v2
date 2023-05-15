import React from "react";
import Sprzatanie from "./../../assets/icons/Sprzątanie.png";
import Standart from "./../../assets/icons/Wysoki_standart.png";
import Mapa2 from "./../../assets/icons/Mapa2.png";
import "./About.css";
import { Slide } from "react-slideshow-image";
import useMediaQuery from "./../../hooks/useMediaQuery";

const location =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.1935208942677!2d21.285948916040397!3d52.167174870068514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed5ebb1a6942f%3A0x7743f6004419ee09!2sSuperNocleg%20-%20kwatera%20pracownicza!5e0!3m2!1spl!2spl!4v1668771387911!5m2!1spl!2spl";

export const About = () => {
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <div className="rooms-wrapper">
      <div className="main-title">
        <h3>O nas</h3>
      </div>
      <div className="location lg:mt-32 mt-12">
        <span>LOKALIZACJA</span>
      </div>
      <div className="about-mobile grid grid-cols-12 lg:mt-28 mt-12 mb-40 gap-x-10">
        <div className="location col-span-3">
          <ul className="mt-7">

            <b>Miejscowość:</b>
            <ul className="ml-11">
              <li>Wiązowna</li>
            </ul>
          </ul>
        </div>
        <div className="location col-span-3">
          <ul className="mt-7">

            <b>W pobliżu:</b>
            <ul className="ml-11">
              <li>MajaLand,</li>
              <li>Planowane Centrum Handlowe Góraszka,</li>
              <li>węzeł Lubelska, węzeł Góraszka, <br /> węzeł Wiązowna,</li>
              <li>droga ekspresowa S17,</li>
              <li>droga ekspresowa S2,</li>
              <li>autostrada A2.</li>
            </ul>
          </ul>
        </div>
        <div className="location col-span-3">
          <ul className="mt-7">
            <b>Bardzo dobry dojazd w kierunkach:</b>
            <ul className="ml-11">
              <li>Warszawa-Lublin,</li>
              <li>Mińsk Mazowiecki,</li>
              <li>Otwock,</li>
              <li>Józefów,</li>
              <li>Stara Miłosna,</li>
              <li>Wesoła,</li>
              <li>Zakręt.</li>
            </ul>
          </ul>
        </div>
        <div className="location col-span-3">
          <ul className="mt-7">
            <b>W pobliżu:</b>
            <ul className="ml-11">
              <li>punkt kebab,</li>
              <li>bar,</li>
              <li>sklepy spożywcze,</li>
              <li>market budowlany,</li>
              <li>stacja benzynowa,</li>
              <li>targowisko.</li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="mt-5 mb-40">
        <iframe
          src={location}
          title="map"
          width="100%"
          height="320"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ml-72 title-mobile">
        <h1 className="mb-44">Dlaczego właśnie my?</h1>
      </div>
      {isMobile ? (
        <Slide autoplay={false}>
          <div className="each-slide-effect">
            <div
              className="flex"
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: 267
              }}
            >
              <p>
                <img
                  src={Sprzatanie}
                  alt="standart"
                  style={{ width: 110, marginBottom: 10 }}
                />
              </p>
              <p style={{ fontWeight: 600 }}>REGULARNE SPRZĄTANIE</p>
              <p style={{ textAlign: "center", marginBottom: 10 }}>
                Wszystkie pokoje oraz łazienki są sprzątane 2x w tygodniu. Części wspólne sprzątane są codziennie.
              </p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              className="flex"
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: 267
              }}
            >
              <p>
                <img
                  src={Standart}
                  alt="standart"
                  style={{ width: 245, marginBottom: 10 }}
                />
              </p>
              <p style={{ fontWeight: 600 }}>WYSOKI STANDARD POKOI</p>
              <p style={{ textAlign: "center", marginBottom: 10 }}>
                Wszystkie pokoje mają identyczny standard wyposażenia. Lodówka, duży stół, szafka nocna przy łóżku,
                gniazdko elektryczne przy każdym łóżku. Mechaniczna wentylacja w całym budynku, a w sezonie letnim
                pokoje są KLIMATYZOWANE.
              </p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              className="flex"
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: 267
              }}
            >
              <p>
                <img
                  src={Mapa2}
                  alt="standart"
                  style={{ width: 110, marginBottom: 10 }}
                />
              </p>
              <p style={{ fontWeight: 600, marginBottom: 10 }}>
                ŚWIETNA LOKALIZACJA
              </p>
              <p style={{ textAlign: "center", marginBottom: 60 }}>
                Położenie w odległości 500 m od węzła trasy ekspresowej S17 pozwala na szybki i łatwy dojazd w dowolnym
                kierunku, 3km dalej zlokalizowany jest Węzeł Lubelska – wjazd na Południową Obwodnicę Warszawy (droga
                ekspresowa S2).
              </p>
            </div>
          </div>
        </Slide>
      ) : (
        <div>
          <div className=" about ">
            <div className="icons">
              <img src={Sprzatanie} alt="sprzątanie" />
              <p style={{ textAlign: "center", width: 350, marginTop: 10 }}>
                REGULARNE SPRZĄTANIE
              </p>
              <p
                style={{
                  textAlign: "center",
                  width: 350,
                  fontSize: 16,
                  fontWeight: 400
                }}
              >
                Wszystkie pokoje oraz łazienki są sprzątane 2x w tygodniu. Części wspólne sprzątane są codziennie.
              </p>
            </div>
            <div className="standart icons">
              <img src={Standart} alt="standart" />
              <p style={{ textAlign: "center", width: 350, marginTop: 10 }}>
                WYSOKI STANDARD POKOI
              </p>
              <p
                style={{
                  textAlign: "center",
                  width: 350,
                  fontSize: 16,
                  fontWeight: 400
                }}
              >
                Wszystkie pokoje mają identyczny standard wyposażenia. Lodówka, duży stół, szafka nocna przy łóżku,
                gniazdko elektryczne przy każdym łóżku. Mechaniczna wentylacja w całym budynku, a w sezonie letnim
                pokoje są KLIMATYZOWANE.
              </p>
            </div>
            <div className="icons maps">
              <img src={Mapa2} alt="mapa" />
              <p style={{ textAlign: "center", width: 350, marginTop: 10 }}>
                ŚWIETNA LOKALIZACJA
              </p>
              <p
                style={{
                  textAlign: "center",
                  width: 350,
                  fontSize: 16,
                  fontWeight: 400
                }}
              >
                Położenie w odległości 500 m od węzła trasy ekspresowej S17 pozwala na szybki i łatwy dojazd w dowolnym
                kierunku, 3km dalej zlokalizowany jest Węzeł Lubelska – wjazd na Południową Obwodnicę Warszawy (droga
                ekspresowa S2).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
