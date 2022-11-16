import React, { useState } from "react";
import "./Rooms.css";
import Users from "../../assets/icons/Users.png";
import UsersWhite from "../../assets/icons/Users_white.png";

import Room_2 from "./../../assets/images/2_Osoby.png";
import Room_3 from "./../../assets/images/3_osoby.png";
import Room_4 from "./../../assets/images/4_osoby.png";
import Room_6 from "./../../assets/images/6_osób.png";

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
              ? { backgroundColor: "#971831", color: "white" }
              : {
                  backgroundColor: "white",
                  color: "black",
                }
          }
        >
          <img src={image === Room_2 ? UsersWhite : Users} alt="users" />{" "}
          <span>2 osobowe</span>
        </div>
        <div
          className="test users img"
          onClick={() => setImage(Room_3)}
          style={
            image === Room_3
              ? { backgroundColor: "#971831", color: "white" }
              : {
                  backgroundColor: "white",
                  color: "black",
                }
          }
        >
          <img src={image === Room_3 ? UsersWhite : Users} alt="users" />{" "}
          <span>3 osobowe</span>
        </div>
        <div
          className="test users img"
          onClick={() => setImage(Room_4)}
          style={
            image === Room_4
              ? { backgroundColor: "#971831", color: "white" }
              : {
                  backgroundColor: "white",
                  color: "black",
                }
          }
        >
          <img src={image === Room_4 ? UsersWhite : Users} alt="users" />{" "}
          <span>4 osobowe</span>
        </div>
        <div
          className="test users img"
          onClick={() => setImage(Room_6)}
          style={
            image === Room_6
              ? { backgroundColor: "#971831", color: "white" }
              : {
                  backgroundColor: "white",
                  color: "black",
                }
          }
        >
          <img src={image === Room_6 ? UsersWhite : Users} alt="users" />{" "}
          <span>6 osobowe</span>
        </div>
      </div>
      <div className="flex justify-center equipment">
        <p>
          <img src={image.toString()} alt="building" />
          <div className="flex flex-row justify-center ml-32 mt-28 mb-40">
            <div className="flex-col flex-1">
              <span>POKÓJ</span>
              <ul className="ml-11">
                <li>fgdf</li>
                <li>fdg</li>
                <li>gdfg</li>
                <li>dfg</li>
              </ul>
            </div>
            <div className="flex-col flex-1">Column 2</div>
          </div>
        </p>
      </div>
    </div>
  );
};
