import { createstore } from "redux";
import { productReducer } from "./Services/Reducer/ProductReducer";

export const store = createstore(
    productReducer,
);  