import "./cartWidget.css"
const cart = "./src/assets/images/shopping-bag.png"

function CartWidget() {
    return (
        <div className="cartWidget">
            <img src={cart} alt="cart" />
        </div>
    );
}

export default CartWidget;