import { useState } from "react"
import "./hocFilterProducts.css"
import useProducts from "../hooks/useProducts"

const hocFilterProducts = (Component) => {

    return function(){
        const [query, setQuery] = useState("");
        const {products, loading} = useProducts();

        const changeInput = (event) =>{            
            setQuery(event.target.value.toLowerCase());   
        };

        const search = (productsList) => {
            const filterProducts = productsList.filter((product) => {
                return product.name.toLowerCase().includes(query);
            });

            return filterProducts;
        }

        return(
            <>
                <div className="searchingProductsContainer">
                    <div className="searchBarContainer">
                        <input type="text" placeholder="Buscar producto.." onChange={changeInput}/>
                    </div>
                    <div className="itemsGridItemsContainer">
                        <Component products = {search(products)} />
                    </div>

                </div>

            </>
        )
    }
}

export default hocFilterProducts;