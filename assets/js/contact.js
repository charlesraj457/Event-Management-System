/* ==========================================
   CONTACT PAGE
   Event Management System
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", submitContactForm);

});

/* ==========================================
   SUBMIT CONTACT FORM
========================================== */

async function submitContactForm(event){

    event.preventDefault();

    const contact = {

        name: document.getElementById("name").value.trim(),

        email: document.getElementById("email").value.trim(),

        subject: document.getElementById("subject").value.trim(),

        message: document.getElementById("message").value.trim(),

        date: new Date().toLocaleString()

    };

    // Basic Validation

    if(
        contact.name === "" ||
        contact.email === "" ||
        contact.subject === "" ||
        contact.message === ""
    ){

        alert("Please fill in all fields.");

        return;

    }

    try{

        // Spring Boot API (Future)

        const response = await fetch(

            "http://localhost:8080/api/contact",

            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(contact)

            }

        );

        if(response.ok){

            alert("Message sent successfully!");

            document.getElementById("contactForm").reset();

        }else{

            alert("Unable to send message.");

        }

    }

    catch(error){

        console.log(error);

        // Offline Demo

        let messages =
            JSON.parse(localStorage.getItem("contactMessages")) || [];

        messages.push(contact);

        localStorage.setItem(
            "contactMessages",
            JSON.stringify(messages)
        );

        alert("Message saved successfully! (Demo Mode)");

        document.getElementById("contactForm").reset();

    }

}