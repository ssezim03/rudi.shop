import React from 'react';
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {search} from "../../store/Reducers/BasketSlice";
import {HiSearch} from "react-icons/hi";
import {BsCartCheck, BsFillMoonFill, BsSunFill} from "react-icons/bs";
import {toggleDarkMode} from "../../store/Reducers/DarkModeSlice";
import {SlBasket} from "react-icons/sl";
import {FiSun} from "react-icons/fi";
import RUDI from '../../img/RUDI.png';
import RUDIH from '../../img/RUDIH.png';
import {addToFavorite} from "../../store/Reducers/FavoriteSlice";
import {chooseCurrency} from "../../store/Reducers/CurrencySlice";

const Header = () => {
    const {favoriteItems,} = useAppSelector(state => state.favoriteSlice)
    const {basket} = useAppSelector(state => state.basketSlice)
    const {currency,defaultCurrency} = useAppSelector(state => state.currencySlice)
    const dispatch = useAppDispatch()
    const {mode} = useAppSelector(state => state.darkModeSlice)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(search(e.target.value))
    }
    const chooseCurr = (e:any) => {
        dispatch(chooseCurrency(defaultCurrency))
    }




    return (
        
        <div id="header">
            <header className="sticky fixed top-0 left-0 z-50 bg-white text-black" style={{
                background:mode ? "#fff": "#041C44",
                position: "fixed",
                width:"100%",


            }}>
                <nav className="">
                    <div className="text-black flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                        <NavLink to="/" style={{
                            width: "10%",

                        }}>{
                            mode? <img style={{}} src={RUDI} alt="RUDI"/>:<img style={{}} src={RUDIH} alt="RUDI"/>
                        }
                        </NavLink>
                        <div className="text-black flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0" >

                            <NavLink to="/product"
                                     className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-black" style={{
                                color:mode ? "black":"#fff"
                            }}
                                     aria-current="page">Home</NavLink>

                            <NavLink to="/basket"
                                     className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-black" style={{
                                color:mode ? "black":"#fff"
                            }}
                                     aria-current="page">Basket</NavLink>

                            <NavLink to="/favorite"
                                     className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-black" style={{
                                color:mode ? "black":"#fff"
                            }}
                                     aria-current="page">Favorite</NavLink>

                            <NavLink to="/about"
                                     className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-black" style={{
                                color:mode ? "black":"#fff"
                            }}
                                     aria-current="page">About us</NavLink>
                        </div>
                        <div>
                            {
                                // el.value.id !== el.id ? 0 :
                                < div className="flex items-center">
                                    < input onChange={handleChange} style={{
                                        padding: "6px 20px",
                                        color: mode ? "black": "white",
                                        outline: "none",
                                        borderRadius: "40px",
                                        background: "transparent",
                                        border: mode ? "solid 2px black": "solid 2px white",
                                        cursor: "auto"
                                    }}
                                            className="in w-96 p-4 left-10 pl-10 border-l-blue-100 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="Search..."/>
                                    <button style={{
                                        fontSize: "18px",
                                        border: mode ? "solid 2px black": "solid 2px white",
                                        borderRadius: "40px",
                                        background: "transparent",
                                        cursor: "pointer",
                                        color: mode ? "black": "white",
                                    }}
                                            className="text-sm   bg-transparent  text-black-700 font-semibold  py-2 px-4  rounded">
                                        <HiSearch /></button>
                                </div>

                            }
                        </div>

                        <button className="text-2xl">
                            <button onClick={(e: any) => dispatch(toggleDarkMode(e))}><BsSunFill
                                style={{color: mode ? 'black' : 'yellow'}}/></button>

                        </button>
                        {/*<select onChange={chooseCurr} style={{*/}
                        {/*    fontSize: "18px",*/}
                        {/*    border: mode ? "solid 2px black": "solid 2px white",*/}
                        {/*    borderRadius: "40px",*/}
                        {/*    background: "transparent",*/}
                        {/*    cursor: "pointer",*/}
                        {/*    color: mode ? "black": "white",*/}
                        {/*}}>*/}
                        {/*    {*/}
                        {/*        Object.keys(selectValues).map((el)=>(*/}
                        {/*                <option value={el} selected={defaultCurrency===el}>{selectValues[el]}</option>*/}

                        {/*            )*/}
                        {/*        )*/}
                        {/*    }*/}
                        {/*</select>*/}
                    </div>
                </nav>
            </header>
        </div>

    );

};

export default Header;