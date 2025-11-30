import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsync, deleteProductAsync } from "../Services/Actions/ProductActions";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./SingleProduct.css";

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedImage, setSelectedImage] = useState(0);

    const dispatch = useDispatch();
    const { product, isLoading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProductAsync(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (product && product.sizes && product.sizes.length > 0) {
            setSelectedSize(product.sizes[0]);
        }
    }, [product]);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size before adding to cart");
            return;
        }
        const cartItem = {
            ...product,
            selectedSize,
            quantity: 1
        };
        console.log("Added to cart:", cartItem);
        alert("Product added to cart successfully!");
    };

    const handleWishlist = () => {
        console.log("Added to wishlist:", product);
        alert("Product added to wishlist!");
    };

    const handleEditProduct = () => {
        navigate(`/edit-product/${id}`);
    };

    const handleDeleteProduct = () => {
        if (window.confirm("Are you sure you want to delete this product? This action cannot be undone.")) {
            dispatch(deleteProductAsync(product.id));
            alert("Product deleted successfully!");
            navigate("/products");
        }
    };

    if (isLoading) {
        return (
            <>
                <Header />
                <div className="loading">Loading...</div>
                <Footer />
            </>
        );
    }

    if (!product) {
        return (
            <>
                <Header />
                <div className="product-not-found">
                    <h2>❌ Product Not Found</h2>
                    <p>The product you're looking for doesn't exist or has been removed.</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />

            <div className="product-details-container">
                {/* Left Side - Images */}
                <div className="product-images">
                    {/* Main Image */}
                    {product.images && product.images.length > 0 ? (
                        <>
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="main-image"
                            />

                            {/* Thumbnails */}
                            <div className="image-thumbnails">
                                {product.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${product.name} ${index + 1}`}
                                        className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(index)}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="no-images">
                            <p>No images available</p>
                        </div>
                    )}
                </div>

                {/* Right Side - Product Details */}
                <div className="product-info">
                    {/* Brand and Name */}
                    <h2 className="product-brand">{product.brand}</h2>
                    <h4 className="product-name">{product.name}</h4>

                    {/* Category Info */}
                    <div className="category-info">
                        <span className="gender-badge">{product.gender?.charAt(0).toUpperCase() + product.gender?.slice(1)}</span>
                        <span className="subcategory-badge">{product.subcategory}</span>
                    </div>

                    {/* Price Section */}
                    <div className="price-section">
                        <span className="price">₹{product.price}</span>
                        <span className="mrp">₹{product.mrp}</span>
                        <span className="discount">{product.discount}% OFF</span>
                    </div>
                    <div className="tax-info">inclusive of all taxes</div>

                    {/* Product Description */}
                    <p className="product-description">{product.description}</p>

                    {/* Product Specifications */}
                    <div className="product-specs">
                        <h5 className="specs-title">Product Specifications</h5>
                        <div className="spec-item">
                            <span className="spec-label">Category</span>
                            <span className="spec-value">{product.gender} › {product.subcategory}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Brand</span>
                            <span className="spec-value">{product.brand}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Color</span>
                            <span className="spec-value">{product.color}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Available Quantity</span>
                            <span className="spec-value">{product.quantity} units</span>
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="sizes-box">
                        <h5 className="sizes-title">Select Size</h5>
                        <div className="sizes">
                            {product.sizes && product.sizes.map((size) => (
                                <div
                                    key={size}
                                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => handleSizeSelect(size)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Color Display */}
                    <div className="color-box">
                        <h5 className="color-title">Color</h5>
                        <span className="color-value">{product.color}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                            ADD TO CART
                        </button>
                        <button className="wishlist-btn" onClick={handleWishlist}>
                            ♡ WISHLIST
                        </button>
                    </div>

                    {/* Admin Actions */}
                    <div className="admin-actions">
                        <h5 className="admin-actions-title">Admin Actions</h5>
                        <div className="admin-buttons">
                            <button className="edit-product-btn" onClick={handleEditProduct}>
                                ✏️ Edit Product
                            </button>
                            <button className="delete-product-btn" onClick={handleDeleteProduct}>
                                🗑️ Delete Product
                            </button>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="additional-info">
                        <div className="info-item">
                            <span>✓ 100% Original Products</span>
                        </div>
                        <div className="info-item">
                            <span>✓ Free Delivery on order above ₹499</span>
                        </div>
                        <div className="info-item">
                            <span>✓ 30 Day Return Policy</span>
                        </div>
                        <div className="info-item">
                            <span>✓ Secure Payment</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}