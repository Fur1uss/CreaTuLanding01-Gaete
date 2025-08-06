import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../db/db.js";

const useProduct = (productId) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true)

    const getProduct = async() => {
        try{
            const q = query(collection(db, "products"), where("id", "==", parseInt(productId)));
            const dataDb = await getDocs(q);

            if (!dataDb.empty) {
                const productDoc = dataDb.docs[0];
                const data = {id: productDoc.id, ...productDoc.data()};
                setProduct(data);
            } else {
                setProduct({});
            }
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(productId) {
            getProduct();
        }
    },[productId])

    return{product, loading};
}

export default useProduct