import React from "react";
import "./Kontakt.css"

const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.1935208942677!2d21.285948916040397!3d52.167174870068514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed5ebb1a6942f%3A0x7743f6004419ee09!2sSuperNocleg%20-%20kwatera%20pracownicza!5e0!3m2!1spl!2spl!4v1668771387911!5m2!1spl!2spl"

export const Kontakt = () => {
    return (
        <div className="kontakt-mobile ml-12 mr-12 mt-6 mb-6" style={{overflow: "hidden"}}>
            <div className="main-title mobile-title">
                <h3>Kontakt</h3>
            </div>
            <div className="kontakt grid grid-cols-6 gap-30">
                <div className="kontakt-data lg:col-span-2 col-span-12 col-start-2">
                    <ul className="w-full">
                        <li className="mail"><a href = "mailto: mojakwatera@gmail.com">mojakwatera@gmail.com</a></li>
                        <li className="tel">667 433 777</li>
                        <li className="city">Wiązownia</li>
                        <li className="fb"><a
                            href="https://www.facebook.com/SuperNocleg"
                            target="_blank"
                            rel="noreferrer"
                            className="facebook"
                        >
                            FB/supernocleg
                        </a></li>
                        <li className="yotube">
                            <a
                                href="https://www.youtube.com/channel/UC_qzc9J4BGW2B3PF6sXNgUw"
                                target="_blank"
                                rel="noreferrer"
                                className="youtube"
                            >
                                SuperNocleg - Wiązowna k. Warszawy
                            </a></li>
                    </ul>
                </div>
                <div className="lg:col-span-4 col-span-12 lg:mt-0 mt-28">
                    <div className="map-responsive mt-5">
                        <iframe src={location}
                                title="map"
                                width="" height="" frameBorder="0"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}