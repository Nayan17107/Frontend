import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInAsync, signInWithGoogleAsync, clearError } from '../../Services/Actions/UserAuthActions';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isAuthenticated, isLoading, errorMsg } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (errorMsg) {
            const timer = setTimeout(() => {
                dispatch(clearError());
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errorMsg, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            dispatch(signInAsync({ email, password }));
        }
    };

    const handleGoogleSignIn = () => {
        dispatch(signInWithGoogleAsync());
    };

    return (
        <Container fluid className="auth-container login-page">
            <Row className="justify-content-center align-items-center min-vh-100">
                <Col xs={12} sm={10} md={8} lg={5} xl={4}>
                    {/* Myntra Logo */}
                    <div className="text-center mb-4">
                        <h1 className="myntra-logo-text" style={{ color: '#ff3f6c', fontSize: '2.5rem', fontWeight: 'bold' }}>
                            Myntra
                        </h1>
                        <p className="text-muted">Login to your account</p>
                    </div>

                    <Card className="auth-card shadow border-0">
                        <Card.Body className="p-4 p-md-5">
                            {/* Error Alert */}
                            {errorMsg && (
                                <Alert variant="danger" className="myntra-alert">
                                    <span className="fw-bold">Error:</span> {errorMsg}
                                </Alert>
                            )}

                            {/* Google Sign In */}
                            <Button
                                variant="outline-dark"
                                className="w-100 mb-4 d-flex align-items-center justify-content-center auth-btn"
                                onClick={handleGoogleSignIn}
                                disabled={isLoading}
                            >
                                <FaGoogle className="me-3" />
                                Continue with Google
                            </Button>

                            <div className="divider-line my-4">
                                <span>or</span>
                            </div>

                            {/* Login Form */}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="Enter your email"
                                        disabled={isLoading}
                                        className="myntra-input"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <Form.Label className="fw-semibold">Password</Form.Label>
                                        <Link
                                            to="/forgot-password"
                                            className="text-decoration-none myntra-link"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>
                                    <div className="password-input-wrapper">
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            minLength={6}
                                            placeholder="Enter your password"
                                            disabled={isLoading}
                                            className="myntra-input"
                                        />
                                        <Button
                                            variant="link"
                                            className="password-toggle"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </Button>
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Check
                                        type="checkbox"
                                        id="remember-me"
                                        label="Remember me"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="fw-medium"
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-100 myntra-primary-btn py-3 fw-bold"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Signing In...' : 'LOGIN'}
                                </Button>
                            </Form>

                            {/* Register Link */}
                            <div className="text-center mt-4 pt-3 border-top">
                                <p className="text-muted mb-2">
                                    New to Myntra?
                                </p>
                                <Link
                                    to="/register"
                                    className="btn btn-outline-dark fw-bold w-100"
                                    style={{ borderRadius: '0' }}
                                >
                                    CREATE AN ACCOUNT
                                </Link>
                            </div>

                            {/* Terms */}
                            <p className="text-center text-muted mt-4 small">
                                By continuing, you agree to Myntra's <br />
                                <Link to="/terms" className="myntra-link">Terms of Use</Link> &
                                <Link to="/privacy" className="myntra-link ms-1">Privacy Policy</Link>
                            </p>
                        </Card.Body>
                    </Card>

                    {/* Back to Home */}
                    <div className="text-center mt-4 mb-4">
                        <Link to="/" className="text-decoration-none myntra-link fw-medium">
                            ← Continue shopping
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;