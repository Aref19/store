import { Dispatch, SetStateAction, createContext, useState } from "react";



export type Auth = {
    token: string,
    setAuth: Dispatch<SetStateAction<string>>
}

export const intialAuthContext = createContext<Auth | null>(null)


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [token, setAuth] = useState<string>("")
    return (
        <intialAuthContext.Provider value={{ token: token, setAuth: setAuth }}>
            {children}
        </intialAuthContext.Provider>
    )
}