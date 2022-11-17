import React, {useState} from "react";
import "./Rooms.css";
import Users from "../../assets/icons/Users.png";
import UsersWhite from "../../assets/icons/Users_white.png";

import Room_2 from "./../../assets/images/2_Osoby.png";
import Room_3 from "./../../assets/images/3_osoby.png";
import Room_4 from "./../../assets/images/4_osoby.png";
import Room_6 from "./../../assets/images/6_osób.png";

import Wymiary from "./../../assets/icons/Wymiary.png";
import Czajnik from "./../../assets/icons/Czajnik.png";
import Posciel from "./../../assets/icons/Pościel.png";
import Lodowka from "./../../assets/icons/Lodówka.png";
import TV from "./../../assets/icons/TV.png";
import Prysznic from "./../../assets/icons/Prysznic.png";

export const Rooms = () => {
    const [image, setImage] = useState(Room_2);

    return (
        <div className="rooms-wrapper">
            <div className="main-title">
                <h3>Galeria</h3>
            </div>
            <div className="flex justify-center">
                <div
                    className="test users img"
                    onClick={() => setImage(Room_2)}
                    style={
                        image === Room_2
                            ? {backgroundColor: "#971831", color: "white"}
                            : {
                                backgroundColor: "white",
                                color: "black"
                            }
                    }
                >
                    <img src={image === Room_2 ? UsersWhite : Users} alt="users"/>{" "}
                    <span>2 osobowe</span>
                </div>
                <div
                    className="test users img"
                    onClick={() => setImage(Room_3)}
                    style={
                        image === Room_3
                            ? {backgroundColor: "#971831", color: "white"}
                            : {
                                backgroundColor: "white",
                                color: "black"
                            }
                    }
                >
                    <img src={image === Room_3 ? UsersWhite : Users} alt="users"/>{" "}
                    <span>3 osobowe</span>
                </div>
                <div
                    className="test users img"
                    onClick={() => setImage(Room_4)}
                    style={
                        image === Room_4
                            ? {backgroundColor: "#971831", color: "white"}
                            : {
                                backgroundColor: "white",
                                color: "black"
                            }
                    }
                >
                    <img src={image === Room_4 ? UsersWhite : Users} alt="users"/>{" "}
                    <span>4 osobowe</span>
                </div>
                <div
                    className="test users img"
                    onClick={() => setImage(Room_6)}
                    style={
                        image === Room_6
                            ? {backgroundColor: "#971831", color: "white"}
                            : {
                                backgroundColor: "white",
                                color: "black"
                            }
                    }
                >
                    <img src={image === Room_6 ? UsersWhite : Users} alt="users"/>{" "}
                    <span>6 osobowe</span>
                </div>
            </div>
            <div className="flex justify-center equipment">
                <div className="border">
                    <img src={image.toString()} alt="building"/>
                    <div className="flex justify-center media-wrapper">
                        <div className="media">
                            <div className="image2"><img src={Wymiary} alt="wymiary"/>
                            </div>
                            <div className="content">~ 20m<sup><small>2</small></sup></div>
                        </div>
                        <div className="media shower">
                            <div className="image2"><img src={Prysznic} alt="prysznic"/>
                            </div>
                            <div className="content">Oddzielna łazienka</div>
                        </div>
                        <div className="media">
                            <div className="image2"><img src={TV} alt="tv"/></div>
                            <div className="content">Telewizor LED</div>
                        </div>
                        <div className="media">
                            <div className="image2"><img src={Lodowka} alt="lodówka"/>
                            </div>
                            <div className="content">Lodówka</div>
                        </div>
                        <div className="media">
                            <div className="image2"><img src={Posciel} alt="pościel"/>
                            </div>
                            <div className="content">Pościel</div>
                        </div>
                        <div className="media teapot">
                            <div className="image2"><img src={Czajnik} alt="czajnik"/>
                            </div>
                            <div className="content">Czajnik</div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center ml-32 mt-28 mb-40">
                        <div className="flex-col flex-1">
                            <span>POKÓJ</span>
                            <ul className="ml-11 mt-7">
                                <li>Duży przestrzenny pokój</li>
                                <li>Oddzielna łazienka z ciepłą wodą</li>
                                <li>Pokój wyposażony między innymi w telewizor, lodówkę,
                                    szafy, stoliki nocne, czajnik elektryczny
                                </li>
                                <li>Wygodne pojedyncze łóżka</li>
                            </ul>
                        </div>
                        <div className="flex-col flex-1">
                            <span>CZĘŚĆ WSPÓLNA</span>
                            <ul className="ml-11 mt-7">
                                <li>Dwie kuchnie wyposażone we wszystkie potrzebne
                                    sprzęty, między innymi w płytę indukcyjną, lodówkę,
                                    mikrofalę, czajnik, garnki i naczynia
                                </li>
                                <li>Oddzielna łazienka z ciepłą wodą</li>
                                <li>Pralnia</li>
                                <li>Parking monitorowany</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
