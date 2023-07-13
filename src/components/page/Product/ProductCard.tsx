import React, {useState} from 'react';
import {IProduct} from "../../../types/interface";
import {useDispatch} from "react-redux";
import {FaRegHeart} from "react-icons/fa";
import {BsCartCheck, BsCartCheckFill, BsFillBasketFill, BsFillCartFill, BsFillHeartFill} from "react-icons/bs";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {NavLink} from "react-router-dom";
import {addToBasket} from "../../../store/Reducers/BasketSlice";
import {SlBasket} from "react-icons/sl";
import product from "./Product";
import {addToFavorite, addToLike} from "../../../store/Reducers/FavoriteSlice";
import {AiFillHeart} from "react-icons/ai";



interface IPCard {
    el: IProduct
}


const ProductCard = ({el}: IPCard) => {

    const dispatch = useDispatch()
    const {favoriteItems}=useAppSelector(state => state.favoriteSlice)
    const {basket, value} = useAppSelector(state => state.basketSlice)
    const [button, setButton] = useState(false)
    const [fav, setFav] = useState(true)
    const [isLike,setIsLike]=useState(false)


    const addToFav = () => {
        dispatch(addToFavorite(el))
        setIsLike(true)
        setTimeout(()=>setIsLike(false),1000)
    }
    const addToLiked = () => {
        dispatch(addToLike(el))
        setIsLike(true)
        setTimeout(()=>setIsLike(false),1000)
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
                        <div className="w-[50%]  ml-auto mr-auto  relative">
                            <img onDoubleClick={()=>{addToLiked()
                                setFav(!fav)}} className="rounded-t-lg h-[12rem] p-1" src={el.image} alt="PRODUCT"/>

                                <BsFillHeartFill    className={`text-red-600 top-[50%] left-[40%] text-4xl absolute transition-[.1s] rotate-[-10deg] ${isLike?"scale-1":"scale-0"}`}/>

                        </div>

                        <div className="p-5 dark:bg-gray-800">
                            <h5 className="  h-[80px] mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>

                            <div
                                className="mb-2 text-sm  font-bold tracking-tight text-gray-900 dark:text-white">{el.price}</div>


                            <div className="flex justify-between ">


                                {
                                    button ?
                                        <NavLink to={"/basket"}>
                                            <button className="text-sm  border-solid border-2 border-blue-500  bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-b-blue-400  rounded" >
                                                <BsCartCheck/>
                                            </button>
                                        </NavLink>

                                        :
                                        <button onClick={() => {
                                            addToCart()
                                            setButton(true)
                                        }}
                                                  className="text-sm  border-solid border-2 border-blue-500  bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-b-blue-400  rounded">
                                            <SlBasket/>
                                        </button>
                                }


                                <button  onClick={() => {
                                    addToFav()
                                    setFav(!fav)

                                }}
                                    className="text-sm  border-solid border-2 border-blue-500  bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-b-blue-400  rounded">
                                    {
                                        fav ? <BsFillHeartFill className="text-white"/>
                                            : <BsFillHeartFill    className="text-red-600"/>
                                    }

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductCard;

