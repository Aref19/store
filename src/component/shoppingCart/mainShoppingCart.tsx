import { ProductType } from "../../context/productContext";
import Card from "../card/card"
import useContextHook from "../hooks/useProductContext";
import productCss from "../../css/product.module.css"
import { useMemo, useState } from "react";
import Popup from "../Popup";




const MainShoppingCar = () => {
    const { savedproduct, setporduct } = useContextHook() as ProductType;
    const [navbarstatus] = useState(false)
    const [showPopup, setShowpopup] = useState(false)

    useMemo(() => {
        setTimeout(() => {
            setShowpopup(false)
        }, 2000)
    }, [showPopup])


    return (
        <div className={navbarstatus ? `${productCss.container}` : `${productCss.containernavBar}`}>

            <div className={productCss.main_content}>

                {
                    savedproduct.map((item) => {
                        console.log(item);

                        return (
                            <>
                                <Popup text="Removed" show={showPopup} />
                                <div className={productCss.card}>
                                    <Card id={item.id} images={item.image} title={item.title} buttonTitle="Remove" price={item.price} addProduct={() => {
                                        setporduct([...savedproduct.filter((ite) => { return ite.id !== item.id })])
                                        setShowpopup(true)
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