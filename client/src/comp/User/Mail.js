import React, { useState } from "react";
import { isEmail } from "validator";

function Mail() {
    const [inputEmail, setInputEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleInputEmailChange = (event) => {
        const email = event.target.value;
        setInputEmail(email);
    
        if (isEmail(email)) {
          setEmailError('');
        } else {
          setEmailError("Invalid email address.");
        }
      };

    const validateEmailForm = () => {
        if (!isEmail(inputEmail)) {
          setEmailError("Invalid email address.");
          return false;
        }    
        return true;
    };

    const handleEmailSubmit = async (event) => {
        event.preventDefault();
      
        if (validateEmailForm()) {
          try {
            const response = await fetch('/reset-password', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: inputEmail }),
            });
      
            if (response.ok) {
            } else {
            }
          } catch (error) {
          }
        }
      };

      return (
        <div className="login-singup">
          <form onSubmit={handleEmailSubmit}>
            <h1>Reset Password</h1>
            {emailError && <span className="error">{emailError}</span>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={inputEmail}
              onChange={handleInputEmailChange}
            />
            <button type="submit">Send Reset Link</button>
          </form>
        </div>
      )
}

export default Mail;