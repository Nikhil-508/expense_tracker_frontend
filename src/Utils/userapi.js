const { default: axiosInstance } = require("./axios.js");

const login = (values) => {
    return axiosInstance.post('/login' , values)
}

const register = (values) => {
    return axiosInstance.post('/register' , values)
}

const userAuth = () => {
    return axiosInstance.get('/is-user-auth')
}

const addCategory = (values) => {
    return axiosInstance.post('/add-category', values);
}

const getAllCategories = () => {
    return axiosInstance.get('/get-all-categories')
}

const addIncome = (values) => {
    return axiosInstance.post('/add-income', values);
}

const getGraphData = () => {
    return axiosInstance.get('/get-graph-data')
}


export {login , register , userAuth , addCategory, getAllCategories, addIncome,  getGraphData}