import { useState } from "react";
import '../Login.css'; // Reusing the same styles
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate()

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isFormValid = () => {
        return (
            name.length >= 1 &&
            validateEmail(email) &&
            password.length >= 6 &&
            password === confirmPassword
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");

        axios.post('http://localhost:4000/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login');
        })
        .catch(err=> console.log(err))

        setName("");
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
                        <label>Name <sup>*</sup></label>
                        <input
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                        />
                    </div>

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