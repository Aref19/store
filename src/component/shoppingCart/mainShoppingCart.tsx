import { ProductType } from "../../context/productContext";
import Card from "../card/card"
import useContextHook from "../../hooks/useProductContext";
import productCss from "../../css/product.module.css"
import { useEffect, useMemo, useState } from "react";
import Popup from "../Popup";




const MainShoppingCar = () => {
    const { savedproduct, setporduct } = useContextHook() as ProductType;
    const [navbarstatus] = useState(false)
    const [showPopup, setShowpopup] = useState(false)


    useEffect(() => {
        const removeDialog = setTimeout(() => {
            setShowpopup(false)
        }, 2000);

        return () => {
            clearTimeout(removeDialog)
        }
    }, [showPopup]);

    return (
        <div className={navbarstatus ? `${productCss.container}` : `${productCss.containernavBar}`}>

            <div className={productCss.main_content}>
                <Popup text="Removed" show={showPopup} />
                {
                    savedproduct.map((item) => {
                        return (
                            <>

                                <div className={productCss.card}>
                                    <Card id={item.id} images={item.image} title={item.title} buttonTitle="Remove" price={item.price} addProduct={() => {
                                        setShowpopup(true);
                                        setporduct([...savedproduct.filter((ite) => { return ite.id !== item.id })]);
                                    }} />

                                </div>

                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainShoppingCar;