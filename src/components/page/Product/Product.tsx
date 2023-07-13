import React, {useEffect} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {getProduct} from "../../../store/Reducers/ActionCreators";
import ProductCard from "./ProductCard";

const Product = () => {
    const {loader, error, product} = useAppSelector(s => s.productSlice)
    const dispatch = useAppDispatch()
    const {mode} = useAppSelector(state => state.darkModeSlice)

    useEffect(() => {
        dispatch(getProduct())
    }, [])
    console.log(product
    )
    return (
        <div style={{
            margin:"80px 0 0 0",
            padding:"50px 0 0 0",
            background:mode ? "#a7c6f3": "#4A6182"
        }}>
            <div className="container">
                <div>
                    <div className="flex flex-wrap  p-30" >
                        {loader && <p>loading...</p>}
                        {error && <p>Error!</p>}
                        {
                            product.map(el => (
                                <div>
                                    <ProductCard el={el}/>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Product;