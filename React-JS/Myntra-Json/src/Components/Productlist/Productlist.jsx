import { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAsync } from "../../Services/Actions/ProductActions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Productlist.css";
import { useNavigate } from "react-router-dom";

const sizesList = ["S", "M", "L", "XL", "XXL"];
const colorOptions = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Grey", "Pink", "Brown"];

export default function ProductList({ gender }) {
    const [filters, setFilters] = useState({
        priceMin: "",
        priceMax: "",
        color: "",
        size: "",
        brand: ""
    });
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [brands, setBrands] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products, isLoading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getAllProductsAsync());
    }, [dispatch]);

    useEffect(() => {
        const genderProducts = products.filter(p => p.gender === gender);
        setFilteredProducts(genderProducts);

        const uniqueBrands = [...new Set(genderProducts.map(p => p.brand))];
        setBrands(uniqueBrands);
    }, [products, gender]);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        let result = products.filter(p => p.gender === gender);

        if (filters.priceMin) result = result.filter(p => Number(p.price) >= Number(filters.priceMin));
        if (filters.priceMax) result = result.filter(p => Number(p.price) <= Number(filters.priceMax));
        if (filters.color) result = result.filter(p => p.color === filters.color);
        if (filters.size) result = result.filter(p => p.sizes.includes(filters.size));
        if (filters.brand) result = result.filter(p => p.brand === filters.brand);

        setFilteredProducts(result);
    };

    const clearFilters = () => {
        setFilters({ priceMin: "", priceMax: "", color: "", size: "", brand: "" });
        setFilteredProducts(products.filter(p => p.gender === gender));
    };


    return (
        <>
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
                            {filteredProducts.length ? filteredProducts.map((p) => (
                                <Col md={4} key={p.id}>
                                    <Card
                                        className="product-card"
                                        onClick={() => {
                                            if (!p.id) {
                                                console.error("❌ Product has no ID:", p);
                                                alert("This product has no ID. Re-add it using Add Product Form.");
                                                return;
                                            }
                                            navigate(`/product/${p.id}`);
                                        }}
                                        style={{ cursor: "pointer" }}
                                    >
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