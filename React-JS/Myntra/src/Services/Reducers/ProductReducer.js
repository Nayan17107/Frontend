import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    LOADING,
    ERROR
} from '../Actions/ProductActions';

const initialState = {
    products: [],
    product: null,
    isLoading: false,
    errorMsg: ""
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: true
            };

        case ERROR:
            return {
                ...state,
                errorMsg: action.payload,
                isLoading: false
            };

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                errorMsg: ""
            };

        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                isLoading: false,
                errorMsg: ""
            };

        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                isLoading: false,
                errorMsg: ""
            };

        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                ),
                product: action.payload,
                isLoading: false,
                errorMsg: ""
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
                product: null,
                isLoading: false,
                errorMsg: ""
            };

        default:
            return state;
    }
};

export default productReducer;