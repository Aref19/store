import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Product } from '../interfaces/Product'
import { instAxio } from "../api/mainApi"



let state: Product[] = []



export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {

    const response = await instAxio.get("/products")

    return response.data;

})


export const counterSlice = createSlice({
    name: "products",
    initialState: state,
    reducers: {
        add: (state, action) => {
            return [...state, { ...action.payload }]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return [...action.payload]

        })
    }
})

export const { add } = counterSlice.actions
export default counterSlice.reducer