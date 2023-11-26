import { initialContext } from "../../context/productContext"
import { useContext } from 'react';


const useContextHook = (): any => {
    return useContext(initialContext)
}

export default useContextHook;