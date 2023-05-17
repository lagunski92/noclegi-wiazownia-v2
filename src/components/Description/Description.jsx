import React from "react";
import { Slide } from "react-slideshow-image";
import "./Description.css";
import useMediaQuery from "./../../hooks/useMediaQuery";

export const Description = () => {
  const isMobile = useMediaQuery("(max-width: 991px)");
  return (
    <div className="wrapper">
      {isMobile ? <div className="pt-10 pb-10" style={{ width: "100%", backgroundColor: "white" }}>
          <Slide autoplay={false}>
            <div className="each-slide-effect">
              <div
                className="ml-10 mr-10"
                style={{
                  border: "3px solid #68B982",
                  width: "318px",
                  height: "222px",
                  borderRadius: "25px",
                  padding: "20px",
                  backgroundColor: "white"
                }}
              >
                <p>
                  <b>W pobliżu:</b> <br />
                  Droga ekspresowa S17,
                  węzeł Lubelska (połączenie: Południowej Obwodnicy Warszawy [POW] – drogi ekspresowej S2 i autostrady
                  A2),
                  węzeł Góraszka oraz węzeł Wiązowna,
                  MajaLand.

                </p>
              </div>
            </div>
            <div className="each-slide-effect">
              <div
                className="ml-10 mr-10"
                style={{
                  border: "3px solid #68B982",
                  width: "318px",
                  height: "222px",
                  borderRadius: "25px",
                  padding: "20px",
                  backgroundColor: "white"
                }}
              >
                <p>
                  <b>Pokoje:</b> <br />
                  Wysoki standard wyposażenia: oddzielna łazienka, telewizor, lodówka i wygodne, pojedyncze łóżka.
                </p>
              </div>
            </div>
            <div className="each-slide-effect">
              <div
                className="ml-10 mr-10"
                style={{
                  border: "3px solid #68B982",
                  width: "318px",
                  height: "222px",
                  borderRadius: "25px",
                  padding: "20px",
                  backgroundColor: "white"
                }}
              >
                <p>
                  <b>Do dyspozycji lokatorów:</b> <br />
                  2x kuchnia (wyposażenie: płyta indukcyjna, lodówka z zamrażarką, kuchenka mikrofalowa, czajnik) <br/>
                  Pralnia, Parking (monitorowany)

                </p>
              </div>
            </div>
          </Slide>
        </div>
        : <div className="flex justify-center gap-40">
          <div className="description">
          <span>
            <b>W pobliżu:</b> <br />  Droga ekspresowa S17,
                  węzeł Lubelska (połączenie: Południowej Obwodnicy Warszawy [POW] – drogi ekspresowej S2 i autostrady
                  A2),
                  węzeł Góraszka oraz węzeł Wiązowna,
                  MajaLand.
          </span>
          </div>
          <div className="description">
            <span>
            <b>Pokoje:</b> <br />
            Wysoki standard wyposażenia: oddzielna łazienka, telewizor, lodówka i wygodne, pojedyncze łóżka.
            </span>
          </div>
          <div className="description">
            <span>
            <b>Do dyspozycji lokatorów:</b> <br />
            2x kuchnia (wyposażenie: płyta indukcyjna, lodówka z zamrażarką, kuchenka mikrofalowa, czajnik), <br/>
                  Pralnia, Parking (monitorowany).
            </span>
          </div>
        </div>}
    </div>
  );
};
