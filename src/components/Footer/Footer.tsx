import React from 'react';
import {NavLink} from "react-router-dom";

import RUDI from '../../img/RUDI.png';
import {useAppSelector} from "../../hooks/useAppSelector";
import RUDIH from "../../img/RUDIH.png";
import {AiOutlineInstagram} from "react-icons/ai";
import {PiTelegramLogoLight} from "react-icons/pi";
import {CiFacebook} from "react-icons/ci";

const Footer = () => {
    const {mode} = useAppSelector(state => state.darkModeSlice)

    return (
        <div>
            <div id="footer">
                <footer className="bg-white text-black" style={{
                    background: mode ? "#fff" : "#041C44",
                    padding:"10px 0 "

                }}>
                    <div className="container ">
                        <div className="mt-0 flex justify-around">
                            <div className="text-black flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                                <NavLink to="/" style={{
                                    width: "26%",
                                    margin:"0 0 0 20px"
                                }}>{
                                    mode ? <img style={{}} src={RUDI} alt="RUDI"/> :
                                        <img style={{}} src={RUDIH} alt="RUDI"/>
                                }
                                </NavLink>

                            </div>
                            <div>
                                <div style={{
                                    display:"flex",
                                   margin:"10px 0 10px 120px",
                                    justifyContent:"space-evenly",
                                    width:"30%",
                                    textAlign:"center",
                                    color: mode ? "black" : "#fff"

                                }}>
                                    <a href="https://instagram.com/suzynll?igshid=YmM0MjE2YWMzOA=="><AiOutlineInstagram/></a>
                                    <a href="https://t.me/suzynll"><PiTelegramLogoLight/></a>
                                    <CiFacebook/>
                                </div>
                                <h6 style={{ textAlign:"center",
                                    fontSize:"12px",
                                    width:"60%",

                                    color: mode ? "black" : "#fff"
                                }}>Company name: RUDI. Official representative: N.S
                                    Business Number: +996554540544 Customer Service Center: 070-7523-2870
                                    Person in charge of managing personal information: SHIZZO
                                    Email address: rudi@gmail.com</h6>



                            </div>
                        </div>
                    </div>

                </footer>
            </div>
        </div>
    );
};

export default Footer;