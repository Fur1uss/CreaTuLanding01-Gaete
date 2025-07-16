import "./itemDetail.css"

const ItemDetail = ({product = {}}) => {
    return(
        <div className="infoProductContainer">
            <div className="infoImageContainer">
                <img src={product.image} alt="" />
                <h4>{product.name}</h4>
            </div>
            <div className="purchaseOptionContainer">  
                <div>
                    <p className="description">{product.description}</p>
                    <p className="price">${product.price}</p>
                </div>

                <div>
                    <button className="shopButton">Agregar al carrito</button>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail