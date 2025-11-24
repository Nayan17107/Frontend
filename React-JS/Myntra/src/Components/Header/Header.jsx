import { Navbar, Nav, Form, FormControl, Container, Offcanvas } from "react-bootstrap";
import { FaRegUser, FaRegHeart, FaShoppingBag, FaSearch, FaChevronRight } from "react-icons/fa";
import Logo from "/img/myntra.webp";
import offcanvas1 from "/img/offcanvas-1.webp";
import offcanvas2 from "/img/offcanvas-2.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 992) setShow(false);
        };
        window.addEventListener("resize", onResize);
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
                    <Navbar.Collapse id="desktop-nav">
                        <Nav className="me-auto ms-4 fw-semibold header-menu">
                            <Nav.Link as={Link} to="/man">MEN</Nav.Link>
                            <Nav.Link as={Link} to="/women">WOMEN</Nav.Link>
                            <Nav.Link as={Link} to="/kids">KIDS</Nav.Link>
                            <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/">BEAUTY</Nav.Link>
                        </Nav>

                        {/* ✅ Search */}
                        <Form className="d-flex align-items-center me-4 header-search-box">
                            <FaSearch className="search-icon" />
                            <FormControl
                                placeholder="Search for products"
                                className="ps-5 header-search-input"
                            />
                        </Form>

                        {/* ✅ ADD PRODUCT (kept) */}
                        <Nav className="me-3">
                            <Nav.Link
                                as={Link}
                                to="/addproduct"
                                className="fw-semibold text-danger"
                            >
                                ADD PRODUCT
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {/* ✅ Desktop Right Icons */}
                    <div className="d-none d-lg-flex header-icons">

                        <Link className="icon-item mx-3">
                            <FaRegUser />
                            <small>Profile</small>
                        </Link>

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
                placement="start"
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
                        <Nav.Link as={Link} to="/man" onClick={handleClose} className="off-item">
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

                    <hr className="m-0" />

                    {/* ADD PRODUCT */}
                    <Nav className="flex-column px-3 py-3 fw-semibold">
                        <Nav.Link as={Link} to="/addproduct" onClick={handleClose} className="off-item text-danger">
                            ADD PRODUCT <FaChevronRight />
                        </Nav.Link>
                    </Nav>

                    {/* Bottom banner */}
                    <img src={offcanvas2} alt="" className="w-100 mt-4" />

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Header;
