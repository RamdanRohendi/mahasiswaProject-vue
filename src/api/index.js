import axios from "axios";

const Api = axios.create({
    baseURL: 'https://mahasiswaapi-laravelapp.test'
})

export default Api
