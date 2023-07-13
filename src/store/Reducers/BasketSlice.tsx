import {IAdmin, IProduct} from "../../types/interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";
import product from "../../components/page/Product/Product";
const bask : any= localStorage.getItem('basket')


interface IState {
    basket: IProduct[],
    value: string,
    admin: IAdmin[]
}

const initialState: IState = {
    basket:[],
    value: '',
    admin: []
}
export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket(state, action: PayloadAction<any>) {


            const baskets = state.basket.find(el => el.id === action.payload.id)
            if (baskets) {
                state.basket = state.basket.filter(el => el.id !== baskets.id ? {...el} : 1)
            } else {
                state.basket = [...state.basket, {...action.payload, best: 1}]
            }
        },

        fetchingAdmin(state, action: PayloadAction<any>) {
            state.admin.push(action.payload)
        },
        removeFromAdmin(state, action: PayloadAction<any>) {
            const nextAdminItem = state.admin.filter(el => el.id !== action.payload.id)
            state.admin = nextAdminItem
        },
        fetchingSearch(state, action: PayloadAction<any>) {
            state.value = action.payload

        },
        removeFromBasket(state, action: PayloadAction<any>) {
            localStorage.setItem('basket', JSON.stringify(state.basket = state.basket.filter(el => el.id !== action.payload.id)))
            const nextBasketItem = state.basket.filter(el => el.id !== action.payload.id)
            state.basket = nextBasketItem
        },

        clearBasket(state) {
            state.basket = []
        },

        increase(state, action: PayloadAction<any>) {
            const item = state.basket.find((el) => el.id === action.payload.id)
            if (item) {
                state.basket = state.basket.map(el => el.id === item.id ? {...el, best: el.best + 1} : el)
            } else {
                state.basket = [...state.basket, {...action.payload, amount: 1}]
            }
        },
        decrease(state, action: PayloadAction<any>) {
            const item = state.basket.find((el) => el.id === action.payload.id)

            if (item) {
                if(state.basket.find(el => el.best ===1)){
                    // state.basketItems = [...state.basketItems, {...action.payload,best: 1}]
                }else {
                    state.basket = state.basket.map(el => el.id === item.id ? {...el, best: el.best - 1} : el)
                }
            } else {
                // state.basketItems = [...state.basketItems, {...action.payload,best: 1}]

            }
        },

    }
})

export const search = (value: any) => async (dispatch: AppDispatch) => {
    dispatch(fetchingSearch(value))
}


export const {
    addToBasket,
    fetchingSearch,
    removeFromBasket,
    clearBasket,
    fetchingAdmin,
    removeFromAdmin,
    increase,
    decrease,
} = basketSlice.actions
export default basketSlice.reducer;
