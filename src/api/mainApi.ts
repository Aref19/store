import axios from "axios"

const PRODUCTS_API = "https://fakestoreapi.com/"


export const instAxio= axios.create({baseURL:PRODUCTS_API});