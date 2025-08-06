import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    const {cart, totalPrice, deleteProductById} = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="cart-container">
                <div className="cart-content">
                    <h1 className="cart-title">Tu Carrito</h1>
                    <div className="empty-cart">
                        <p className="empty-cart-message">Tu carrito está vacío</p>
                        <Link to="/" className="continue-shopping">
                            Continuar Comprando
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="cart-container">
            <div className="cart-content">
                <h1 className="cart-title">Tu Carrito</h1>
                
                <div className="cart-items">
                    {cart.map((productCart, index) => (
                        <div key={`${productCart.id}-${index}`} className="cart-item">
                            <img 
                                src={productCart.image} 
                                alt={productCart.name} 
                                className="cart-item-image"
                            />
                            <div className="cart-item-info">
                                <div className="cart-item-header">
                                    <h3 className="cart-item-name">{productCart.name}</h3>
                                    <span className="cart-item-price">${productCart.price}</span>
                                </div>
                                
                                <div className="cart-item-details">
                                    <div className="cart-item-quantity">
                                        <span className="quantity-label">Cantidad:</span>
                                        <span className="quantity-value">{productCart.quantity}</span>
                                    </div>
                                    
                                    <div className="cart-item-subtotal">
                                        ${productCart.quantity * productCart.price}
                                    </div>
                                    
                                    <button 
                                        className="delete-button"
                                        onClick={() => deleteProductById(productCart.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2 className="cart-total">Total: ${totalPrice()}</h2>
                </div>
                
                <div className="checkout-section">
                    <Link to="/checkout" className="checkout-button">
                        Proceder al Checkout
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Cart
