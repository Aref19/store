import { Dispatch, Reducer, ReducerWithoutAction, SetStateAction, createContext, useReducer, useState } from "react";
import { Product } from "../interfaces/Product";

export const SORT_BY_PRICE = "sort_by_price";
export const SORT_BY_NAME = "sort_by_name"

interface Action {
    type: string,
    payload: Product[]
}


function reducer(state: Product[], action: Action) {
    state = [...action.payload]
    switch (action.type) {
        case SORT_BY_PRICE:

            return state.sort((a, b) => {
                return (Number(a.price) - Number(b.price));
            })
        case SORT_BY_NAME:
            return state.sort((a, b) => {
                return a.title.localeCompare(b.title);
            })


    }


}


const instialProduct: Product[] = []

export type ProductType = {
    setporduct: Dispatch<SetStateAction<Product[]>>
    savedproduct: Product[],
    dispatch: Dispatch<Action>,
    initializer: Product[]

}

export const initialContext = createContext<ProductType | null>(null)




export const ProductProvider = ({ children }: { children: JSX.Element }) => {
    const [product, setProduct] = useState<Product[]>(instialProduct);
    const [state, dispatch] = useReducer<Reducer<any, Action>>(reducer, instialProduct);
    return (
        <initialContext.Provider value={{ savedproduct: product, setporduct: setProduct, dispatch, initializer: state }}>
            {children}
        </initialContext.Provider>
    )


}
