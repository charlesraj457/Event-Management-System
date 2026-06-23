/*=========================================
    REGISTER PAGE JAVASCRIPT
    Event Management System
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        clearErrors();

        if (validateForm()) {

            registerUser();

        }

    });

});

// ======================================
// VALIDATE FORM
// ======================================

function validateForm() {

    let valid = true;

    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const gender = document.getElementById("gender");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    // Name

    if (fullname.value.trim().length < 3) {

        showError(fullname, "Enter a valid full name.");

        valid = false;

    }

    // Email

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email.value.trim())) {

        showError(email, "Enter a valid email.");

        valid = false;

    }

    // Phone

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone.value.trim())) {

        showError(phone, "Phone number must contain 10 digits.");

        valid = false;

    }

    // Gender

    if (gender.value === "") {

        showAlert("Please select gender.");

        valid = false;

    }

    // Password

    if (password.value.length < 6) {

        showError(password, "Password must be at least 6 characters.");

        valid = false;

    }

    // Confirm Password

    if (password.value !== confirmPassword.value) {

        showError(confirmPassword, "Passwords do not match.");

        valid = false;

    }

    // Terms

    if (!terms.checked) {

        showAlert("Please accept Terms & Conditions.");

        valid = false;

    }

    return valid;

}

// ======================================
// SHOW ERROR
// ======================================

function showError(input, message) {

    input.classList.add("input-error");

    const error = document.createElement("small");

    error.className = "error";

    error.innerText = message;

    input.parentElement.appendChild(error);

}

// ======================================
// SHOW ALERT
// ======================================

function showAlert(message) {

    alert(message);

}

// ======================================
// CLEAR ERRORS
// ======================================

function clearErrors() {

    document.querySelectorAll(".error").forEach(error => {

        error.remove();

    });

    document.querySelectorAll("input,select").forEach(input => {

        input.classList.remove("input-error");

    });

}

// ======================================
// REGISTER USER
// ======================================

async function registerUser() {

    const button = document.querySelector(".register-btn");

    button.innerHTML = "Registering...";

    button.disabled = true;

    const user = {

        name: document.getElementById("fullname").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        gender: document.getElementById("gender").value,

        dob: document.getElementById("dob").value,

        address: document.getElementById("address").value,

        password: document.getElementById("password").value

    };

    try {

        const response = await fetch(

            "http://localhost:8080/api/register",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(user)

            }

        );

        if (response.ok) {

            alert("Registration Successful!");

            window.location.href = "login.html";

        }

        else {

            alert("Registration Failed.");

        }

    }

    catch (error) {

        console.log(error);

        alert("Backend not connected.\n\nRegistration simulated successfully.");

        window.location.href = "login.html";

    }

    finally {

        button.innerHTML = "Register";

        button.disabled = false;

    }

}