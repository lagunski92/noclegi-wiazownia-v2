import React from "react";
import BannerImage from "./../../assets/icons/Banner.png"
import "./banner.css";

export const Banner = () => {
    return (
        <div className="banner-container">
            <img src={BannerImage} alt="banner"/>
        </div>
    );
};
