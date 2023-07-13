import React from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import FavoriteCard from "./FavoriteCard";
// import {clearBasket} from "../../store/Reducers/BasketSlice";
import {clearFavorite} from "../../../store/Reducers/FavoriteSlice";

import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import BasketCard from "../Basket/BasketCard";
import ProductCard from "../Product/ProductCard";


const Favorite = ({el}:any) => {
    const dispatch = useAppDispatch()
    const {mode} = useAppSelector(state => state.darkModeSlice)
    const {favoriteItems} = useAppSelector(state => state.favoriteSlice)
    return (
        <div style={{
            padding:"50px 0 0 0",
            background:mode ? "#a7c6f3": "#4A6182"
        }}>
        <div className="container">

            {
                favoriteItems.length === 0 ? (
                    <div className=" p-44">
                        <h1 style={{color: mode ? "white" : "black"}}className="  text-white text-2xl  p-20">Пусто!</h1>
                        <div>
                            <Link to="/product">
                                <button
                                    className="ml-96 m-1 p-5 flex justify-around  py-2  mb-1  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><AiOutlineArrowLeft className="text-xl"/> Start shopping
                                </button>

                            </Link>
                        </div>

                    </div>
                ) : (
                    <div>
                        <div className="flex justify-around p-5" >
                            <button  onClick={() => dispatch(clearFavorite(el))}  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >CLEAR ALL</button>

                        </div>

                            <div className="flex flex-wrap  p-30" >

                                {
                                   favoriteItems.map(el => (
                                        <div>
                                            <FavoriteCard el={el}/>
                                        </div>
                                    ))
                                }
                            </div>

                    </div>
                )
            }

        </div>
        </div>

    );
};

export default Favorite;