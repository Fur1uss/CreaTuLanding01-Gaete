import "./itemCard.css"
import { Link } from "react-router-dom"

const ItemCard= ({product}) => {
    return (
            <div className="itemContainer">
                <div className="container-productShowcase">
                    <h3>{product.name}</h3>
                    <Link to={"/detail/" + product.id}>
                        <img src={product.image} alt="" />
                    </Link>
                    <div className="productShowcase-StockContainer">
                        <p>{product.stock} disponibles</p>
                    </div>
                </div>
                <div className="container-buyProductInfo">
                    <div className="buyProductInfo-TextContainer">
                        <p>${product.price}</p>
                    </div>
                    <button>Agregar al carro</button>
                </div>
            </div>
    )
}


export default ItemCard