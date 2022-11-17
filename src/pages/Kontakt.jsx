import React from "react";
import "./Kontakt.css"

const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.1915743800205!2d21.285543977050573!3d52.16721026228866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed5ebb1a6942f%3A0x7743f6004419ee09!2sSuperNocleg%20-%20kwatera%20pracownicza!5e0!3m2!1sru!2spl!4v1668687525109!5m2!1sru!2spl";

export const Kontakt = () => {
    return (
        <div className="ml-16 mr-16 mt-40">
            <div className="main-title">
                <h3>Kontakt</h3>
            </div>
            <div className="kontakt flex flex-row justify-center">
                    <ul>
                        <li className="mail">mojakwatera@gmail.com</li>
                        <li className="tel">667 433 777</li>
                        <li className="city">Wiązownia</li>
                        <li className="fb">FB/supernocleg</li>
                        <li className="yotube">SuperNocleg - Wiązowna k. Warszawy</li>
                        <li className="google-map">Wyznacz trasę</li>
                    </ul>

                <div className="flex-row mt-32">
                    <iframe
                        title="map"
                        src={location}
                        width="900"
                        height="355"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}