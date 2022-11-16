import React from "react";
import "./Description.css";

export const Description = () => {
  return (
    <div className="wrapper">
      <div className="flex justify-center gap-60">
        <div className="description">
          <span>
            <b>W pobliżu:</b> <br /> Droga ekspresowa nr 17 (S17), węzeł
            Lubelska, węzeł Góraszka, węzeł Wiązownia oraz Centrum Handlowe
            "Kolorowe życie"
          </span>
        </div>
        <div className="description">
          <b>Pokoje:</b> <br /> Wysoki poziom wyposażenia, oddzielna łazienka,
          telewizor i wygodne, pojedyncze łóżka
        </div>
        <div className="description"><b>Do dyspozycji lokatorów:</b><br />Kuchnia wyposażona we wszystkie potrzebne
          sprzęty, między innymi w płytę indukcyjną lodówkę, mikrofalę czy czajnik, pralnia, parking
        </div>
      </div>
    </div>
  );
};
