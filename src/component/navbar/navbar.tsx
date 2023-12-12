
import empty_shoping_card from "../../assets/shopping-cart-empty.png"
import navCss from "../../css/navbar.module.css"
import womenImage from "../../assets/online-shopping.png"
import { useEffect, useState, memo, useMemo } from "react"
import useContextHook from "../../hooks/useProductContext"
import { ProductType } from "../../context/productContext"
import shoping_cart from "../../assets/shopping-cart.png"
import { Link } from "react-router-dom";
import useIsAboveMediaScreen from "../../hooks/useIsAboveMediaScreen"
import iconList from '../../assets/list.png'
import navbarCss from '../../css/sidebar.module.css'

const Navbar = () => {
    const [card, setInCard] = useState<boolean>(false);
    const { savedproduct } = useContextHook() as ProductType;
    const { sizeScreen } = useIsAboveMediaScreen()
    const [openNavbar, setIsOpen] = useState(false);
    console.log("render Navbar");

    useEffect(() => {
        if (savedproduct.length > 0) {
            if (card == false) {
                setInCard(true)
            }
        } else {
            if (card == true) {
                setInCard(false)
            }

        }
    }, [savedproduct])



    return (
        <>
            {sizeScreen ?
                <>
                    <div className={navCss.container_nav_mobile}>
                        <img className={navbarCss.icon} src={iconList} onClick={() => setIsOpen(!openNavbar)} />
                        <div className={navCss.container_ul_mobile}>
                            <div className={openNavbar ? navCss.container_navbar_mobile : navCss.container_navbar_mobile_open}>
                                <ul className={navCss.ul_mobile}>
                                    <li>
                                        <Link to={"/"} style={{ textDecoration: "none" }} ><h1 className={navCss.h1}>Home</h1></Link>
                                    </li>
                                    <li>
                                        <Link to={"/WarenKorp"} style={{ textDecoration: "none" }}><img className={navCss.img} src={card ? shoping_cart : empty_shoping_card} /></Link>
                                    </li>
                                    <li>
                                        <Link to={"Favority"} style={{ textDecoration: "none" }}><h1 className={navCss.h1}>Favority</h1></Link>
                                    </li>
                                    <li>
                                        <Link to={"LogIn"} style={{ textDecoration: "none" }}><h1 className={navCss.h1}>LogIn</h1></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
                :
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
                                        <Link to={"Favority"} style={{ textDecoration: "none" }}><h1 className={navCss.h1}>Favority</h1></Link>
                                    </li>
                                    <li>
                                        <Link to={"LogIn"} style={{ textDecoration: "none" }}><h1 className={navCss.h1}>LogIn</h1></Link>
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
            }
        </>
    )
}

export default memo(Navbar);