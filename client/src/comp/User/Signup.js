import React, { useState } from "react";
import { isEmail } from "validator";

function Signup() {

    const [inputUsername, setInputUsername] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputConfirmPassword, setInputConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleInputUsernameChange = (event) => {
        const filteredUsername = sanitizeInputUsername(event.target.value);
        setInputUsername(filteredUsername);
    };

    const sanitizeInputUsername = (input) => {
        const filteredInputUsername = input.replace(/[^a-zA-Z0-9\s]/g, '');
        return filteredInputUsername;
    };

    const handleInputEmailChange = (event) => {
        const email = event.target.value;
        setInputEmail(email);
    
        if (isEmail(email)) {
          setEmailError('');
        } else {
          setEmailError("Invalid email address.");
        }
    };
      
      const handleInputPasswordChange = (event) => {
        const password = event.target.value;
        setInputPassword(password);
      };

      const handleInputConfirmPasswordChange = (event) => {
        const confirmPassword = event.target.value;
        setInputConfirmPassword(confirmPassword);
      };

      const validateForm = () => {
        let isValid = true;

        if (inputUsername.length < 6) {
          setUsernameError("Username must be at least 6 characters long.");
          isValid = false;
        } else {
          setUsernameError("");
        }

        if (!isEmail(inputEmail)) {
          setEmailError("Invalid email address.");
          isValid = false;
        } else {
          setEmailError("");
        }

        if (inputPassword.length < 6) {
          setPasswordError("Password must be at least 6 characters long.");
          isValid = false;
        } else if (!/\d/.test(inputPassword)) {
          setPasswordError("Password must contain at least one number.");
          isValid = false;
        } else if (!/[A-Z]/.test(inputPassword)) {
          setPasswordError("Password must contain at least one uppercase letter.");
          isValid = false;
        } else {
          setPasswordError("");
        }

        if (inputPassword !== inputConfirmPassword) {
          setConfirmPasswordError("Passwords do not match.");
          isValid = false;
        } else {
          setConfirmPasswordError("");
        }

        return isValid;
      }

      const handleSubmit = (event) => {
        event.preventDefault();
      
        if (validateForm()) {
          const formData = {
            username: inputUsername,
            email: inputEmail,
            password: inputPassword,
            confirmPassword: inputConfirmPassword
          };
      
          fetch('/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
            .then(response => {
              if (response.ok) {
                window.location.href = '/login';
              } else {
              }
            })
            .catch(error => {
              console.error(error);
            });
        }
      };

    return (
      <>
        <div className="login-singup">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            {usernameError && <span className="error">{usernameError}</span>}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={inputUsername}
              onChange={handleInputUsernameChange}
            />
            {emailError && <span className="error">{emailError}</span>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={inputEmail}
              onChange={handleInputEmailChange}
            />
            {passwordError && <span className="error">{passwordError}</span>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={inputPassword}
              onChange={handleInputPasswordChange}
            />
            {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={inputConfirmPassword}
              onChange={handleInputConfirmPasswordChange}
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account? <a href="/login">Login here.</a>
            </p>
          </form>
        </div>
        </>
      );
}

export default Signup;