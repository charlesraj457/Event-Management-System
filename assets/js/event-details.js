/*=========================================
    EVENT DETAILS PAGE
    Event Management System
==========================================*/

document.addEventListener("DOMContentLoaded", function () {

    // Get Event ID from URL
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get("id");

    // Temporary Event Data
    // Later replace with Spring Boot API
    const events = {

        1: {
            title: "Music Concert",
            date: "20 July 2026",
            time: "06:00 PM",
            location: "Chennai",
            category: "Music",
            organizer: "EventHub",
            seats: 150,
            price: "₹499",
            image: "assets/images/event1.jpg",
            description:
                "Enjoy an unforgettable live music concert featuring famous singers, dance performances, food stalls, and exciting entertainment."
        },

        2: {
            title: "Tech Conference",
            date: "12 August 2026",
            time: "10:00 AM",
            location: "Bengaluru",
            category: "Technology",
            organizer: "Tech India",
            seats: 250,
            price: "₹999",
            image: "assets/images/event2.jpg",
            description:
                "Learn about Artificial Intelligence, Cloud Computing, Cyber Security, Java, and Full Stack Development from industry experts."
        },

        3: {
            title: "Cricket Tournament",
            date: "15 September 2026",
            time: "09:00 AM",
            location: "Coimbatore",
            category: "Sports",
            organizer: "Sports Club",
            seats: 500,
            price: "₹299",
            image: "assets/images/event3.jpg",
            description:
                "Experience an exciting cricket tournament with professional teams, live commentary, and amazing prizes."
        },

        4: {
            title: "Java Workshop",
            date: "22 October 2026",
            time: "11:00 AM",
            location: "Madurai",
            category: "Education",
            organizer: "EventHub",
            seats: 120,
            price: "₹199",
            image: "assets/images/event4.jpg",
            description:
                "Master Java programming, Spring Boot, MySQL, REST APIs, and Full Stack Development through hands-on sessions."
        },

        5: {
            title: "Food Festival",
            date: "18 November 2026",
            time: "05:00 PM",
            location: "Trichy",
            category: "Festival",
            organizer: "Food Lovers",
            seats: 300,
            price: "₹150",
            image: "assets/images/event5.jpg",
            description:
                "Taste delicious dishes from famous restaurants and enjoy cultural programs, games, and family entertainment."
        }

    };

    const event = events[eventId];

    if (!event) {

        alert("Event Not Found");

        window.location.href = "events.html";

        return;

    }

    // Display Event Details

    document.getElementById("eventTitle").textContent = event.title;
    document.getElementById("eventDate").textContent = event.date;
    document.getElementById("eventTime").textContent = event.time;
    document.getElementById("eventLocation").textContent = event.location;
    document.getElementById("eventCategory").textContent = event.category;
    document.getElementById("eventOrganizer").textContent = event.organizer;
    document.getElementById("eventSeats").textContent = event.seats;
    document.getElementById("eventPrice").textContent = event.price;
    document.getElementById("eventDescription").textContent = event.description;

    document.getElementById("eventImage").src = event.image;
    document.getElementById("eventImage").alt = event.title;

    // Book Now Button

    document.getElementById("bookNow").addEventListener("click", function (e) {

        e.preventDefault();

        window.location.href = "booking.html?id=" + eventId;

    });

});