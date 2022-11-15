import React, { useState } from "react";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Images.css";

import Users from "./../../assets/icons/Users.png";
import Kitchen from "./../../assets/icons/Kitchen.png";
import Bathroom from "./../../assets/icons/Bathroom.png";
import Building from "./../../assets/icons/Building.png";
import Laundry from "./../../assets/icons/Laundry.png";

import Room_1_big from "./../../assets/images/Room1_big.png";
import Room_2_big from "./../../assets/images/Room1_big.png";
import Room_3_big from "./../../assets/images/Room1_big.png";
import Room_4_big from "./../../assets/images/Room1_big.png";
import Room_5_big from "./../../assets/images/Room1_big.png";
import Room_6_big from "./../../assets/images/Room1_big.png";
import Room_7_big from "./../../assets/images/Room1_big.png";
import Room_8_big from "./../../assets/images/Room1_big.png";

import Room_1 from "./../../assets/images/Room1_small.png";
import Room_2 from "./../../assets/images/Room2_small.png";
import Room_3 from "./../../assets/images/Room3_small.png";
import Room_4 from "./../../assets/images/Room4_small.png";
import Room_5 from "./../../assets/images/Room5_small.png";
import Room_6 from "./../../assets/images/Room6_small.png";
import Room_7 from "./../../assets/images/Room7_small.png";
import Room_8 from "./../../assets/images/Room8_small.png";

import Kitchen_1 from "./../../assets/images/Kitchen1_small.png";
import Kitchen_2 from "./../../assets/images/Kitchen2_small.png";
import Kitchen_3 from "./../../assets/images/Kitchen3_small.png";
import Kitchen_4 from "./../../assets/images/Kitchen4_small.png";

import Bathroom_1 from "./../../assets/images/Bathroom1_small.png";
import Bathroom_2 from "./../../assets/images/Bathroom2_small.png";
import Bathroom_3 from "./../../assets/images/Bathroom3_small.png";
import Bathroom_4 from "./../../assets/images/Bathroom4_small.png";

import Building_1 from "./../../assets/images/Building1_small.png";
import Building_2 from "./../../assets/images/Building2_small.png";
import Building_3 from "./../../assets/images/Building3_small.png";

export const Images = () => {
  const rooms = [
    {
      smallImage: Room_1,
      bigImage: Room_1_big,
    },
    {
      smallImage: Room_2,
      bigImage: Room_2_big,
    },
    {
      smallImage: Room_3,
      bigImage: Room_3_big,
    },
    {
      smallImage: Room_4,
      bigImage: Room_4_big,
    },
    {
      smallImage: Room_5,
      bigImage: Room_5_big,
    },
    {
      smallImage: Room_6,
      bigImage: Room_6_big,
    },
    {
      smallImage: Room_7,
      bigImage: Room_7_big,
    },
    {
      smallImage: Room_8,
      bigImage: Room_8_big,
    },
  ];
  const kitchen = [Kitchen_1, Kitchen_2, Kitchen_3, Kitchen_4];
  const bathroom = [Bathroom_1, Bathroom_2, Bathroom_3, Bathroom_4];
  const building = [Building_1, Building_2, Building_3];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const onClickHandler = (array) => {
    setData(array);
    setIsOpen(true);
    //setPhotoIndex(index);
  };
  return (
    <>
      <div className="images-title">
        <h3>Galeria</h3>
      </div>

      <div className="room">
        <img src={Users} alt="users" /> <p>Pokoje</p>
      </div>
      <div className="flex flex-wrap rooms">
        {rooms.map((el, index, array) => (
          <img
            src={el.smallImage}
            alt="room"
            onClick={() => onClickHandler(index, array)}
          />
        ))}
      </div>

      <div className="room">
        <img src={Kitchen} alt="kitchen" /> <p>Kuchnie</p>
      </div>
      <div className="flex flex-wrap rooms">
        {kitchen.map((el, index, array) => (
          <img
            src={el}
            alt="kitchen"
            onClick={() => onClickHandler(index, array)}
          />
        ))}
      </div>

      <div className="room">
        <img src={Bathroom} alt="bathroom" /> <p>Łazienki</p>
      </div>
      <div className="flex flex-wrap rooms">
        {bathroom.map((el, index, array) => (
          <img
            src={el}
            alt="bathroom"
            onClick={() => onClickHandler(index, array)}
          />
        ))}
      </div>

      <div className="room">
        <img src={Laundry} alt="laundry" /> <p>Pralnia</p>
      </div>
      <div className="flex flex-wrap rooms">
        {bathroom.map((el, index, array) => (
          <img
            src={el}
            alt="laundry"
            onClick={() => onClickHandler(index, array)}
          />
        ))}
      </div>

      <div className="building room">
        <img src={Building} alt="building" /> <p>Budynek</p>
      </div>
      <div className="flex flex-wrap rooms">
        {building.map((el, index, array) => (
          <img src={el} alt="building" onClick={() => onClickHandler(array)} />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={data[photoIndex]}
          onCloseRequest={() => setIsOpen(false)}
          nextSrc={data[(photoIndex + 1) % data.length]}
          prevSrc={data[(photoIndex + data.length - 1) % data.length]}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + data.length - 1) % data.length)
          }
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % data.length);
          }}
        />
      )}
    </>
  );
};
