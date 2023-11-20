import { ProductType } from "../../context/productContext";
import Card from "../card/card"
import useContextHook from "../hook/useProductContext";

import productCss from "../../css/product.module.css"
import usenavbarContext from "../hook/useNavbarstatus";
import { NavbarType } from "../../context/navBarContext";
import { useState } from "react";
import Popup from "../Popup";




const MainShoppingCar = () => {
    const { savedproduct, setporduct } = useContextHook() as ProductType;
    const { navbarActiveStatus } = usenavbarContext() as NavbarType;
    const [navbarstatus, setNavbarStatus] = useState(false)
    const [showPopup, setShowPopup] = useState(false)


    return (
        <div className={navbarstatus ? `${productCss.container}` : `${productCss.containernavBar}`}>

            <div className={productCss.main_content}>

                {


                    savedproduct.map((item) => {
                        console.log(item);

                        return (
                            <>
                                <div className={productCss.card}>
                                    <Card id={item.id} images={item.images} title={item.title} buttonTitle="Remove" addProduct={() => {
                                        setporduct([...savedproduct.filter((ite) => { return ite.id !== item.id })])
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