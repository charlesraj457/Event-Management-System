/* ==========================================
   MY BOOKINGS PAGE
   Event Management System
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadBookings();

});

/* ==========================================
   LOAD BOOKINGS
========================================== */

function loadBookings(){

    const bookingContainer =
        document.getElementById("bookingContainer");

    const emptyState =
        document.getElementById("emptyState");

    // Read booking from Local Storage
    // Later replace with Spring Boot API

    let booking =
        JSON.parse(localStorage.getItem("latestBooking"));

    if(!booking){

        bookingContainer.style.display="none";

        emptyState.style.display="block";

        return;

    }

    emptyState.style.display="none";

    bookingContainer.style.display="grid";

    bookingContainer.innerHTML=`

    <div class="booking-card">

        <h2>${booking.eventId}</h2>

        <p>

        <strong>Name :</strong>

        ${booking.fullName}

        </p>

        <p>

        <strong>Email :</strong>

        ${booking.email}

        </p>

        <p>

        <strong>Phone :</strong>

        ${booking.phone}

        </p>

        <p>

        <strong>Tickets :</strong>

        ${booking.tickets}

        </p>

        <p>

        <strong>Payment :</strong>

        ${booking.paymentMethod}

        </p>

        <p>

        <strong>Total :</strong>

        ₹${booking.totalAmount}

        </p>

        <div class="booking-buttons">

            <button
            class="download-btn"
            onclick="downloadTicket()">

            Download Ticket

            </button>

            <button
            class="cancel-btn"
            onclick="cancelBooking()">

            Cancel Booking

            </button>

        </div>

    </div>

    `;

}

/* ==========================================
   DOWNLOAD TICKET
========================================== */

function downloadTicket(){

    alert(

        "Ticket download feature will be added after backend integration."

    );

}

/* ==========================================
   CANCEL BOOKING
========================================== */

function cancelBooking(){

    if(confirm("Are you sure you want to cancel this booking?")){

        localStorage.removeItem("latestBooking");

        alert("Booking Cancelled Successfully.");

        location.reload();

    }

}

/* ==========================================
   FUTURE SPRING BOOT API
========================================== */

/*

async function loadBookingsFromAPI(){

    const response=await fetch(

    "http://localhost:8080/api/bookings"

    );

    const bookings=await response.json();

}

*/