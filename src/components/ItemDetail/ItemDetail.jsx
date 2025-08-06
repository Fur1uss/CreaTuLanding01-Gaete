import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({product = {}}) => {

    const {addProductInCart} = useContext(CartContext);
    const addProduct = (quantity) => {
        const productCart = {...product, quantity}
        addProductInCart(productCart);
    }

    return(
        <div className="infoProductContainer">
            <div className="infoImageContainer">
                <img src={product.image} alt="" />
                <h4>{product.name}</h4>
            </div>
            <div className="purchaseOptionContainer">  
                <div>
                    <p className="description">{product.description}</p>
                    <p className="price">${product.price}</p>
                </div>

                <div>
                    <ItemCount stock = {product.stock} addProduct = {addProduct} />
                </div>
            </div>

        </div>
    )
}

export default ItemDetail