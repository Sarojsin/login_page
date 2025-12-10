import { useState } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign In Data:', formData);
        // Add your sign-in logic here
        alert('Sign In functionality - Check console for data');
    };

    return (
        <div className="form-content">
            <div className="form-header">
                <h1>Welcome Back</h1>
                <p>Sign in to continue your journey</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
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

                <div className="form-options">
                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <a href="#" className="forgot-link">Forgot Password?</a>
                </div>

                <button type="submit" className="submit-btn">
                    Sign In
                </button>
            </form>

            <div className="divider">
                <span>Or continue with</span>
            </div>

            <div className="social-login">
                <button type="button" className="social-btn" title="Sign in with Google">
                    <FaGoogle />
                </button>
                <button type="button" className="social-btn" title="Sign in with GitHub">
                    <FaGithub />
                </button>
                <button type="button" className="social-btn" title="Sign in with Facebook">
                    <FaFacebook />
                </button>
            </div>
        </div>
    );
};

export default SignIn;
