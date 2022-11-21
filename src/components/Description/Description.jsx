import React from "react";
import { Slide } from "react-slideshow-image";
import "./Description.css";
import useMediaQuery from "./../../hooks/useMediaQuery";

export const Description = () => {
    const isMobile = useMediaQuery('(max-width: 920px)')
  return (
    <div className="wrapper">
        {isMobile ? <div className="pt-10 pb-10" style={{width: "100%", backgroundColor: "white"}}>
                <Slide autoplay={false}>
                    <div className="each-slide-effect">
                        <div
                            className="ml-10 mr-10"
                            style={{
                                border: "3px solid #68B982",
                                width: "318px",
                                height: "184px",
                                borderRadius: "25px",
                                padding: "20px",
                                backgroundColor: "white",
                            }}
                        >
                            <p>
                                <b>W pobliżu:</b> <br />
                                Droga ekspresowa nr 17 (S17), węzeł
                                Lubelska, węzeł Góraszka, węzeł Wiązownia oraz Centrum Handlowe
                                "Kolorowe życie"
                            </p>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div
                            className="ml-10 mr-10"
                            style={{
                                border: "3px solid #68B982",
                                width: "318px",
                                height: "184px",
                                borderRadius: "25px",
                                padding: "20px",
                                backgroundColor: "white",
                            }}
                        >
                            <p>
                                <b>Pokoje:</b> <br />
                                Wysoki poziom wyposażenia, oddzielna łazienka, telewizor i wygodne,
                                pojedyncze łóżka
                            </p>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div
                            className="ml-10 mr-10"
                            style={{
                                border: "3px solid #68B982",
                                width: "318px",
                                height: "184px",
                                borderRadius: "25px",
                                padding: "20px",
                                backgroundColor: "white",
                            }}
                        >
                            <p>
                                <b>Do dyspozycji lokatorów:</b> <br />
                                Kuchnia wyposażona we wszystkie potrzebne
                                sprzęty, między innymi w płytę indukcyjną lodówkę, mikrofalę czy czajnik, pralnia, parking
                            </p>
                        </div>
                    </div>
                </Slide>
            </div>
            : <div className="flex justify-center gap-40"><div className="description">
          <span>
            <b>W pobliżu:</b> <br /> Droga ekspresowa nr 17 (S17), węzeł
            Lubelska, węzeł Góraszka, węzeł Wiązownia oraz Centrum Handlowe
            "Kolorowe życie"
          </span>
            </div>
            <div className="description">
            <span>
            <b>Pokoje:</b> <br />
            Wysoki poziom wyposażenia, oddzielna łazienka, telewizor i wygodne,
            pojedyncze łóżka
            </span>
            </div>
            <div className="description">
            <span>
            <b>Do dyspozycji lokatorów:</b> <br />
            Kuchnia wyposażona we wszystkie potrzebne
            sprzęty, między innymi w płytę indukcyjną lodówkę, mikrofalę czy czajnik, pralnia, parking
            </span>
            </div>
            </div>}


    </div>
  );
};
