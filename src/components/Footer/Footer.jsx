import React from "react";
import "./Footer.css";
import Tlo from "./../../assets/icons/Tlo_footer.png";
import Auto_1 from "./../../assets/icons/Auto1.png";
import Auto_2 from "./../../assets/icons/auto2.png";
import Auto_3 from "./../../assets/icons/auto3.png";
import Auto_4 from "./../../assets/icons/auto4.png";
import {useLocation} from "react-router-dom";
import useMediaQuery from "./../../hooks/useMediaQuery";


export const Footer = () => {
    const location = useLocation();
    const isKontaktPage = location.pathname === "/kontakt";
    const isMobile = useMediaQuery('(max-width: 920px)')
    return (
        <div
            className="footer"
            style={{backgroundImage: `url(${Tlo})`, minHeight: 266}}
        >

            {!isKontaktPage &&
            (!isMobile ? <div className="kontakt-links">
                <div className="phone-footer">667 433 777</div>
                <div className="mail-footer">
                    <a href="mailto: mojakwatera@gmail.com">mojakwatera@gmail.com</a>
                </div>
                <div className="location-footer">
                    <a
                        href="https://goo.gl/maps/yN1SYRfiZGusMv5j8"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Wyznacz trasę
                    </a>
                </div>
                <div className="facebook-footer">
                    <a
                        href="https://www.facebook.com/SuperNocleg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        SuperNocleg
                    </a>
                </div>
                <div className="youtube-footer">
                    <a
                        href="https://www.youtube.com/channel/UC_qzc9J4BGW2B3PF6sXNgUw"
                        target="_blank"
                        rel="noreferrer"
                    >
                        YOUTUBE
                    </a>
                </div>
            </div> : <div className="flex flex-col">
                <p className="phone-mobile mt-3 mb-3">667 433 777</p>
                <p className="mail-mobile"><a
                    href="mailto: mojakwatera@gmail.com">mojakwatera@gmail.com</a></p>
                <p className="map-mobile mt-3 mb-3"><a
                    href="https://goo.gl/maps/yN1SYRfiZGusMv5j8"
                    target="_blank"
                    rel="noreferrer"
                >
                    Wyznacz trasę
                </a></p>
                <div className="flex">
                    <p className="facebook-mobile mr-3"><a
                        href="https://www.facebook.com/SuperNocleg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        SuperNocleg
                    </a></p>
                    <p className="youtube-mobile"><a
                        href="https://www.youtube.com/channel/UC_qzc9J4BGW2B3PF6sXNgUw"
                        target="_blank"
                        rel="noreferrer"
                    >
                        YOUTUBE
                    </a></p>
                </div>
            </div>)}
            <img
                className="vehicle p1"
                src={Auto_1}
                alt="kwatery pracownicze wiązowna"
            />
            <img
                className="vehicle p2"
                src={Auto_2}
                alt="kwatery pracownicze wiązowna"
            />
            <img
                className="vehicle p3"
                src={Auto_3}
                alt="kwatery pracownicze wiązowna"
            />
            <img
                className="vehicle p4"
                src={Auto_4}
                alt="kwatery pracownicze wiązowna"
            />
        </div>
    );
};
