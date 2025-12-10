import { useState } from 'react';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Name must be at least 2 characters';
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log('Sign Up Data:', formData);
        // Add your sign-up logic here
        alert('Sign Up functionality - Check console for data');
    };

    return (
        <div className="form-content">
            <div className="form-header">
                <h1>Create Account</h1>
                <p>Join us and start your journey today</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <MdPerson className="input-icon" />
                </div>

                <div className="input-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <MdEmail className="input-icon" />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <MdLock className="input-icon" />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <MdLock className="input-icon" />
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                    />
                    <label htmlFor="agreeToTerms" className="terms-text">
                        I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                    </label>
                </div>

                <button type="submit" className="submit-btn">
                    Create Account
                </button>
            </form>

            <div className="divider">
                <span>Or sign up with</span>
            </div>

            <div className="social-login">
                <button type="button" className="social-btn" title="Sign up with Google">
                    <FaGoogle />
                </button>
                <button type="button" className="social-btn" title="Sign up with GitHub">
                    <FaGithub />
                </button>
                <button type="button" className="social-btn" title="Sign up with Facebook">
                    <FaFacebook />
                </button>
            </div>
        </div>
    );
};

export default SignUp;
