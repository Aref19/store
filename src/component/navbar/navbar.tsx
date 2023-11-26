
import empty_shoping_card from "../../assets/shopping-cart-empty.png"
import navCss from "../../css/navbar.module.css"
import womenImage from "../../assets/online-shopping.png"
import { useEffect, useState } from "react"
import useContextHook from "../hooks/useProductContext"
import { ProductType } from "../../context/productContext"
import shoping_cart from "../../assets/shopping-cart.png"
import { Link } from "react-router-dom";
import useIsAboveMediaScreen from "../hooks/useIsAboveMediaScreen"


const Navbar = () => {
    const [card, setInCard] = useState<boolean>(false);
    const { savedproduct, setporduct } = useContextHook() as ProductType;
    const { sizeScreen } = useIsAboveMediaScreen()
    console.log(sizeScreen);
    
    useEffect(() => {
        if (savedproduct.length > 0) {
            setInCard(true)
        } else {
            setInCard(false)
        }
    }, [savedproduct])


    return (
        <>
            { sizeScreen  ?
                <nav className={navCss.container}>
                    <div className={navCss.container_menu_title}>
                        <div className={navCss.container_title}>
                            <h1 className={navCss.h1}>Eshop</h1>
                        </div>
                        <div className={navCss.container_menu}>
                            <div >
                                <ul className={navCss.ul}>
                                    <li>
                                        <Link to={"/"} style={{ textDecoration: "none" }} ><h1 className={navCss.h1}>Home</h1></Link>
                                    </li>
                                    <li>
                                        <Link to={"/WarenKorp"} style={{ textDecoration: "none" }}><img className={navCss.img} src={card ? shoping_cart : empty_shoping_card} /></Link>
                                    </li>
                                    <li>
                                        <Link to={"Profile"} style={{ textDecoration: "none" }}><h1 className={navCss.h1}>About</h1></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={navCss.image_text_container}>
                        <div className={navCss.container_text}>
                            <h1>Shoping</h1>
                            <p>hier is your beauty</p>
                        </div>
                        <div className={navCss.conatiner_image} >
                            <img className={navCss.image} src={womenImage} />
                        </div>

                    </div>
                </nav>
                :
                <>
                <h1>das</h1>
                </>
            }
        </>
    )
}

export default Navbar;