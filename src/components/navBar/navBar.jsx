import "./navBar.css"
import CartWidget from "../cartWidget/cartWidget"
import { Link } from "react-router-dom";

function NavBar() {
    const logo = "/images/logo.png";

    return (
        <header>
            <div className="navBar">
                <div className="navBar-logo">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <div className="navBar-links">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/category/poleras"}>Poleras</Link>
                    <Link to={"/category/polerones"}>Polerones</Link>
                    <Link to={"/category/pantalones"}>Pantalones</Link>
                </div>
                        
                <div className="navBar-buy">
                    <CartWidget />
                </div>

            </div>
        </header>
        
    );
}

export default NavBar;
