import ItemCard from "../itemCard/itemCard"
import hocFilterProducts from "../../HOC/hocFilterProducts"


const ItemList = ({products = []}) => {

    return(
        <> 
            {products.map((product) => (<ItemCard product = {product} key={product.id} />))}
        </>
    )
}

const ItemListWithSearch = hocFilterProducts(ItemList);

export {ItemList, ItemListWithSearch};

//export default ItemList