import React from 'react';

import RUDI from '../../../img/RUDI.png';
import RUDIB from '../../../img/RUDIB.png';
import RUDIW from '../../../img/RUDIW.png';
import {useAppSelector} from "../../../hooks/useAppSelector";

const About = () => {
    const {mode} = useAppSelector(state => state.darkModeSlice)

    return (
        <div id="about"
             style={{
                 background: mode ? "#a7c6f3" : "#4A6182",
                 overflow: "hidden",
                 padding: "50px 0",


             }}>
            <div className="container ">
                <div> {
                    mode ? <img className="ml-auto mr-auto" style={{
                            width: "30%",
                            marginTop: "-10px"
                        }} src={RUDIW} alt=""/>
                        :
                        <img className="ml-auto mr-auto" style={{
                            width: "33%",

                        }} src={RUDIB} alt=""/>
                }

                </div>
                <p style={{
                    textAlign: "center",
                    width: "60%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#fff",
                    marginTop: "-100px"

                }}>
                    <i>
                        RUDY IS A UNISEX READY-TO-WEAR HOUSE BASED IN KYRGYZSTAN AND BASED ON A FUNDAMENTAL PREMISE -
                        CREATING A COLLECTION OF ICONIC ESSENTIALS THAT BOTH WOMEN AND MEN WOULD LIKE WEAR EVERY DAY
                        WITH AN EMPHASIS ON DISTINCTIVE DESIGN, DURABLE STYLE AND QUALITY. BE PRONOUNCED. [RUDY] IS
                        NAMED AFTER N.S, BECAUSE IT CREATES A VIEW OF BRUNCH FOR MODERNITY, SIMPLICITY AND CASUAL
                        ELEGANCE, WHICH IS THE CHARM OF PEOPLE. HONESTY, SPONTANEITY, CREATIVITY AND QUALITY - KEY WORDS
                        GUIDING A HOME WHERE FRIENDS WORK TOGETHER SHARING THE SAME VALUES AND PASSION. "LUXURY MUST BE
                        COMFORTABLE, OTHERWISE IT IS NOT A LUXURY." DESIGNER QUOTES US COCO CHANEL. RUDY CONTINUES TO
                        EVOLVE AND INCREASE HIS GLOBAL PRESENCE WHILE BEING GROUNDED IN HIS FUNDAMENTAL PRINCIPLES:
                        SIMPLE, ETERNAL, AESTHETIC, AND EASY REFINEMENT.
                        RUDI ALWAYS HAD AN  EMPHASIS ON CLOTHES.
                    </i>
                </p>
            </div>
        </div>

    );
};

export default About;
//wheat