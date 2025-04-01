import { useState } from "react";
import '../Login.css'; // Reusing the same styles

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isFormValid = () => {
        return (
            validateEmail(email) &&
            password.length >= 6 &&
            password === confirmPassword
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="login">
            <h1>Sign Up</h1>
            <h2 className="sub-heading">
                Create an account to get started with SignWise!
            </h2>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label>Email Address <sup>*</sup></label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>

                    <div className="field">
                        <label>Password <sup>*</sup></label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>

                    <div className="field">
                        <label>Confirm Password <sup>*</sup></label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                        />
                    </div>

                    <button type="submit" disabled={!isFormValid()}>
                        Sign Up
                    </button>
                </fieldset>
            </form>

            <p className="signup-text">
                Already have an account? <a href="/Login">Log in instead</a>
            </p>
        </div>
    );
}

export default SignUp;