import React from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import BasketCard from "./BasketCard";
import {NavLink} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {clearBasket} from "../../../store/Reducers/BasketSlice";
import Footer from "../../Footer/Footer";

const Basket = ({el}: any) => {

    const dispatch = useAppDispatch()
    const {mode} = useAppSelector(state => state.darkModeSlice)

    const {basket} = useAppSelector(state => state.basketSlice)
    const totalPrice = basket.reduce((acc,el)=>{
        return acc + el.price*el.best
    },0)
    return (
        <div style={{
            margin:"80px 0 0 0",
            padding:"50px 0 0 0",
            background:mode ? "#a7c6f3": "#4A6182"
        }}>


        <div className="container">
            <hr/>
            {
                basket.length === 0 ? (
                    <div className=" p-44">
                        <h1 style={{color: mode ? "white" : "black",

                        }}className="   text-white text-2xl  p-20">Пусто!</h1>
                        <div>
                            <NavLink to="/product">
                                <button
                                    className="  ml-96 m-1 p-5 flex justify-around  py-2  mb-1  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    <AiOutlineArrowLeft className="text-xl"/> Start shopping
                                </button>

                            </NavLink>
                        </div>

                    </div>
                ) : (

                    <div className=" py-7">
                        <div className=" bg-gray-800 text-blue-50 w-[90%] ml-auto mr-auto rounded-sm" style={{}}>
                            <tr className="flex justify-around">
                                <h1 className="ml-9text-L p-5">
                                    Product name
                                </h1>
                                <h1 className="ml-9text-L p-5">
                                    About
                                </h1>
                                <h1 className="text-L p-5">
                                    Qty
                                </h1>
                                <h1 className="text-L p-5">
                                    Price
                                </h1>
                                <h1 className="text-L p-5">
                                    Delete
                                </h1>


                            </tr>

                        </div>
                        {
                            basket.map(el => (
                                <BasketCard el={el}/>
                            ))
                        }
                        <tfoot className="ml-auto mr-auto" style={{
                            display: "flex",

                            width: "90%"
                        }}>
                        <tr style={{
                            alignItems: "start",
                            display: "flex",
                            justifyContent: "space-between",
                        }} className="font-semibold text-gray-900 dark:text-white w-[100%] bg-gray-800">
                            <th scope="row" className="px-6 py-3 text-base">Total:</th>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3">{totalPrice}</td>
                            <td className="px-6 py-3"></td>

                        </tr>
                        </tfoot>
                    </div>

                )
            }

        </div>
        </div>

    );

};

export default Basket;