import axios from "axios"
import { getUserFromLocalDb } from '../../../features/authentication/services/localstorage.infrastructure';

// TODO: use environment variables
const BASE_URL = 'https://localhost:7216/'

const handler = axios.create({
    baseURL: BASE_URL
})

handler.interceptors.request.use(config => {
    const user = getUserFromLocalDb()
    
    if (user && user.token) {
        config.headers['Authorization'] = `Bearer ${user.token}`
    }

    return config
})

export default handler