import axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

export const instance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1'
})

export const api = setupCache(instance)
