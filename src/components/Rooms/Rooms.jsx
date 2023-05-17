import React, { useState } from "react";
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
        <h3>Pokoje</h3>
      </div>
      <div className="flex justify-center rooms-mobile flex-wrap">
        <div
          className="test users img"
          onClick={() => setImage(Room_2)}
          style={
            image === Room_2
              ? { backgroundColor: "#971831", color: "white" }
              : {
                backgroundColor: "white",
                color: "black"
              }
          }
        >
          <img src={image === Room_2 ? UsersWhite : Users} alt="users" />{" "}
          <span>dla 2 osób</span>
        </div>
        <div
          className="test users img"
          onClick={() => setImage(Room_3)}
          style={
            image === Room_3
              ? { backgroundColor: "#971831", color: "white" }
              : {
                backgroundColor: "white",
                color: "black"
              }
          }
        >
          <img src={image === Room_3 ? UsersWhite : Users} alt="users" />{" "}
          <span>dla 3 osób</span>
        </div>
        <div
          className="test users img"
          onClick={() => setImage(Room_4)}
          style={
            image === Room_4
              ? { backgroundColor: "#971831", color: "white" }
              : {
                backgroundColor: "white",
                color: "black"
              }
          }
        >
          <img
            src={image === Room_4 ? UsersWhite : Users}
            width="1140px"
            alt="users"
          />{" "}
          <span>dla 4 osób</span>
        </div>
        <div
          className="test users img"
          onClick={() => setImage(Room_6)}
          style={
            image === Room_6
              ? { backgroundColor: "#971831", color: "white" }
              : {
                backgroundColor: "white",
                color: "black"
              }
          }
        >
          <img src={image === Room_6 ? UsersWhite : Users} alt="users" />{" "}
          <span>dla 6 osób</span>
        </div>
      </div>
      <div className="flex justify-center equipment">
        <div className="border">
          <img src={image.toString()} alt="building" />
          <div className="equipment-wrapper">
            <ul>
              <li>
                <p>
                  <img src={Wymiary} alt="wymiary" />
                </p>
                {image === Room_2 ?
                  <p>
                    15m
                    <sup>
                      <small>2</small>
                    </sup>
                  </p> :
                  image === Room_3 ?
                    <p>
                      ~ 20m
                      <sup>
                        <small>2</small>
                      </sup>
                    </p> :
                    image === Room_4 ?
                      <p>
                        > 20m
                        <sup>
                          <small>2</small>
                        </sup>
                      </p> :
                      image === Room_6 ?
                        <p>
                          45m
                          <sup>
                            <small>2</small>
                          </sup>
                        </p> : true
                }
              </li>
              <li>
                <p>
                  <img src={Prysznic} alt="prysznic" />
                </p>
                <p>Oddzielna łazienka</p>
              </li>
              <li>
                <p>
                  <img src={TV} alt="tv" />
                </p>
                <p>Telewizor LED</p>
              </li>
              <li>
                <p>
                  <img
                    src={Lodowka}
                    alt="lodówka"
                    style={{ position: "relative", top: "-9px" }}
                  />
                </p>
                <p>Lodówka</p>
              </li>
              <li>
                <p>
                  <img src={Posciel} alt="pościel" />
                </p>
                <p>Pościel</p>
              </li>
              <li>
                <p>
                  <img
                    src={Czajnik}
                    alt="czajnik"
                    style={{ position: "relative", top: "-5px" }}
                  />
                </p>
                <p>Czajnik</p>
              </li>
            </ul>
          </div>
          <div className="mobile-description flex flex-row flex-wrap justify-center ml-32 mt-28 mb-40">
            <div className="flex-col flex-1 ml-7">
              <span>POKÓJ</span>
              {image === Room_2
                ?
                <ul className="ml-11 mt-7">
                  <li>jasny/widny,</li>
                  <li>łazienka (wejście z pokoju),</li>
                  <li>telewizor LED 32”,
                  </li>
                  <li>lodówka,</li>
                  <li>duży stół, krzesła, szafa, szafki nocne przy łóżkach,</li>
                  <li>pojedyncze łóżka,</li>
                  <li>wentylacja mechaniczna pokoju</li>
                  <li>chłodzenie (w sezonie letnim).</li>
                </ul>
                : image === Room_3
                  ?
                  <ul className="ml-11 mt-7">
                    <li>duży, przestronny, jasny pokój,</li>
                    <li>łazienka (wejście z pokoju),</li>
                    <li>telewizor LED 32”,</li>
                    <li>lodówka,</li>
                    <li>duży stół, krzesła, szafa, szafki nocne przy łóżkach,</li>
                    <li>pojedyncze łóżka,</li>
                    <li>wentylacja mechaniczna pokoju,</li>
                    <li>chłodzenie (w sezonie letnim).</li>
                  </ul>
                  :
                  image === Room_4
                    ?
                    <ul className="ml-11 mt-7">
                      <li>duże, przestronne, widne pokoje,</li>
                      <li>łazienka (wejście z pokoju lub z korytarza w zależności od pokoju),</li>
                      <li>telewizor LED 32”,</li>
                      <li>lodówka,</li>
                      <li>duży stół, krzesła, szafa, szafki nocne przy łóżkach,</li>
                      <li>pojedyncze łóżka,</li>
                      <li>wentylacja mechaniczna pokoju,</li>
                      <li>chłodzenie (w sezonie letnim).</li>
                    </ul>
                    :
                    image === Room_6
                      ?
                      <ul className="ml-11 mt-7">
                        <li>duży, przestronny, jasny pokój,</li>
                        <li>łazienka (wejście z pokoju),</li>
                        <li>telewizor LED 32”,</li>
                        <li>lodówka,</li>
                        <li>duży stół, krzesła, szafa, szafki nocne przy łóżkach,</li>
                        <li>pojedyncze łóżka,</li>
                        <li>wentylacja mechaniczna pokoju,</li>
                        <li>chłodzenie (w sezonie letnim).</li>
                      </ul>
                      : true

              }

            </div>
            <div className="flex-col flex-1 ml-7">
              <span>CZĘŚĆ WSPÓLNA</span>

              <ul className="ml-11 mt-7">
                <li>
                  dwie kuchnie wyposażone we wszystkie potrzebne sprzęty, między
                  innymi w płytę indukcyjną, lodówkę, mikrofalę, czajnik, garnki
                  i naczynia,
                </li>
                <li>pralnia,</li>
                <li>parking monitorowany (samochody osobowe i dostawcze).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
