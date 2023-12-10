import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Product } from '../interfaces/Product'
import { instAxio } from "../api/mainApi"
import { combineReducers } from '@reduxjs/toolkit';


let state: Product[] = []



export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {

    const response = await instAxio.get("/products")

    return response.data;

})


export const producktSlice = createSlice({
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

export const cartSlice = createSlice({
    name: "products",
    initialState: state,
    reducers: {
        addToCard: (state, action) => {
            return [...state, { ...action.payload }]
        },
        deleteFromCard: (state, action) => {
            return [...state.filter((item) => item.id != (action.payload as Product).id)]
        }
    }

})
export const { addToCard, deleteFromCard } = cartSlice.actions


export const { add } = producktSlice.actions
export default producktSlice.reducer




