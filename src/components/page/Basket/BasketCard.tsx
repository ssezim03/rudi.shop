import React from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {clearBasket, decrease, increase, removeFromBasket} from "../../../store/Reducers/BasketSlice";
import {RiDeleteBin6Line} from "react-icons/ri";


const BasketCard = ({el}: any, {id}: any) => {
    const {basket} = useAppSelector(state => state.basketSlice)
    const {currency, defaultCurrency} = useAppSelector(state => state.currencySlice)
    const dispatch = useAppDispatch()

    const plus = (el: any) => {
        dispatch(increase(el))
    }
    const minus = (el: any) => {
        dispatch(decrease(el))
    }
    return (
        <div>
        <div className="container">

            {
                <div className="relative overflow-x-auto ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                        <tbody>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row"
                                className="w-[300px] px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="rounded-t-lg  h-[12rem] p-1" src={el.image} alt="PRODUCT"/>
                            </th>
                            <td className="  py-4 w-[20%]">
                                <h1>{el.title}</h1>
                                <p>{el.description}</p>
                            </td>
                            <td className="px-6 py-4">
                                <h1 className=" text-2xl p-5 text-white cursor-pointer">
                                     <span className={` ${el.best > 1 ? "text-white" : "opacity-50"}`} onClick={() => {
                                         minus(el)
                                     }}>-</span>
                                    <span>{el.best}</span>
                                    <span onClick={() => plus(el)}>+</span>
                                </h1>
                            </td>
                            <td className="px-6 py-4">
                                <h1>{el.price * el.best } $</h1>
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => dispatch(removeFromBasket(el))} style={{
                                    fontSize: "20px"
                                }}><RiDeleteBin6Line/></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            }
            </div>
        </div>
    );
};

export default BasketCard;