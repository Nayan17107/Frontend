import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const subcategories = {
    men: [
        "T-Shirts",
        "Shirts",
        "Jeans",
        "Jackets",
        "Sweatshirts",
        "Track Pants",
        "Shorts"
    ],
    women: [
        "Tops",
        "Dresses",
        "Sarees",
        "Kurtas",
        "Jeans",
        "Skirts",
        "Jumpsuits"
    ],
    kids: [
        "Boys T-Shirts",
        "Girls Dresses",
        "Shorts",
        "Jeans",
        "Sweatshirts",
        "Girls Tops",
        "Boys Jeans"
    ]
};

const sizesList = ["S", "M", "L", "XL", "XXL"];

const colorOptions = [
    "Black",
    "White",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Grey",
    "Pink",
    "Brown"
];

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
            sizes: prev.sizes.includes(size)
                ? prev.sizes.filter((s) => s !== size)
                : [...prev.sizes, size]
        }));
    };

    const [imgInput, setImgInput] = useState("");

    const addImage = () => {
        if (imgInput.trim() !== "") {
            setProduct((prev) => ({
                ...prev,
                images: [...prev.images, imgInput]
            }));
            setImgInput("");
        }
    };

    const removeImage = (idx) => {
        setProduct((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== idx)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));

        alert("✅ Product Added Successfully!");
    };

    return (
        <Form className="p-4 border rounded-4 shadow" onSubmit={handleSubmit}>
            <h3 className="mb-4 fw-bold">Add Product</h3>

            {/* Product Name */}
            <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                />
            </Form.Group>

            {/* Brand */}
            <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                    type="text"
                    name="brand"
                    value={product.brand}
                    onChange={handleChange}
                />
            </Form.Group>

            {/* Category Radio */}
            <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <div className="d-flex gap-4">
                    {["men", "women", "kids"].map((cat) => (
                        <Form.Check
                            key={cat}
                            type="radio"
                            label={cat.toUpperCase()}
                            name="gender"
                            value={cat}
                            checked={product.gender === cat}
                            onChange={handleChange}
                        />
                    ))}
                </div>
            </Form.Group>

            {/* Subcategory */}
            <Form.Group className="mb-3">
                <Form.Label>Subcategory</Form.Label>
                <Form.Select
                    name="subcategory"
                    value={product.subcategory}
                    onChange={handleChange}
                    disabled={!product.gender}
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

            {/* Price, MRP, Discount */}
            <Row>
                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>MRP</Form.Label>
                        <Form.Control
                            type="number"
                            name="mrp"
                            value={product.mrp}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>

                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Selling Price</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>

                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Discount (%)</Form.Label>
                        <Form.Control type="number" value={product.discount} disabled />
                    </Form.Group>
                </Col>
            </Row>

            {/* Description */}
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    name="description"
                    rows={3}
                    value={product.description}
                    onChange={handleChange}
                />
            </Form.Group>

            {/* Sizes */}
            <div className="mb-3">
                <Form.Label>Sizes</Form.Label>
                <div className="d-flex gap-3">
                    {sizesList.map((size) => (
                        <Form.Check
                            key={size}
                            type="checkbox"
                            label={size}
                            onChange={() => handleSizeSelect(size)}
                            checked={product.sizes.includes(size)}
                        />
                    ))}
                </div>
            </div>

            {/* Color & Quantity */}
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Color</Form.Label>
                        <Form.Select
                            name="color"
                            value={product.color}
                            onChange={handleChange}
                        >
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
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            name="quantity"
                            value={product.quantity}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>

            {/* Images */}
            <Form.Label>Images (URLs)</Form.Label>
            <div className="d-flex gap-2 mb-3">
                <Form.Control
                    type="text"
                    placeholder="Paste image URL"
                    value={imgInput}
                    onChange={(e) => setImgInput(e.target.value)}
                />
                <Button variant="secondary" onClick={addImage}>
                    Add
                </Button>
            </div>

            <div className="d-flex gap-2 flex-wrap mb-4">
                {product.images.map((img, i) => (
                    <div key={i} className="position-relative">
                        <img
                            src={img}
                            width="80"
                            height="100"
                            style={{ objectFit: "cover", borderRadius: "6px" }}
                            alt=""
                        />
                        <Button
                            size="sm"
                            variant="danger"
                            className="position-absolute top-0 end-0"
                            onClick={() => removeImage(i)}
                        >
                            ×
                        </Button>
                    </div>
                ))}
            </div>

            <Button type="submit" variant="primary" className="w-100 fw-bold">
                ✅ Add Product
            </Button>
        </Form>
    );
}
