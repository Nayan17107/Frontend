import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    ADD_PRODUCT,
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

        default:
            return state;
    }
};

export default productReducer;