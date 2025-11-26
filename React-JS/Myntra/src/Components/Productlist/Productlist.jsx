// import { useState, useEffect } from "react";
// import { Row, Col, Card, Form, Button } from "react-bootstrap";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// const sizesList = ["S", "M", "L", "XL", "XXL"];
// const colorOptions = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Grey", "Pink", "Brown"];

// export default function ProductList({ gender }) {
//     const [products, setProducts] = useState([]);
//     const [filters, setFilters] = useState({ priceMin: "", priceMax: "", color: "", size: "" });
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     useEffect(() => {
//         const allProducts = JSON.parse(localStorage.getItem("products")) || [];
//         const genderProducts = allProducts.filter(p => p.gender === gender);
//         setProducts(genderProducts);
//         setFilteredProducts(genderProducts);
//     }, [gender]);

//     const handleFilterChange = (e) => {
//         setFilters({ ...filters, [e.target.name]: e.target.value });
//     };

//     const applyFilters = () => {
//         let result = [...products];

//         if (filters.priceMin) result = result.filter(p => Number(p.price) >= Number(filters.priceMin));
//         if (filters.priceMax) result = result.filter(p => Number(p.price) <= Number(filters.priceMax));
//         if (filters.color) result = result.filter(p => p.color === filters.color);
//         if (filters.size) result = result.filter(p => p.sizes.includes(filters.size));

//         setFilteredProducts(result);
//     };

//     const clearFilters = () => {
//         setFilters({ priceMin: "", priceMax: "", color: "", size: "" });
//         setFilteredProducts(products);
//     };

//     return (<>
//         <Header />
//         <div className="container py-4">
//             <h2 className="mb-4 text-capitalize">{gender} Products</h2>

//             {/* Filters */}
//             <Row className="mb-4 g-3">
//                 <Col md={2}><Form.Control type="number" placeholder="Min Price" name="priceMin" value={filters.priceMin} onChange={handleFilterChange} /></Col>
//                 <Col md={2}><Form.Control type="number" placeholder="Max Price" name="priceMax" value={filters.priceMax} onChange={handleFilterChange} /></Col>
//                 <Col md={2}><Form.Select name="color" value={filters.color} onChange={handleFilterChange}><option value="">Color</option>{colorOptions.map((c, i) => <option key={i} value={c}>{c}</option>)}</Form.Select></Col>
//                 <Col md={2}><Form.Select name="size" value={filters.size} onChange={handleFilterChange}><option value="">Size</option>{sizesList.map((s, i) => <option key={i} value={s}>{s}</option>)}</Form.Select></Col>
//                 <Col md={2}><Button onClick={applyFilters} variant="primary">Apply</Button></Col>
//                 <Col md={2}><Button onClick={clearFilters} variant="secondary">Clear</Button></Col>
//             </Row>

//             <Row className="g-4 product-list-container">
//                 {filteredProducts.length ? filteredProducts.map((p, i) => (
//                     <Col md={3} key={i}>
//                         <Card className="product-card">

//                             <Card.Img
//                                 src={p.images[0]}
//                                 className="product-img"
//                             />

//                             <Card.Body>

//                                 <div className="rating">⭐ {p.rating || "4.1"} | {p.ratingCount || "10k"}</div>

//                                 <div className="brand">{p.brand}</div>

//                                 <div className="desc">{p.name}</div>

//                                 <div className="price-box">
//                                     <span className="sp">₹{p.price}</span>
//                                     <span className="mrp">₹{p.originalPrice || p.price * 2}</span>
//                                     <span className="off">{p.discount}% OFF</span>
//                                 </div>

//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 )) : (
//                     <p>No products found!</p>
//                 )}
//             </Row>

//         </div>
//         <Footer />
//     </>
//     );
// }

import { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Productlist.css";

const sizesList = ["S", "M", "L", "XL", "XXL"];
const colorOptions = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Grey", "Pink", "Brown"];

export default function ProductList({ gender }) {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        priceMin: "",
        priceMax: "",
        color: "",
        size: "",
        brand: ""
    });
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const allProducts = JSON.parse(localStorage.getItem("products")) || [];
        const genderProducts = allProducts.filter(p => p.gender === gender);
        setProducts(genderProducts);
        setFilteredProducts(genderProducts);

        // Extract unique brands for filter
        const uniqueBrands = [...new Set(genderProducts.map(p => p.brand))];
        setBrands(uniqueBrands);
    }, [gender]);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        let result = [...products];

        if (filters.priceMin) result = result.filter(p => Number(p.price) >= Number(filters.priceMin));
        if (filters.priceMax) result = result.filter(p => Number(p.price) <= Number(filters.priceMax));
        if (filters.color) result = result.filter(p => p.color === filters.color);
        if (filters.size) result = result.filter(p => p.sizes.includes(filters.size));
        if (filters.brand) result = result.filter(p => p.brand === filters.brand);

        setFilteredProducts(result);
    };

    const clearFilters = () => {
        setFilters({ priceMin: "", priceMax: "", color: "", size: "", brand: "" });
        setFilteredProducts(products);
    };

    return (<>
        <Header />
        <div className="container-fluid py-4 myntra-layout">
            <Row>
                {/* Sidebar Filters */}
                <Col md={3} className="filter-sidebar">
                    <div className="filter-section">
                        <h5 className="filter-title">FILTERS</h5>

                        {/* Brand Filter */}
                        <div className="filter-group">
                            <h6 className="filter-group-title">BRANDS</h6>
                            <div className="brand-list">
                                {brands.map((brand, i) => (
                                    <div key={i} className="brand-item">
                                        <Form.Check
                                            type="checkbox"
                                            id={`brand-${i}`}
                                            label={brand}
                                            name="brand"
                                            value={brand}
                                            checked={filters.brand === brand}
                                            onChange={handleFilterChange}
                                        />
                                        <span className="brand-count">({products.filter(p => p.brand === brand).length})</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="filter-group">
                            <h6 className="filter-group-title">PRICE</h6>
                            <div className="price-inputs">
                                <Form.Control
                                    type="number"
                                    placeholder="Min"
                                    name="priceMin"
                                    value={filters.priceMin}
                                    onChange={handleFilterChange}
                                    className="price-input"
                                />
                                <span className="price-separator">-</span>
                                <Form.Control
                                    type="number"
                                    placeholder="Max"
                                    name="priceMax"
                                    value={filters.priceMax}
                                    onChange={handleFilterChange}
                                    className="price-input"
                                />
                            </div>
                        </div>

                        {/* Color Filter */}
                        <div className="filter-group">
                            <h6 className="filter-group-title">COLOR</h6>
                            <div className="color-options">
                                {colorOptions.map((color, i) => (
                                    <div
                                        key={i}
                                        className={`color-option ${filters.color === color ? 'selected' : ''}`}
                                        onClick={() => setFilters({ ...filters, color: filters.color === color ? '' : color })}
                                    >
                                        <div
                                            className="color-swatch"
                                            style={{ backgroundColor: color.toLowerCase() }}
                                        ></div>
                                        <span className="color-name">{color}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Size Filter */}
                        <div className="filter-group">
                            <h6 className="filter-group-title">SIZE</h6>
                            <div className="size-options">
                                {sizesList.map((size, i) => (
                                    <div
                                        key={i}
                                        className={`size-option ${filters.size === size ? 'selected' : ''}`}
                                        onClick={() => setFilters({ ...filters, size: filters.size === size ? '' : size })}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Filter Buttons */}
                        <div className="filter-buttons">
                            <Button onClick={applyFilters} className="apply-btn">APPLY</Button>
                            <Button onClick={clearFilters} className="clear-btn">CLEAR ALL</Button>
                        </div>
                    </div>
                </Col>

                {/* Product Grid */}
                <Col md={9}>
                    <div className="product-header">
                        <h2 className="page-title">{gender} Products</h2>
                        <div className="results-count">{filteredProducts.length} items</div>
                    </div>

                    <Row className="g-4 product-grid">
                        {filteredProducts.length ? filteredProducts.map((p, i) => (
                            <Col md={4} key={i}>
                                <Card className="product-card">
                                    <div className="product-image-container">
                                        <Card.Img
                                            src={p.images[0]}
                                            className="product-img"
                                        />
                                        <div className="wishlist-icon">♡</div>
                                    </div>

                                    <Card.Body className="product-info">
                                        <div className="brand">{p.brand}</div>
                                        <div className="product-name">{p.name}</div>

                                        <div className="price-container">
                                            <span className="current-price">₹{p.price}</span>
                                            <span className="original-price">₹{p.originalPrice || p.price * 2}</span>
                                            <span className="discount">{p.discount || Math.round((1 - p.price / (p.originalPrice || p.price * 2)) * 100)}% OFF</span>
                                        </div>

                                        <div className="rating-container">
                                            <div className="rating">⭐ {p.rating || "4.1"}</div>
                                            <div className="rating-count">({p.ratingCount || "10k"})</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )) : (
                            <div className="no-products">
                                <p>No products found!</p>
                            </div>
                        )}
                    </Row>
                </Col>
            </Row>
        </div>
        <Footer />
    </>
    );
}