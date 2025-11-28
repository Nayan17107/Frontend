export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const getAllProducts = (products) => ({
    type: GET_ALL_PRODUCTS,
    payload: products
});

export const getProduct = (product) => ({
    type: GET_PRODUCT,
    payload: product
});

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
});

export const loading = () => ({
    type: LOADING
});

export const errorMsg = (msg) => ({
    type: ERROR,
    payload: msg
});

export const getAllProductsAsync = () => {
    return (dispatch) => {
        dispatch(loading());
        const products = JSON.parse(localStorage.getItem('products')) || [];
        dispatch(getAllProducts(products));
    };
};

export const addProductAsync = (productData) => {
    return (dispatch) => {
        dispatch(loading());
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const newProduct = {
            ...productData,
            id: generateUniqueId()
        };
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        dispatch(addProduct(newProduct));
    };
};

export const getProductAsync = (id) => {
    return (dispatch) => {
        dispatch(loading());
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const product = products.find(p => p.id === id);
        dispatch(getProduct(product));
    };
};

const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
};