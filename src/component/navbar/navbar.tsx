import { useState } from "react";
import iconList from '../../assets/list.png'
import navbarCss from '../../css/navbar.module.css'
import { Link } from "react-router-dom";
import usenavbarContext from "../hook/useNavbarstatus";
import { NavbarType } from "../../context/navBarContext";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {setNavbarStatus } = usenavbarContext() as NavbarType;

    const openNav = () => {
        setIsOpen(!isOpen);
        setNavbarStatus(isOpen)
    }



    return (
        <>
            <div className={navbarCss.container}>
                <div className={navbarCss.icon_container}>
                    <img className={navbarCss.icon} src={iconList} onClick={openNav} />
                </div>
                <div className={isOpen ? `${navbarCss.navbar_contianer}` : `${navbarCss.navbar_contianer_hidden}`}>
                    <div>
                        <Link to={"/"} ><p className={navbarCss.p}>Produckt</p></Link>
                        <Link to={"/WarenKorp"} ><p className={navbarCss.p}>WarenKorp</p></Link>
                        <Link to={"Profile"} ><p className={navbarCss.p}>Profile</p></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;