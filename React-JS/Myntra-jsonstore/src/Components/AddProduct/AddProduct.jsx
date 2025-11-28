import { useState } from "react";
import { Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./AddProduct.css";
import generateUniqueId from "generate-unique-id";

const subcategories = {
    men: ["T-Shirts", "Shirts", "Jeans", "Jackets", "Sweatshirts", "Track Pants", "Shorts"],
    women: ["Tops", "Dresses", "Sarees", "Kurtas", "Jeans", "Skirts", "Jumpsuits"],
    kids: ["Boys T-Shirts", "Girls Dresses", "Shorts", "Jeans", "Sweatshirts", "Girls Tops", "Boys Jeans"]
};

const sizesList = ["S", "M", "L", "XL", "XXL"];
const colorOptions = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Grey", "Pink", "Brown"];

export default function AddProductForm() {
    const [product, setProduct] = useState({
        name: "",
        brand: "",
        gender: "",
        subcategory: "",
        price: "",
        mrp: "",
        discount: 0,
        description: "",
        sizes: [],
        color: "",
        quantity: "",
        images: []
    });

    const [imgInput, setImgInput] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
        if (e.target.name === "mrp" || e.target.name === "price") {
            const mrp = e.target.name === "mrp" ? e.target.value : product.mrp;
            const price = e.target.name === "price" ? e.target.value : product.price;
            if (mrp && price) {
                const discount = Math.round(((mrp - price) / mrp) * 100);
                setProduct((prev) => ({ ...prev, discount }));
            }
        }
    };

    const handleSizeSelect = (size) => {
        setProduct((prev) => ({
            ...prev,
            sizes: prev.sizes.includes(size) ? prev.sizes.filter((s) => s !== size) : [...prev.sizes, size]
        }));
    };

    const addImage = () => {
        if (imgInput.trim() !== "") {
            setProduct((prev) => ({ ...prev, images: [...prev.images, imgInput] }));
            setImgInput("");
        }
    };

    const removeImage = (idx) => {
        setProduct((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== idx) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const products = JSON.parse(localStorage.getItem("products")) || [];

        const newProduct = {
            ...product,
            id: generateUniqueId({
                length: 8,
                useLetters: true,
                useNumbers: true
            })
        };

        products.push(newProduct);

        localStorage.setItem("products", JSON.stringify(products));

        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
            if (newProduct.gender) navigate(`/${newProduct.gender}`);
        }, 2000);
    };


    return (
        <>
            <Header />
            <div className="add-product-container">
                {showAlert && (
                    <Alert variant="success" className="success-alert">
                        ✅ Product Added Successfully! Redirecting...
                    </Alert>
                )}

                <Card className="add-product-card">
                    <Card.Header className="card-header">
                        <h2 className="form-title">Add New Product</h2>
                        <p className="form-subtitle">Fill in the details below to add a new product to your store</p>
                    </Card.Header>

                    <Card.Body className="card-body">
                        <Form onSubmit={handleSubmit}>
                            {/* Basic Information Section */}
                            <div className="form-section">
                                <h4 className="section-title">Basic Information</h4>
                                <Row className="mb-4">
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="form-label">Product Name *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={product.name}
                                                onChange={handleChange}
                                                placeholder="Enter product name"
                                                className="form-input"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="form-label">Brand *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="brand"
                                                value={product.brand}
                                                onChange={handleChange}
                                                placeholder="Enter brand name"
                                                className="form-input"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="form-label">Category *</Form.Label>
                                            <div className="gender-selector">
                                                {["men", "women", "kids"].map((cat) => (
                                                    <div
                                                        key={cat}
                                                        className={`gender-option ${product.gender === cat ? 'selected' : ''}`}
                                                        onClick={() => setProduct({ ...product, gender: cat })}
                                                    >
                                                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                                    </div>
                                                ))}
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="form-label">Subcategory *</Form.Label>
                                            <Form.Select
                                                name="subcategory"
                                                value={product.subcategory}
                                                onChange={handleChange}
                                                disabled={!product.gender}
                                                className="form-input"
                                                required
                                            >
                                                <option value="">Select Subcategory</option>
                                                {product.gender &&
                                                    subcategories[product.gender].map((sub, i) => (
                                                        <option key={i} value={sub}>
                                                            {sub}
                                                        </option>
                                                    ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4">
                                    <Form.Label className="form-label">Description *</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="description"
                                        value={product.description}
                                        onChange={handleChange}
                                        placeholder="Enter product description"
                                        className="form-input"
                                        required
                                    />
                                </Form.Group>
                            </div>

                            {/* Pricing Section */}
                            <div className="form-section">
                                <h4 className="section-title">Pricing & Inventory</h4>
                                <Row className="mb-4">
                                    <Col md={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="form-label">MRP *</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="mrp"
                                                value={product.mrp}
                                                onChange={handleChange}
                                                placeholder="Enter MRP"
                                                className="form-input"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="form-label">Selling Price *</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="price"
                                                value={product.price}
                                                onChange={handleChange}
                                                placeholder="Enter selling price"
                                                className="form-input"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="form-label">Discount</Form.Label>
                                            <Form.Control
                                                type="number"
                                                value={product.discount}
                                                disabled
                                                className="form-input discount-input"
                                            />
                                            <div className="discount-badge">{product.discount}% OFF</div>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="form-label">Color *</Form.Label>
                                            <Form.Select name="color" value={product.color} onChange={handleChange} className="form-input" required>
                                                <option value="">Select Color</option>
                                                {colorOptions.map((c, i) => (
                                                    <option key={i} value={c}>
                                                        {c}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="form-label">Quantity *</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="quantity"
                                                value={product.quantity}
                                                onChange={handleChange}
                                                placeholder="Enter quantity"
                                                className="form-input"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>

                            {/* Sizes Section */}
                            <div className="form-section">
                                <h4 className="section-title">Available Sizes</h4>
                                <Form.Group className="mb-4">
                                    <Form.Label className="form-label">Select available sizes *</Form.Label>
                                    <div className="size-selector">
                                        {sizesList.map((size) => (
                                            <div
                                                key={size}
                                                className={`size-option ${product.sizes.includes(size) ? 'selected' : ''}`}
                                                onClick={() => handleSizeSelect(size)}
                                            >
                                                {size}
                                            </div>
                                        ))}
                                    </div>
                                </Form.Group>
                            </div>

                            {/* Images Section */}
                            <div className="form-section">
                                <h4 className="section-title">Product Images</h4>
                                <Form.Group className="mb-4">
                                    <Form.Label className="form-label">Add Image URLs *</Form.Label>
                                    <div className="image-input-container">
                                        <Form.Control
                                            type="text"
                                            placeholder="Paste image URL"
                                            value={imgInput}
                                            onChange={(e) => setImgInput(e.target.value)}
                                            className="form-input"
                                        />
                                        <Button variant="primary" onClick={addImage} className="add-image-btn">
                                            Add Image
                                        </Button>
                                    </div>

                                    <div className="image-previews">
                                        {product.images.map((img, i) => (
                                            <div key={i} className="image-preview">
                                                <img src={img} alt={`Preview ${i + 1}`} />
                                                <Button
                                                    variant="danger"
                                                    className="remove-image-btn"
                                                    onClick={() => removeImage(i)}
                                                >
                                                    ×
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                    {product.images.length === 0 && (
                                        <div className="no-images">No images added yet</div>
                                    )}
                                </Form.Group>
                            </div>

                            <div className="form-actions">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="submit-btn"
                                    disabled={!product.name || !product.brand || !product.gender || !product.price}
                                >
                                    Add Product
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline-secondary"
                                    className="cancel-btn"
                                    onClick={() => navigate(-1)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </>
    );
}