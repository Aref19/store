import { useEffect, useState } from "react"




const useIsAboveMediaScreen = () => {

    const [sizeScreen, setSizeScreen] = useState<boolean>(false);


    useEffect(() => {

        const checkSize = () => {
            const size = window.innerWidth
            
            if (size < 700) {
                setSizeScreen(true)
            } else {
                setSizeScreen(false)
            }

        }
        window.addEventListener("resize", checkSize)
        //console.log(sizeScreen);
        return () => {
                
            window.removeEventListener('resize', checkSize);
        };

    }, [])

    return { sizeScreen }

}

export default useIsAboveMediaScreen;