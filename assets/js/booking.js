/* ==========================================
   BOOKING PAGE JAVASCRIPT
   Event Management System
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const eventId = params.get("id");

    // Temporary Event Data
    // Replace with Spring Boot API later
    const events = {

        1: {
            title: "Music Concert",
            price: 499
        },

        2: {
            title: "Tech Conference",
            price: 999
        },

        3: {
            title: "Cricket Tournament",
            price: 299
        },

        4: {
            title: "Java Workshop",
            price: 199
        },

        5: {
            title: "Food Festival",
            price: 150
        }

    };

    const event = events[eventId];

    if (!event) {

        alert("Event Not Found");

        window.location.href = "events.html";

        return;

    }

    // Display Event Details

    document.getElementById("eventName").value = event.title;
    document.getElementById("ticketPrice").value = "₹" + event.price;

    calculateTotal(event.price);

    // Ticket Change

    document.getElementById("tickets")
        .addEventListener("input", () => {

            calculateTotal(event.price);

        });

    // Booking Submit

    document.getElementById("bookingForm")
        .addEventListener("submit", function (e) {

            e.preventDefault();

            submitBooking(eventId, event.price);

        });

});

/* ==========================================
   CALCULATE TOTAL
========================================== */

function calculateTotal(price){

    const tickets =
        parseInt(document.getElementById("tickets").value) || 1;

    const total = tickets * price;

    document.getElementById("totalAmount").value =
        "₹" + total;

}

/* ==========================================
   SUBMIT BOOKING
========================================== */

async function submitBooking(eventId, price){

    const booking = {

        eventId: eventId,

        fullName:
            document.getElementById("fullName").value,

        email:
            document.getElementById("email").value,

        phone:
            document.getElementById("phone").value,

        tickets:
            parseInt(document.getElementById("tickets").value),

        paymentMethod:
            document.getElementById("paymentMethod").value,

        totalAmount:
            parseInt(document.getElementById("tickets").value) * price

    };

    try{

        const response = await fetch(

            "http://localhost:8080/api/bookings",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(booking)

            }

        );

        if(response.ok){

            alert("Booking Successful!");

            window.location.href = "my-bookings.html";

        }

        else{

            alert("Booking Failed!");

        }

    }

    catch(error){

        console.log(error);

        alert("Backend not connected.\nBooking saved temporarily.");

        localStorage.setItem(

            "latestBooking",

            JSON.stringify(booking)

        );

        window.location.href = "my-bookings.html";

    }

}