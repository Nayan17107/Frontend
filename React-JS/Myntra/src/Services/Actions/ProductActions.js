export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

const API_URL = 'http://localhost:5000'; 

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
    return async (dispatch) => {
        dispatch(loading());
        try {
            const response = await fetch(`${API_URL}/products`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const products = await response.json();
            dispatch(getAllProducts(products));
        } catch (error) {
            dispatch(errorMsg(error.message));
        }
    };
};

export const addProductAsync = (productData) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const newProduct = {
                ...productData,
                id: generateUniqueId()
            };

            const response = await fetch(`${API_URL}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct)
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            const addedProduct = await response.json();
            dispatch(addProduct(addedProduct));
        } catch (error) {
            dispatch(errorMsg(error.message));
        }
    };
};

export const getProductAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const response = await fetch(`${API_URL}/products/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            const product = await response.json();
            dispatch(getProduct(product));
        } catch (error) {
            dispatch(errorMsg(error.message));
        }
    };
};

export const updateProductAsync = (id, productData) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const response = await fetch(`${API_URL}/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            const updatedProduct = await response.json();
            dispatch(updateProduct(updatedProduct));
        } catch (error) {
            dispatch(errorMsg(error.message));
        }
    };
};

export const deleteProductAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const response = await fetch(`${API_URL}/products/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }

            dispatch(deleteProduct(id));
        } catch (error) {
            dispatch(errorMsg(error.message));
        }
    };
};

const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};