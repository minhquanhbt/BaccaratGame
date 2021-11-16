import axios from './axios'
export const getResult = () => axios.get("/play")
export const getPredict = () => axios.get("/predict")