import React from "react";
import "./Header.css";
import SuperNocleg from "../../assets/icons/SuperNocleg.png";
import Facebook from "../../assets/icons/Facebook.png";
import Youtube from "../../assets/icons/Youtube.png";
import { NavLink, useLocation } from "react-router-dom";
import Phone from "../../assets/icons/Phone.png";
import WhitePhone from "../../assets/icons/White-phone.png";
import Map from "../../assets/icons/Map2.png";
import RedMap from "../../assets/icons/Red_map.png";
import useMediaQuery from "./../../hooks/useMediaQuery";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";

const linkLocation = "https://goo.gl/maps/yN1SYRfiZGusMv5j8";

export const Header = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 920px)");
  const isMainPage = location.pathname === "/";
  const isKontaktPage = location.pathname === "/kontakt";
  const isGalleryPage = location.pathname === "/galeria";

  return (
    <div
      className={`${
        isMobile
          ? ""
          : `${isGalleryPage ? "header-wrapper-gallery" : "header-wrapper"}`
      }`}
    >
      <div
        className="nav"
        style={
          isGalleryPage || isMobile
            ? { backgroundColor: "white" }
            : { backgroundColor: "transparent" }
        }
      >
        <NavLink to="">
          <img src={SuperNocleg} alt="super-nocleg" className="nocleg" />
        </NavLink>
        {isMobile ? (
          <HamburgerMenu />
        ) : (
          <div className="links">
            <div>
              <NavLink
                to="galeria"
                className="image"
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: "underline #971831",
                        textDecorationThickness: "4px",
                      }
                    : { textDecoration: "" }
                }
              >
                Galeria
              </NavLink>
              <NavLink
                to="kontakt"
                className="image"
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: "underline #971831",
                        textDecorationThickness: "4px",
                      }
                    : { textDecoration: "" }
                }
              >
                Kontakt
              </NavLink>
            </div>
            <a
              href="https://www.youtube.com/channel/UC_qzc9J4BGW2B3PF6sXNgUw"
              target="_blank"
              rel="noreferrer"
              className="youtube"
            >
              {" "}
              <img src={Youtube} alt="youtube" />{" "}
            </a>
            <a
              href="https://www.facebook.com/SuperNocleg"
              target="_blank"
              rel="noreferrer"
              className="facebook"
            >
              {" "}
              <img src={Facebook} alt="facebook" />{" "}
            </a>
          </div>
        )}
      </div>

      <div
        className={`${
          !isMobile
            ? ""
            : `${isGalleryPage ? "header-wrapper-gallery" : "header-wrapper"}`
        }`}
        style={{ margin: "0px" }}
      >
        {isGalleryPage && isMobile && (
          <div className="block mobile-gallery relative top-24">
            <div className="title" style={{ background: "transparent" }}>
              <h2>Pokoje w Wiązownie</h2>
              <h3>K. Warszawy</h3>
            </div>
            {!isKontaktPage && (
              <div className="inline-flex mb-20">
                <div className={isMainPage ? "mainContact" : "contact"}>
                  <img
                    src={isMainPage ? WhitePhone : Phone}
                    alt="phone"
                    className="phone-icon"
                  />
                  <p>667 433 777</p>
                </div>

                <div className={isMainPage ? "mainPageMap" : "map"}>
                  <img
                    src={isMainPage ? RedMap : Map}
                    alt="map"
                    className="map-icon"
                  />
                  <a href={linkLocation} target="_blank" rel="noreferrer">
                    Wyznacz trasę
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {!isMobile && !isKontaktPage && (
        <div className="block mobile">
          <div className={isMainPage || isKontaktPage ? "mainTitle" : "title"}>
            <h2>Pokoje w Wiązownie</h2>
            <h3>K. Warszawy</h3>
          </div>
          {!isKontaktPage && (
            <div className="inline-flex mb-20">
              <div className={isMainPage ? "mainContact" : "contact"}>
                <img
                  src={isMainPage ? WhitePhone : Phone}
                  alt="phone"
                  className="phone-icon"
                />
                <p>667 433 777</p>
              </div>

              <div className={isMainPage ? "mainPageMap" : "map"}>
                <img
                  src={isMainPage ? RedMap : Map}
                  alt="map"
                  className="map-icon"
                />
                <a href={linkLocation} target="_blank" rel="noreferrer">
                  Wyznacz trasę
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
