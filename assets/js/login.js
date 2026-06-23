/*=========================================
    LOGIN PAGE JAVASCRIPT
    Event Management System
==========================================*/

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    // ==========================
    // SHOW / HIDE PASSWORD
    // ==========================

    if (togglePassword) {

        togglePassword.addEventListener("click", () => {

            if (password.type === "password") {

                password.type = "text";
                togglePassword.innerHTML = "🙈";

            } else {

                password.type = "password";
                togglePassword.innerHTML = "👁️";

            }

        });

    }

    // ==========================
    // LOGIN FORM SUBMIT
    // ==========================

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        clearValidation();

        let valid = true;

        // Email Validation

        if (!validateEmail(email.value.trim())) {

            showError(email, "Please enter a valid email.");

            valid = false;

        }

        // Password Validation

        if (password.value.trim().length < 6) {

            showError(password, "Password must contain at least 6 characters.");

            valid = false;

        }

        if (valid) {

            loginUser();

        }

    });

});

// =======================================
// EMAIL VALIDATION
// =======================================

function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}

// =======================================
// SHOW ERROR
// =======================================

function showError(input, message) {

    input.classList.add("input-error");

    const error = document.createElement("small");

    error.className = "error";

    error.innerText = message;

    input.parentElement.appendChild(error);

}

// =======================================
// CLEAR ERROR
// =======================================

function clearValidation() {

    document.querySelectorAll(".error").forEach(error => {

        error.remove();

    });

    document.querySelectorAll("input").forEach(input => {

        input.classList.remove("input-error");

    });

}

// =======================================
// LOGIN FUNCTION
// =======================================

async function loginUser() {

    const button = document.querySelector(".login-btn");

    button.innerHTML = "Logging in...";
    button.disabled = true;
    button.classList.add("loading");

    const loginData = {

        email: document.getElementById("email").value,

        password: document.getElementById("password").value

    };

    try {

        // Change this URL when backend is ready

        const response = await fetch(
            "http://localhost:8080/api/login",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(loginData)

            }
        );

        if (response.ok) {

            const data = await response.json();

            // Save token

            localStorage.setItem("token", data.token);

            // Save user

            localStorage.setItem("user", JSON.stringify(data.user));

            alert("Login Successful!");

            window.location.href = "index.html";

        }

        else {

            alert("Invalid Email or Password");

        }

    }

    catch (error) {

        console.log(error);

        alert("Backend is not connected.\n\nRunning frontend validation only.");

        // Temporary Login

        window.location.href = "index.html";

    }

    finally {

        button.innerHTML = "Login";

        button.disabled = false;

        button.classList.remove("loading");

    }

}