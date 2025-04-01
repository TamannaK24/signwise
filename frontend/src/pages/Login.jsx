import { useState } from "react";
import '../Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return validateEmail(email) && password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in!");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <h1>Log In</h1>
      <h2 className="sub-heading">
        Welcome back! Please log in to your account.
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
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" disabled={!isFormValid()}>
            Log In
          </button>
        </fieldset>
      </form>

      <p className="signup-text">
        Don't have an account? <a href="/Signup">Sign up here</a>
      </p>
    </div>
  );
}

export default Login;