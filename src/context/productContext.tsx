import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Product } from "../interfaces/Product";





const instialProduct: Product[] = []

export type ProductType = {
    setporduct: Dispatch<SetStateAction<Product[]>>
    savedproduct: Product[]

}

export const initialContext = createContext<ProductType | null>(null)




export const ProductProvider = ({ children }: { children: JSX.Element }) => {
    const [product, setProduct] = useState<Product[]>(instialProduct);

    return (
        <initialContext.Provider value={{ savedproduct: product, setporduct: setProduct }}>
            {children}
        </initialContext.Provider>
    )


}
