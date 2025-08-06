import { useState } from "react"
import "./itemCount.css"

const ItemCount = ({stock, addProduct}) => {
    const [count,setCount] = useState(1);

    const handleClickDecrement = () =>{
        if(count > 1){
            setCount(count - 1);
        }
    };
    
    const handleClickIncrement = () =>{
        if(count < stock){
            setCount(count + 1);
        }
    };


    return(
        <div className="item-count-container">
            <div className="quantity-controls">
                <button 
                    className="quantity-button decrement" 
                    onClick={handleClickDecrement}
                    disabled={count <= 1}
                >
                    -
                </button>
                <span className="quantity-display">{count}</span>
                <button 
                    className="quantity-button increment" 
                    onClick={handleClickIncrement}
                    disabled={count >= stock}
                >
                    +
                </button>
            </div>
            <button 
                className="add-to-cart-button" 
                onClick={() => addProduct(count)}
            >
                Agregar al carrito
            </button>
        </div>
    )
}


export default ItemCount