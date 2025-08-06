import "./cartWidget.css"
const cartImage = "./src/assets/images/shopping-bag.png"

import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
    const {totalQuantity} = useContext(CartContext);
    return (
        <Link to={"/cart"}>
            <div className="cartWidget">
                <img src={cartImage} alt="cart" />
                <div className="quantityContainer">
                    <p>{totalQuantity()}</p>
                </div>
            </div>
        </Link>
    );
}

export default CartWidget;