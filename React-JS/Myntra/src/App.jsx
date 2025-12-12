import "./App.css";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuthState, loadInitialUser } from './Services/Actions/UserAuthActions.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Pages/Login.jsx";
import Register from "./Components/Pages/Register.jsx";
import AddProductForm from "./Components/AddProduct/AddProduct";
import ProductList from "./Components/Productlist/Productlist.jsx";
import ProductDetails from "./Components/SingleProduct.jsx";
import EditProductForm from "./Components/EditProduct/EditProduct.jsx";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadInitialUser());
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/men" element={<ProductList gender="men" />} />
        <Route path="/women" element={<ProductList gender="women" />} />
        <Route path="/kids" element={<ProductList gender="kids" />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/edit-product/:id" element={<EditProductForm />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
