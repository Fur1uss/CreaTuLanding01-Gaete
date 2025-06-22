import "./navBar.css"
import CartWidget from "../cartWidget/cartWidget"

function NavBar() {
    const logo = "./src/assets/images/logo.png"

    return (
        <div className="navBar">
            <div className="navBar-logo">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="navBar-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Shop</a>
            </div>
            
            <div className="navBar-buy">
                <CartWidget />
            </div>

        </div>
    );
}

export default NavBar;
