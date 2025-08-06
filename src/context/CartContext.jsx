import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]);;
    const addProductInCart = (product) =>{
        //Mediante un condicional, detectar si el producto ya esta en el carrito
        //Si ya esta en el carrito, sumar sus cantidades, sino agregarlo como nuevo
        const isInCart = cart.find((productCart) => productCart.id === product.id);
        
        if (isInCart) {
            const updatedCart = cart.map((productCart) => {
                if (productCart.id === product.id) {
                    return { ...productCart, quantity: productCart.quantity + product.quantity };
                } else {
                    return productCart;
                }
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, product]);
        }
    };

    const totalQuantity = () =>{
        const total = cart.reduce((total,product)=>total + product.quantity, 0);
        return total;
    };

    const totalPrice = ()=> {
        const total = cart.reduce((total,product)=> total + (product.price * product.quantity),0);
        return total;
    };

    const deleteProductById = (id) =>{
        const productsFilter =cart.filter((product)=>product.id !== id);
        setCart(productsFilter);
    };

    return(
        <CartContext.Provider value={{cart,addProductInCart,totalQuantity,totalPrice,deleteProductById}}>
            {children}
        </CartContext.Provider>
    );
};

export {CartContext,CartProvider};