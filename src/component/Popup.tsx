import { PopupContent } from "../interfaces/Product"
import PopUpCss from "../css/Popup.module.css"





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

export default Popup;