import loadingCss from "../css/loading.module.css"






const loading = () => {

    return (
        <div className={loadingCss.container}>
            <h1 className={loadingCss.p1}>.</h1>
            <h1 className={loadingCss.p2}>.</h1>
            <h1 className={loadingCss.p3}>.</h1>
        </div>
    )
}

export default loading;