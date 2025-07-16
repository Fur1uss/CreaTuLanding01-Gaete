import { useEffect, useState } from "react";
import "./ItemListContainer.css"

import useProducts from "../../hooks/useProducts.js";
import {ItemList} from "../itemList/itemList.jsx";
import Loading from "../Loading/loading.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = ({}) => {
    const { category } = useParams();
    const { products,loading } = useProducts(category);

    console.log(category)

    return (
        <>
        <div className="container-grid-products">
            {
                loading ? <Loading /> : <ItemList products = {products} />
            }
        </div>

            
        </>
    );
}


export default ItemListContainer;