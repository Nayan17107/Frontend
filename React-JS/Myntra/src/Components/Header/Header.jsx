import { Navbar, Nav, Form, FormControl, Container, Offcanvas, Button, Badge, Dropdown } from "react-bootstrap";
import Logo from "/img/myntra.webp";
import offcanvas1 from "/img/offcanvas-1.webp";
import offcanvas2 from "/img/offcanvas-2.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { FaUser, FaSignOutAlt, FaRegHeart, FaShoppingBag, FaSearch, FaChevronRight, FaPlusCircle, FaBoxOpen } from 'react-icons/fa';
import { signOutAsync } from '../../Services/Actions/UserAuthActions';
import "./Header.css";

function Header() {
    const [show, setShow] = useState(false);
    const [productsCount, setProductsCount] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector(state => state.auth);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 992) setShow(false);
        };
        window.addEventListener("resize", onResize);

        const products = JSON.parse(localStorage.getItem("products")) || [];
        setProductsCount(products.length);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <>
            <Navbar expand="lg" className="py-3 shadow-sm navbar-light bg-white border-bottom main-header" sticky="top">
                <Container>

                    {/* ✅ Logo Always Left */}
                    <Navbar.Brand as={Link} to="/" className="me-2">
                        <img src={Logo} height="42" alt="Myntra Logo" className="myntra-logo" />
                    </Navbar.Brand>

                    {/* ✅ Fixed Toggle Button */}
                    <Navbar.Toggle
                        onClick={handleShow}
                        className="border-0 shadow-none d-lg-none"
                        aria-label="Open Menu"
                    />

                    {/* ✅ Desktop Menu */}
                    <Navbar.Collapse id="desktop-nav" className="d-sm-none">
                        <Nav className="me-auto ms-4 fw-semibold header-menu">
                            <Nav.Link as={Link} to="/men">MEN</Nav.Link>
                            <Nav.Link as={Link} to="/women">WOMEN</Nav.Link>
                            <Nav.Link as={Link} to="/kids">KIDS</Nav.Link>
                            <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/">BEAUTY</Nav.Link>
                        </Nav>

                        <Form className="d-flex align-items-center me-4 header-search-box">
                            <FaSearch className="search-icon" />
                            <FormControl
                                placeholder="Search for products"
                                className="ps-5 header-search-input"
                            />
                        </Form>

                        {isAuthenticated && (<Nav className="me-3">
                            <Link
                                to="/add-product"
                                className="add-product-btn-wrapper"
                            >
                                <Button className="add-product-btn">
                                    <FaPlusCircle className="btn-icon" />
                                    <span className="btn-text">Add Product</span>
                                    {productsCount > 0 && (
                                        <Badge className="product-count-badge" bg="success">
                                            {productsCount}
                                        </Badge>
                                    )}
                                </Button>
                            </Link>
                        </Nav>)}
                    </Navbar.Collapse>

                    {/* ✅ Desktop Right Icons */}
                    <div className="d-none d-lg-flex header-icons">

                        {/* AUTH SECTION */}
                        {isAuthenticated ? (
                            <div className="myntra-dropdown-wrapper">
                                <Dropdown align="end">
                                    <Dropdown.Toggle
                                        variant="link"
                                        className="myntra-profile-toggle icon-item mx-3 p-0 border-0 bg-transparent"
                                    >
                                        <FaUser />
                                        <small>Profile</small>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="myntra-dropdown-menu">
                                        {/* User Header with Profile Picture */}
                                        <div className="myntra-user-header">
                                            {user?.photoURL ? (
                                                <img
                                                    src={user.photoURL}
                                                    alt="Profile"
                                                    className="myntra-user-avatar-img"
                                                    referrerPolicy="no-referrer"
                                                />
                                            ) : (
                                                <div className="myntra-user-avatar">
                                                    <FaUser />
                                                </div>
                                            )}
                                            <div>
                                                <div className="myntra-user-name">{user?.name || 'User'}</div>
                                                <div className="myntra-user-email">{user?.email || ''}</div>
                                            </div>
                                        </div>

                                        <div className="myntra-menu-divider"></div>

                                        {/* Menu Items */}
                                        <div className="myntra-menu-items">
                                            <Dropdown.Item as={Link} to="/profile" className="myntra-menu-item">
                                                <div className="myntra-menu-icon">
                                                    <FaUser />
                                                </div>
                                                <div className="myntra-menu-content">
                                                    <div className="myntra-menu-title">My Profile</div>
                                                    <div className="myntra-menu-sub">View & edit profile</div>
                                                </div>
                                            </Dropdown.Item>

                                            <Dropdown.Item as={Link} to="/orders" className="myntra-menu-item">
                                                <div className="myntra-menu-icon">
                                                    <FaShoppingBag />
                                                </div>
                                                <div className="myntra-menu-content">
                                                    <div className="myntra-menu-title">My Orders</div>
                                                    <div className="myntra-menu-sub">Track & view orders</div>
                                                </div>
                                            </Dropdown.Item>

                                            <Dropdown.Item as={Link} to="/wishlist" className="myntra-menu-item">
                                                <div className="myntra-menu-icon">
                                                    <FaRegHeart />
                                                </div>
                                                <div className="myntra-menu-content">
                                                    <div className="myntra-menu-title">Wishlist</div>
                                                    <div className="myntra-menu-sub">Saved items</div>
                                                </div>
                                            </Dropdown.Item>
                                        </div>

                                        <div className="myntra-menu-divider"></div>

                                        {/* Logout */}
                                        <Dropdown.Item
                                            className="myntra-menu-item myntra-logout-item"
                                            onClick={() => dispatch(signOutAsync())}
                                        >
                                            <div className="myntra-menu-icon">
                                                <FaSignOutAlt />
                                            </div>
                                            <div className="myntra-menu-content">
                                                <div className="myntra-menu-title">Logout</div>
                                                <div className="myntra-menu-sub">Sign out of account</div>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        ) : (
                            <Link to="/login" className="icon-item mx-3">
                                <FaUser />
                                <small>Login</small>
                            </Link>
                        )}

                        <Link className="icon-item mx-3">
                            <FaRegHeart />
                            <small>Wishlist</small>
                        </Link>

                        <Link className="icon-item mx-3">
                            <FaShoppingBag />
                            <small>Bag</small>
                        </Link>

                    </div>
                </Container>
            </Navbar>

            {/* ✅ OFFCANVAS (MOBILE MENU) */}
            <Offcanvas
                className="header-offcanvas"
                show={show}
                onHide={handleClose}
            >
                <Offcanvas.Header closeButton>

                    {/* ✅ Logo inside offcanvas */}
                    <Offcanvas.Title className="fw-bold d-flex align-items-center">
                        MENU
                    </Offcanvas.Title>

                </Offcanvas.Header>

                <Offcanvas.Body className="p-0">

                    {/* Banner */}
                    <img src={offcanvas1} alt="" className="w-100" />
                    {/* Main links */}
                    <Nav className="flex-column px-3 py-3 fw-semibold off-nav">
                        <Nav.Link as={Link} to="/men" onClick={handleClose} className="off-item">
                            MEN <FaChevronRight />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/women" onClick={handleClose} className="off-item">
                            WOMEN <FaChevronRight />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/kids" onClick={handleClose} className="off-item">
                            KIDS <FaChevronRight />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/" onClick={handleClose} className="off-item">
                            HOME <FaChevronRight />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/" onClick={handleClose} className="off-item">
                            BEAUTY <FaChevronRight />
                        </Nav.Link>
                    </Nav>

                    {/* Mobile Auth Section - Separated for better alignment */}
                    <div className="px-3 py-3 border-top">
                        {isAuthenticated ? (
                            // Logged in user mobile menu
                            <div className="d-flex align-items-center mb-3">
                                {user?.photoURL ? (
                                    <img
                                        src={user.photoURL}
                                        alt="Profile"
                                        className="rounded-circle me-3"
                                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                        referrerPolicy="no-referrer"
                                    />
                                ) : (
                                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                                        style={{ width: '40px', height: '40px' }}>
                                        <FaUser />
                                    </div>
                                )}
                                <div>
                                    <div className="fw-bold text-dark">{user?.name || 'User'}</div>
                                    <div className="small text-muted">{user?.email || ''}</div>
                                </div>
                            </div>
                        ) : (
                            // Not logged in - Show login/register buttons
                            <div className="mb-3">
                                <div className="d-grid gap-2">
                                    <Link
                                        to="/login"
                                        onClick={handleClose}
                                        className="btn btn-primary fw-bold"
                                        style={{ borderRadius: '8px' }}
                                    >
                                        <FaUser className="me-2" /> Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        onClick={handleClose}
                                        className="btn btn-outline-dark fw-bold"
                                        style={{ borderRadius: '8px' }}
                                    >
                                        Create Account
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* Logged in user options */}
                        {isAuthenticated && (
                            <div className="mt-3">
                                <Link
                                    to="/profile"
                                    onClick={handleClose}
                                    className="d-block py-2 text-decoration-none text-dark"
                                >
                                    <FaUser className="me-2" /> My Profile
                                </Link>
                                <Link
                                    to="/orders"
                                    onClick={handleClose}
                                    className="d-block py-2 text-decoration-none text-dark"
                                >
                                    <FaShoppingBag className="me-2" /> My Orders
                                </Link>
                                <Link
                                    to="/wishlist"
                                    onClick={handleClose}
                                    className="d-block py-2 text-decoration-none text-dark"
                                >
                                    <FaRegHeart className="me-2" /> Wishlist
                                </Link>
                                <button
                                    onClick={() => {
                                        dispatch(signOutAsync());
                                        handleClose();
                                    }}
                                    className="d-block py-2 text-danger border-0 bg-transparent text-start w-100"
                                    style={{ paddingLeft: '0' }}
                                >
                                    <FaSignOutAlt className="me-2" /> Logout
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Enhanced ADD PRODUCT Mobile */}
                    {isAuthenticated && (<Nav className="flex-column px-3 py-3 fw-semibold">
                        <Link
                            to="/add-product"
                            onClick={handleClose}
                            className="off-item add-product-mobile"
                        >
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <FaBoxOpen className="me-2 mobile-icon" />
                                    <span>Add Product</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    {productsCount > 0 && (
                                        <Badge className="mobile-badge" bg="success">
                                            {productsCount}
                                        </Badge>
                                    )}
                                    <FaChevronRight className="ms-2" />
                                </div>
                            </div>
                        </Link>
                    </Nav>)}

                    <img src={offcanvas2} alt="" className="w-100 mt-4" />

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Header;