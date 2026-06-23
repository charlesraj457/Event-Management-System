/* ==========================================
   PROFILE PAGE
   Event Management System
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadProfile();

    // Profile Form
    document.getElementById("profileForm")
        .addEventListener("submit", saveProfile);

    // Logout Button
    document.getElementById("logoutBtn")
        .addEventListener("click", logout);

    // Profile Image Preview
    document.getElementById("profileImage")
        .addEventListener("change", previewImage);

});

/* ==========================================
   LOAD PROFILE
========================================== */

function loadProfile(){

    const profile = JSON.parse(localStorage.getItem("userProfile"));

    if(profile){

        document.getElementById("fullName").value =
            profile.fullName || "";

        document.getElementById("email").value =
            profile.email || "";

        document.getElementById("phone").value =
            profile.phone || "";

        document.getElementById("address").value =
            profile.address || "";

        if(profile.image){

            document.getElementById("profilePreview").src =
                profile.image;

        }

    }

}

/* ==========================================
   SAVE PROFILE
========================================== */

function saveProfile(e){

    e.preventDefault();

    const profile = {

        fullName:
            document.getElementById("fullName").value,

        email:
            document.getElementById("email").value,

        phone:
            document.getElementById("phone").value,

        address:
            document.getElementById("address").value,

        password:
            document.getElementById("password").value,

        image:
            document.getElementById("profilePreview").src

    };

    localStorage.setItem(
        "userProfile",
        JSON.stringify(profile)
    );

    alert("Profile updated successfully!");

}

/* ==========================================
   PROFILE IMAGE PREVIEW
========================================== */

function previewImage(event){

    const file = event.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(e){

        document.getElementById("profilePreview").src =
            e.target.result;

    };

    reader.readAsDataURL(file);

}

/* ==========================================
   LOGOUT
========================================== */

function logout(){

    if(confirm("Do you want to logout?")){

        localStorage.removeItem("user");

        alert("Logged out successfully!");

        window.location.href = "login.html";

    }

}

/* ==========================================
   FUTURE SPRING BOOT API
========================================== */

/*

// Load profile

fetch("http://localhost:8080/api/users/profile")

// Save profile

fetch("http://localhost:8080/api/users/profile",{
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(profile)
});

*/