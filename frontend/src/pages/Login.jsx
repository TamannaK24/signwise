import { useState } from "react";
import '../Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return validateEmail(email) && password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/login", { email, password })
      // res.data will be "Success"
      navigate("/learn");
      alert(res.data);
      setEmail("");
      setPassword("");
      // TODO: redirect or set auth state here
    } catch (err) {
      const msg = err.response?.data || err.message;
      console.error("Login failed:", msg);
      alert("Login error: " + msg);
    }
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