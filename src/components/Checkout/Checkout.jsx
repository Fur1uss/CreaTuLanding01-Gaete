import React, { useContext } from "react";
import { useState } from "react";
import "./Checkout.css";
import { CartContext } from "../../context/cartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";

const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullName: "",
        phone : "",
        email: ""
    });

    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice()
        }
        
        await uploadOrder(order);
    }

    const uploadOrder = async (order) => {
        try{
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);
            console.log("Orden subida con ID:", response.id);
            setOrderId(response.id);
        }
        catch (error) {
            console.error("Error al subir la orden:", error);
        }
    }

    return (
        <div className="checkout-container">
            <div className="checkout-content">
                <h1 className="checkout-title">Finalizar Compra</h1>
                
                <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmit={handleSubmit} />

                <div className="order-summary">
                    <h2 className="summary-title">Resumen del Pedido</h2>
                    
                    {cart.map((product, index) => (
                        <div key={`${product.id}-${index}`} className="summary-item">
                            <div className="item-info">
                                <span className="item-name">{product.name}</span>
                                <span className="item-quantity">Cantidad: {product.quantity}</span>
                            </div>
                            <span className="item-price">
                                ${product.quantity * product.price}
                            </span>
                        </div>
                    ))}
                    
                    <div className="total-section">
                        <p className="total-label">Total a Pagar:</p>
                        <div className="total-amount">${totalPrice()}</div>
                    </div>
                </div>
            </div>
            
            {/* Modal de confirmación */}
            {orderId && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="confirmation-title">¡Compra Exitosa!</h2>
                        </div>
                        <div className="modal-body">
                            <div className="success-icon">✓</div>
                            <p className="confirmation-message">Tu orden ha sido procesada con éxito.</p>
                            <div className="order-details">
                                <p className="confirmation-id">ID de la orden:</p>
                                <p className="order-id">{orderId}</p>
                            </div>
                            <p className="confirmation-note">
                                Recibirás un email de confirmación en breve.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button 
                                className="modal-button"
                                onClick={() => {
                                    setOrderId(null);
                                    window.location.href = '/';
                                }}
                            >
                                Volver al Inicio
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;