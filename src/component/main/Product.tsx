import useFetchProduct from "../hook/useFetchProduct";
import Card from "../card/card";
import { Product } from "../../interfaces/Product";
import productCss from "../../css/product.module.css"
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import Loading from "../loading";
import useContextHook from "../hook/useProductContext";
import { ProductType } from "../../context/productContext";
import usenavbarContext from "../hook/useNavbarstatus";
import { NavbarType } from "../../context/navBarContext";
import Popup from "../Popup";




const Productf = () => {
    const [product, loading] = useFetchProduct();
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const { savedproduct, setporduct } = useContextHook() as ProductType;
    const { navbarActiveStatus } = usenavbarContext() as NavbarType;
    const [navbarstatus, setNavbarStatus] = useState(false)
    const [showPopup, setShowpopup] = useState(false)



    useMemo(() => {
        setTimeout(() => {
            setShowpopup(false)
        }, 2000)
    }, [showPopup])

    useEffect(() => {

        setFilteredProducts(product as Product[]);
    }, [product]);

    useEffect(() => {
        setNavbarStatus(navbarActiveStatus as boolean)
    }, [navbarActiveStatus])

    const searchItemProduct = (input: string) => {


        const newFilteredProducts = (product as Product[]).filter((item) => {
            return item.title.toLowerCase().includes(input.toLowerCase());
        });


        setFilteredProducts(newFilteredProducts);
    }

    const addProductTOCorb = (item: Product) => {
        setporduct([...savedproduct, { id: item.id, images: item.images, descrption: item.descrption, title: item.title }])
    }


    return (
        <>

            <div className={productCss.input_container}>
                <input className={productCss.input}
                    placeholder="Search"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        searchItemProduct(e.target.value)
                    }

                />
            </div>
            {loading ?

                <div className={navbarstatus ? `${productCss.container}` : `${productCss.containernavBar}`}>
                    <div className={productCss.main_content}>

                        {
                            filteredProducts.map((item) => {
                                console.log(item);

                                return (
                                    <>
                                        <div className={productCss.card}>
                                            <Card id={item.id} images={item.images} title={item.title} buttonTitle="Add" addProduct={() => {
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