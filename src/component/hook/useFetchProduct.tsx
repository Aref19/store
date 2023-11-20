import { useEffect, useState } from "react";
import { instAxio } from "../../api/mainApi";







const useFetchProduct = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchProduct = async () => {

            try {
                const response = await instAxio.get("/products");
                const data = response.data;
                console.log(response.data);
                
                setProduct(data);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchProduct()

    }, [])

    return [product, loading]

}

export default useFetchProduct;