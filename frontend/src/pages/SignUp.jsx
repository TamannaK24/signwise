import { useState } from "react";
import '../Login.css'; // Reusing the same styles
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function SignUp() {
    //react's use state variables for email, password and confirm password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    //email validation function to check if the email is in the correct format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    //returns true if the email is valid, password is at least 6 characters long and the password and confirm password match
    const isFormValid = () => {
        return (
            validateEmail(email) &&
            password.length >= 6 &&
            password === confirmPassword
        );
    };

    //Handles form submission
    //stops page from refreshing, sends post request to backend with email and password
    //logs whatever the backend returns
    //clears the form 
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:4000/api/register", { email, password })

            .then(result => {
                console.log(result);
                alert("Account created!");
                navigate("/learn");

                setEmail("");
                setPassword("");
                setConfirmPassword("");
            })
            .catch(err => {
                console.log(err);
                alert("Error creating account. Please try again.");
            });

    };


    //passes the handleSubmit function to the form on submit event
    //collects the email, password and confirm password from the user
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