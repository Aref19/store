import { Dispatch, SetStateAction, useState } from "react";
import iconList from '../../assets/list.png'
import navbarCss from '../../css/sidebar.module.css'
import { Link } from "react-router-dom";


type Navbar = {
    setIsOpen: () => void;
    isOpen: boolean
}

const SideBar = ({ isOpen, setIsOpen }: Navbar) => {

    return (
        <>
            <div className={navbarCss.container}>
                <div className={navbarCss.icon_container}>
                    <img className={navbarCss.icon} src={iconList} onClick={setIsOpen} />
                </div>
                <div className={isOpen ? `${navbarCss.navbar_contianer}` : `${navbarCss.navbar_contianer_hidden}`}>
                    
                    <div>
                        <Link to={"/"} style={{ textDecoration: "none" }}><p className={navbarCss.p}>Produckt</p></Link>
                        <Link to={"/WarenKorp"} style={{ textDecoration: "none" }}><p className={navbarCss.p}>WarenKorp</p></Link>
                        <Link to={"Profile"} style={{ textDecoration: "none" }}><p className={navbarCss.p}>Profile</p></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideBar;