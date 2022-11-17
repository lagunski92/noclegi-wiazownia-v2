import React, { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import "./Images.css";

import Users from "./../../assets/icons/Users.png";
import Kitchen from "./../../assets/icons/Kitchen.png";
import Bathroom from "./../../assets/icons/Bathroom.png";
import Building from "./../../assets/icons/Building.png";
import Laundry from "./../../assets/icons/Laundry.png";

import Room_1_big from "./../../assets/images/Room1_big.png";
import Room_2_big from "./../../assets/images/Room2_big.png";
import Room_3_big from "./../../assets/images/Room3_big.png";
import Room_4_big from "./../../assets/images/Room4_big.png";
import Room_5_big from "./../../assets/images/Room5_big.png";
import Room_6_big from "./../../assets/images/Room6_big.png";
import Room_7_big from "./../../assets/images/Room7_big.png";
import Room_8_big from "./../../assets/images/Room8_big.png";

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

import Kitchen_1_big from "./../../assets/images/Kitchen1_big.png";
import Kitchen_2_big from "./../../assets/images/Kitchen2_big.png";
import Kitchen_3_big from "./../../assets/images/Kitchen3_big.png";
import Kitchen_4_big from "./../../assets/images/Kitchen4_big.png";

import Bathroom_1 from "./../../assets/images/Bathroom1_small.png";
import Bathroom_2 from "./../../assets/images/Bathroom2_small.png";
import Bathroom_3 from "./../../assets/images/Bathroom3_small.png";
import Bathroom_4 from "./../../assets/images/Bathroom4_small.png";

import Bathroom_1_big from "./../../assets/images/Bathroom1_big.png";
import Bathroom_2_big from "./../../assets/images/Bathroom2_big.png";
import Bathroom_3_big from "./../../assets/images/Bathroom3_big.png";
import Bathroom_4_big from "./../../assets/images/Bathroom4_big.png";

import Building_1 from "./../../assets/images/Building1_small.png";
import Building_2 from "./../../assets/images/Building2_small.png";
import Building_3 from "./../../assets/images/Building3_small.png";

import Building_1_big from "./../../assets/images/Building1_big.png";
import Building_2_big from "./../../assets/images/Building2_big.png";
import Building_3_big from "./../../assets/images/Building3_big.png";

const kitchen = [
  {
    id: 1,
    smallImage: Kitchen_1,
    bigImage: Kitchen_1_big,
  },
  { id: 2, smallImage: Kitchen_2, bigImage: Kitchen_2_big },
  {
    id: 3,
    smallImage: Kitchen_3,
    bigImage: Kitchen_3_big,
  },
  { id: 4, smallImage: Kitchen_4, bigImage: Kitchen_4_big },
];

export const Images = () => {
  const rooms = [
    {
      id: 1,
      smallImage: Room_1,
      bigImage: Room_1_big,
    },
    {
      id: 2,
      smallImage: Room_2,
      bigImage: Room_2_big,
    },
    {
      id: 3,
      smallImage: Room_3,
      bigImage: Room_3_big,
    },
    {
      id: 4,
      smallImage: Room_4,
      bigImage: Room_4_big,
    },
    {
      id: 5,
      smallImage: Room_5,
      bigImage: Room_5_big,
    },
    {
      id: 6,
      smallImage: Room_6,
      bigImage: Room_6_big,
    },
    {
      id: 7,
      smallImage: Room_7,
      bigImage: Room_7_big,
    },
    {
      id: 8,
      smallImage: Room_8,
      bigImage: Room_8_big,
    },
  ];

  const bathroom = [
    { id: 1, smallImage: Bathroom_1, bigImage: Bathroom_1_big },
    { id: 2, smallImage: Bathroom_2, bigImage: Bathroom_2_big },
    { id: 3, smallImage: Bathroom_3, bigImage: Bathroom_3_big },
    { id: 4, smallImage: Bathroom_4, bigImage: Bathroom_4_big },
  ];
  const building = [
    { id: 1, smallImage: Building_1, bigImage: Building_1_big },
    {
      id: 2,
      smallImage: Building_2,
      bigImage: Building_2_big,
    },
    { id: 3, smallImage: Building_3, bigImage: Building_3_big },
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const onClickHandler = (array) => {
    setData(array);
    setIsOpen(true);
  };

  return (
    <>
      <div className="images-title">
        <h3>Galeria</h3>
      </div>

      <div className="test users">
        <img src={Users} alt="users" /> <span>Pokoje</span>
      </div>
      <div className="flex flex-wrap rooms">
        {rooms.map((el, index, array) => (
          <img
            key={el.id}
            src={el.smallImage}
            alt="room"
            onClick={() => onClickHandler(array)}
          />
        ))}
      </div>

      <div className="test kitchen">
        <img src={Kitchen} alt="kitchen" /> <span>Kuchnie</span>
      </div>
      <div className="flex flex-wrap rooms">
        {kitchen.map((el, index, array) => (
          <img
            key={el.id}
            src={el.smallImage}
            alt="kitchen"
            onClick={() => onClickHandler(array)}
          />
        ))}
      </div>

      <div className="test bathroom">
        <img src={Bathroom} alt="bathroom" /> <span>Łazienki</span>
      </div>
      <div className="flex flex-wrap rooms">
        {bathroom.map((el, index, array) => (
          <img
            key={el.id}
            src={el.smallImage}
            alt="bathroom"
            onClick={() => onClickHandler(array)}
          />
        ))}
      </div>

      <div className="test laundry">
        <img src={Laundry} alt="laundry" /> <span>Pralnia</span>
      </div>
      <div className="flex flex-wrap rooms">
        {bathroom.map((el, index, array) => (
          <img
            key={el.id}
            src={el.smallImage}
            alt="laundry"
            onClick={() => onClickHandler(array)}
          />
        ))}
      </div>

      <div className="building test">
        <img src={Building} alt="building" />
        <span>Budynek</span>
      </div>
      <div className="flex flex-wrap rooms">
        {building.map((el, index, array) => (
          <img
            key={el.id}
            src={el.smallImage}
            alt="building"
            onClick={() => onClickHandler(array)}
          />
        ))}
      </div>
      <div className="main-title mt-16">
        <h3>Kontakt</h3>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={data[photoIndex].bigImage.toString()}
          onCloseRequest={() => setIsOpen(false)}
          nextSrc={data[(photoIndex + 1) % data.length].bigImage.toString()}
          prevSrc={data[
            (photoIndex + data.length - 1) % data.length
          ].bigImage.toString()}
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
