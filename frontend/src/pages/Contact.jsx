import { useState } from "react"; 
import '../Contact.css';

function Contact() {
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const clearForm = () => { 
        setFirstName(""); 
        setLastName(""); 
        setEmail(""); 
        setMessage("");
    }; 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert("Form submitted!"); 
        clearForm(); 
    }; 

    const getIsFormValid = () => { 
        return ( 
            firstName.trim() &&
            lastName.trim() &&
            validateEmail(email) &&
            message.trim().length >= 10
        );
    };

    return (
        <div className="contact">
            <h1>Contact</h1>
            <h2 className="sub-heading">
                Have any questions? Reach out to us and we will get back to you as soon as we can.
            </h2>
            <form onSubmit={handleSubmit}> 
                <fieldset> 
                    <div className="field"> 
                        <label>First name <sup>*</sup></label> 
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First name"
                        /> 
                    </div> 

                    <div className="field"> 
                        <label>Last name <sup>*</sup></label> 
                        <input 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last name"
                        /> 
                    </div> 

                    <div className="field"> 
                        <label>Email address <sup>*</sup></label> 
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                        /> 
                    </div> 

                    <div className="message"> 
                        <label>Message <sup>*</sup></label> 
                        <textarea 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message"
                        />
                    </div>

                    <button type="submit" disabled={!getIsFormValid()}>
                        Submit
                    </button>
                </fieldset> 
            </form> 
        </div>
    );
}

export default Contact;
