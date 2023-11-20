import axios from "axios"

const PRODUCTS_API = "https://api.escuelajs.co/api/v1"


export const instAxio= axios.create({baseURL:PRODUCTS_API});