import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAsync, clearError, clearCreatedFlag } from '../../Services/Actions/UserAuthActions';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Auth.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isAuthenticated, isLoading, errorMsg, isCreated } = useSelector(state => state.auth);

    useEffect(() => {
        
        if (isCreated) {
            const timer = setTimeout(() => {
                dispatch(clearCreatedFlag());
                navigate('/login');
            }, 2000);

            return () => clearTimeout(timer);
        }

        if (isAuthenticated) {
            navigate('/');
        }
    }, [isCreated, isAuthenticated, navigate, dispatch]);

    useEffect(() => {
        if (errorMsg) {
            const timer = setTimeout(() => {
                dispatch(clearError());
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errorMsg, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'password' || name === 'confirmPassword') {
            setPasswordError('');
        }
    };

    const validatePasswords = () => {
        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Passwords do not match');
            return false;
        }
        if (formData.password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validatePasswords()) {
            return;
        }

        const { confirmPassword, ...userData } = formData;
        dispatch(signUpAsync(userData));
    };

    return (
        <Container fluid className="auth-container register-page">
            <Row className="justify-content-center align-items-center min-vh-100">
                <Col xs={12} sm={10} md={8} lg={5} xl={4}>
                    {/* Myntra Logo */}
                    <div className="text-center mb-4">
                        <h1 className="myntra-logo-text" style={{ color: '#ff3f6c', fontSize: '2.5rem', fontWeight: 'bold' }}>
                            MYNTRA
                        </h1>
                        <p className="text-muted">Create your account</p>
                    </div>

                    <Card className="auth-card shadow border-0">
                        <Card.Body className="p-4 p-md-5">
                            {/* Success Message */}
                            {isCreated && (
                                <Alert variant="success" className="myntra-alert">
                                    <span className="fw-bold">Success!</span> Account created. Redirecting to login...
                                </Alert>
                            )}

                            {/* Error Alert */}
                            {errorMsg && (
                                <Alert variant="danger" className="myntra-alert">
                                    <span className="fw-bold">Error:</span> {errorMsg}
                                </Alert>
                            )}

                            {/* Registration Form */}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                        disabled={isLoading}
                                        className="myntra-input"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email"
                                        disabled={isLoading}
                                        className="myntra-input"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">Mobile Number <span className="text-muted">(Optional)</span></Form.Label>
                                    <Form.Control
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter 10-digit mobile number"
                                        disabled={isLoading}
                                        className="myntra-input"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">Password</Form.Label>
                                    <div className="password-input-wrapper">
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            minLength={6}
                                            placeholder="Enter your password"
                                            disabled={isLoading}
                                            className="myntra-input"
                                            isInvalid={!!passwordError}
                                        />
                                        <Button
                                            variant="link"
                                            className="password-toggle"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </Button>
                                    </div>
                                    {passwordError && (
                                        <Form.Text className="text-danger small">
                                            {passwordError}
                                        </Form.Text>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">Confirm Password</Form.Label>
                                    <div className="password-input-wrapper">
                                        <Form.Control
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            placeholder="Confirm your password"
                                            disabled={isLoading}
                                            className="myntra-input"
                                            isInvalid={!!passwordError}
                                        />
                                        <Button
                                            variant="link"
                                            className="password-toggle"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                        </Button>
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Check
                                        type="checkbox"
                                        id="terms-check"
                                        label={
                                            <>
                                                I agree to the{' '}
                                                <Link to="/terms" className="myntra-link">Terms & Conditions</Link>{' '}
                                                and{' '}
                                                <Link to="/privacy" className="myntra-link">Privacy Policy</Link>
                                            </>
                                        }
                                        required
                                        className="fw-medium"
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-100 myntra-primary-btn py-3 fw-bold"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Creating Account...' : 'CREATE ACCOUNT'}
                                </Button>
                            </Form>

                            {/* Login Link */}
                            <div className="text-center mt-4 pt-3 border-top">
                                <p className="text-muted mb-2">
                                    Already have an account?
                                </p>
                                <Link
                                    to="/login"
                                    className="btn btn-outline-dark fw-bold w-100"
                                    style={{ borderRadius: '0' }}
                                >
                                    LOGIN INSTEAD
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
                    <div className="text-center mt-4">
                        <Link to="/" className="text-decoration-none myntra-link fw-medium">
                            ← Continue shopping
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;