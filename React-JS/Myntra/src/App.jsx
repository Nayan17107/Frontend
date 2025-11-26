import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import AddProductForm from "./Components/AddProduct/AddProduct";
import ProductList from "./Components/Productlist/Productlist.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<ProductList gender="men" />} />
        <Route path="/women" element={<ProductList gender="women" />} />
        <Route path="/kids" element={<ProductList gender="kids" />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
