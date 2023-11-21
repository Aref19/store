import cardCss from "../../css/card.module.css"

interface cardProduct {
    id: number
    images: string[],
    title: string,
    addProduct: () => void,
    buttonTitle: string
}





const Card = ({ images, title, addProduct, buttonTitle }: cardProduct) => {

    const cardStyle = {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    };

    return (
        <>
            <div style={cardStyle}>
                <img className={cardCss.img} src={images[0]} />
                <h1 className={cardCss.p}>{title}</h1>
                <button className={cardCss.button} onClick={addProduct}>{buttonTitle}</button>
            </div>
        </>
    )
}

export default Card;