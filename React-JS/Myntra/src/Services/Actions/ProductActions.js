export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
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

export const updateProduct = (product) => ({
    type: UPDATE_PRODUCT,
    payload: product
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
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

export const updateProductAsync = (id, productData) => {
    return (dispatch) => {
        dispatch(loading());
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const productIndex = products.findIndex(p => p.id === id);

        if (productIndex !== -1) {
            const updatedProduct = {
                ...products[productIndex],
                ...productData,
                id: id 
            };
            products[productIndex] = updatedProduct;
            localStorage.setItem('products', JSON.stringify(products));
            dispatch(updateProduct(updatedProduct));
        }
    };
};

export const deleteProductAsync = (id) => {
    return (dispatch) => {
        dispatch(loading());
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const filteredProducts = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(filteredProducts));
        dispatch(deleteProduct(id));
    };
};

const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
};