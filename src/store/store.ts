import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productSlice from "./Reducers/ProductSlice";
import basketSlice from "./Reducers/BasketSlice";
import favoriteSlice from "./Reducers/FavoriteSlice";
import darkModeSlice from "./Reducers/DarkModeSlice";
import currencySlice from "./Reducers/CurrencySlice";

const rootReducer = combineReducers({
   productSlice,
    basketSlice,
    favoriteSlice,
    darkModeSlice,
    currencySlice

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type rootReducer = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']