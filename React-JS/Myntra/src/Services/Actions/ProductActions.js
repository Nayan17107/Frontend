export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore";
import { db } from "../../../Config/firebase.config";

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

export const loading = () => ({ type: LOADING });

export const errorMsg = (msg) => ({
    type: ERROR,
    payload: msg
});


export const getAllProductsAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const querySnapshot = await getDocs(collection(db, "products"));

            let products = [];
            querySnapshot.forEach((docSnap) => {
                products.push({ id: docSnap.id, ...docSnap.data() });
            });

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
            const docRef = await addDoc(collection(db, "products"), productData);

            const newProduct = { id: docRef.id, ...productData };

            dispatch(addProduct(newProduct));
        } catch (error) {
            dispatch(errorMsg(error.message));
        }
    };
};

export const getProductAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) throw new Error("Product not found");

            dispatch(getProduct({ id, ...docSnap.data() }));
        } catch (error) {
            dispatch(errorMsg(error.message));
        }
    };
};

export const updateProductAsync = (id, productData) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) throw new Error("Product not found");

            const currentData = docSnap.data();

            const updatedData = {
                ...currentData,      
                ...productData,      
                updatedAt: new Date().toISOString()
            };

            console.log("🔥 UPDATING FIREBASE WITH:", updatedData);
            console.log("📸 IMAGES TO SAVE:", updatedData.images);

            await updateDoc(docRef, updatedData);
            dispatch(updateProduct({ id, ...updatedData }));

            console.log("✅ Update successful!");

        } catch (error) {
            console.error("❌ Update failed:", error);
            dispatch(errorMsg(error.message));
        }
    };
};

export const deleteProductAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const docRef = doc(db, "products", id);
            await deleteDoc(docRef);

            dispatch(deleteProduct(id));
        } catch (error) {
            dispatch(errorMsg(error.message));
        }
    };
};