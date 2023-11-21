import { initialNavbarContext } from "../../context/navBarContext"
import { useContext } from 'react';


const usenavbarContext = (): any => {
    return useContext(initialNavbarContext)
}

export default usenavbarContext;