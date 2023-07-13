import {createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import {IAdmin, IProduct} from "../../types/interface";
import {productSlice} from "./ProductSlice";


interface IState {
    currency:any,
    defaultCurrency:any
}

const initialState: IState = {
    currency: {
        kgs: 1,
        usa: 0.012,
        rub: 0.8,
        kzt: 5.41,
        uzs: 131,
    },
    defaultCurrency:"kgs"
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        chooseCurrency(state, action: PayloadAction<any>) {
            return {...state, defaultCurrency:action.payload}

        }

    }
})




export default  currencySlice.reducer
export  const {chooseCurrency} = currencySlice.actions