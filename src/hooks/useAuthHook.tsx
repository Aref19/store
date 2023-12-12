import { useContext } from "react";
import { Auth, intialAuthContext } from "../context/AuthContext"


const useAuth = () => {
    return useContext(intialAuthContext) as Auth
}

export default useAuth;