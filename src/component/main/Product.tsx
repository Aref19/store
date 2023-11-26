import useFetchProduct from "../hooks/useFetchProduct";
import Card from "../card/card";
import { Product } from "../../interfaces/Product";
import productCss from "../../css/product.module.css"
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import Loading from "../loading";
import useContextHook from "../hooks/useProductContext";
import { ProductType } from "../../context/productContext";
import Popup from "../Popup";




const Productf = () => {
    const [product, loading] = useFetchProduct();
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const { savedproduct, setporduct } = useContextHook() as ProductType;
    const [showPopup, setShowpopup] = useState(false)


    let i = 0;
    useMemo(() => {
        setTimeout(() => {
            setShowpopup(false)
        }, 2000)
    }, [showPopup])

    useEffect(() => {

        setFilteredProducts(product as Product[]);
        console.log(product);

    }, [product]);



    const searchItemProduct = (input: string) => {


        const newFilteredProducts = (product as Product[]).filter((item) => {


            return item.title.toLowerCase().includes(input.toLowerCase());


        });

        if (newFilteredProducts.length > 0) {
            setFilteredProducts(newFilteredProducts);
        } else {
            setFilteredProducts(filteredProducts);
        }

    }

    const addProductTOCorb = (item: Product) => {
        setporduct([...savedproduct, { id: item.id, image: item.image, descrption: item.descrption, title: item.title, price: item.price }])
    }


    return (
        <>

            <div className={productCss.input_sort_container}>
                <div className={productCss.input_container}>
                    <input className={productCss.input}
                        placeholder="Search"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            searchItemProduct(e.target.value)
                        }

                    />
                </div>
                <div className={productCss.sort_container}>
                    <h1>das</h1>
                </div>
            </div>
            {loading ?

                <div className={productCss.container}>

                    <div className={productCss.main_content}>

                        {
                            filteredProducts.map((item) => {
                                console.log(item);
                                console.log("nummber " + i++);

                                return (
                                    <>
                                        <div className={productCss.card}>
                                            <Card id={item.id} images={item.image} title={item.title} buttonTitle="Add" price={item.price} addProduct={() => {
                                                addProductTOCorb(item)
                                                setShowpopup(true)

                                            }} />
                                        </div>
                                    </>
                                )
                            })

                        }
                    </div>
                    <Popup text="Success Added" show={showPopup} />
                </div>



                : <Loading />
            }
        </>
    )




}

export default Productf;