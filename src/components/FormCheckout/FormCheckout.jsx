import React from "react";

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="checkout-form">
                    <h2 className="form-title">Datos de Envío</h2>
                    
                    <div className="form-group">
                        <label className="form-label">Nombre Completo</label>
                        <input 
                            type="text" 
                            name="fullName" 
                            value={dataForm.fullName} 
                            onChange={handleChangeInput}
                            className="form-input"
                            placeholder="Ingresa tu nombre completo"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Teléfono</label>
                        <input 
                            type="text" 
                            name="phone" 
                            value={dataForm.phone} 
                            onChange={handleChangeInput}
                            className="form-input"
                            placeholder="Ej: +56 9 1234 5678"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={dataForm.email} 
                            onChange={handleChangeInput}
                            className="form-input"
                            placeholder="tu@email.com"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Confirmar Pedido
                    </button>
                </form>
    )
}


export default FormCheckout;