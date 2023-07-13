import React, {useState} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {AiOutlineDelete, AiOutlineHeart} from "react-icons/ai";
import {addToFavorite, removeFromFavorite} from "../../../store/Reducers/FavoriteSlice";
import {NavLink} from "react-router-dom";
import {BsCartCheck, BsFillHeartFill} from "react-icons/bs";
import {SlBasket} from "react-icons/sl";
import {addToBasket} from "../../../store/Reducers/BasketSlice";
import product from "../Product/Product";


const ProductCard = ({el}: any) => {
    const [fav, setFav] = useState(true)
    const dispatch = useAppDispatch()
    console.log('favorite', el)
    const {favoriteItems, value} = useAppSelector(state => state.favoriteSlice)
    const [button, setButton] = useState(false)
    const {mode} = useAppSelector(state => state.darkModeSlice)

    const btn = () => {
        setButton(!button)
    }
    const addToFav = () => {
        dispatch(addToFavorite(el))
    }
    const addToCart = () => {
        dispatch(addToBasket(el))
    }


    return (

        <div className="container">
            {
                el.title.includes(value) &&

                <div className="flex flex-wrap p-4 mb-8">

                    <div
                        className=" w-[300px]  bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                        <div className="w-[50%]  ml-auto mr-auto  ">
                            <img className="rounded-t-lg h-[12rem] p-1" src={el.image} alt="PRODUCT"/>
                        </div>

                        <div className="p-5 dark:bg-gray-800">
                            <h5 className="  h-[80px] mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>

                            <div className="flex justify-between">

                                {
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "250px"
                                    }}>
                                        <div className="">
                                            <h1 className="py-1 p-5 text-lg font-bold tracking-tight dark:text-blue-50 ">{el.price} $</h1>
                                        </div>
                                        <button onClick={() => dispatch(removeFromFavorite(el))}
                                                style={{fontSize: "20px"}}
                                                className="text-sm  border-solid border-2 border-blue-500  bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-b-blue-400  rounded">
                                            <AiOutlineDelete/>
                                        </button>

                                    </div>}


                            </div>


                        </div>
                    </div>


                </div>

            }

        </div>


    );
};

export default ProductCard;