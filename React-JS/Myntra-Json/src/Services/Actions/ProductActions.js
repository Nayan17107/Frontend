export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

const API_URL = 'http://localhost:3000';

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
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const products = await response.json();
            console.log('Products fetched:', products); // Debug log
            dispatch(getAllProducts(products));
        } catch (error) {
            console.error('Error fetching products:', error);
            dispatch(errorMsg(error.message));
        }
    };
};

export const addProductAsync = (productData) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            console.log('Sending product data:', productData); // Debug log

            // Prepare product with numeric values
            const newProduct = {
                ...productData,
                // Ensure numeric fields are numbers
                price: Number(productData.price),
                mrp: Number(productData.mrp),
                quantity: Number(productData.quantity),
                discount: Number(productData.discount),
                // Don't send ID - let JSON server generate it
                id: undefined
            };

            const response = await fetch(`${API_URL}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct)
            });

            console.log('Response status:', response.status); // Debug log

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server error response:', errorText);
                throw new Error(`Failed to add product: ${response.status}`);
            }

            const addedProduct = await response.json();
            console.log('Product added successfully:', addedProduct); // Debug log
            dispatch(addProduct(addedProduct));

            return addedProduct; // Return the added product
        } catch (error) {
            console.error('Error adding product:', error);
            dispatch(errorMsg(error.message));
            throw error; // Re-throw to handle in component
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
            console.error('Error fetching product:', error);
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
            console.error('Error updating product:', error);
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
            console.error('Error deleting product:', error);
            dispatch(errorMsg(error.message));
        }
    };
};