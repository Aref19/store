import { PopupContent } from "../interfaces/Product"
import PopUpCss from "../css/Popup.module.css"
import { memo } from "react"





const Popup = ({ text, show }: PopupContent) => {
    
    if (!show) return null
    

    return (
        <>
            <div className={PopUpCss.container}>
                <h1 className={PopUpCss.p}>{text}</h1>
            </div>
        </>
    )
}

export default memo(Popup);