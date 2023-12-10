
import cardCss from "../../css/card.module.css"



interface cardProduct {
    id: number
    images: string,
    title: string,
    addProduct: () => void,
    buttonTitle: string,
    price: string
}





const Card = ({ images, title, price, addProduct, buttonTitle }: cardProduct) => {








    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img className={cardCss.img} src={images} />
                <h1 className={cardCss.p}>{title}</h1>
                <p >{price}$</p>
                <button className={cardCss.button} onClick={addProduct}>{buttonTitle}</button>
            </div>
        </>
    )
}

export default Card;