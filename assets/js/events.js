/* ==========================================
   EVENTS PAGE JAVASCRIPT
   Event Management System
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeViewButtons();

    searchEvents();

    filterEvents();

});

/* ==========================================
   VIEW DETAILS BUTTON
========================================== */

function initializeViewButtons(){

    const buttons = document.querySelectorAll(".view-details");

    buttons.forEach(button=>{

        button.addEventListener("click",function(e){

            e.preventDefault();

            const card=this.closest(".event-card");

            const eventData={

                title:card.dataset.name,
                category:card.dataset.category,
                price:card.dataset.price,
                date:card.dataset.date,
                location:card.dataset.location,
                image:card.dataset.image

            };

            localStorage.setItem(

                "selectedEvent",

                JSON.stringify(eventData)

            );

            window.location.href="event-details.html";

        });

    });

}

/* ==========================================
   SEARCH
========================================== */

function searchEvents(){

    const searchBox=document.getElementById("searchBox");

    if(!searchBox) return;

    searchBox.addEventListener("keyup",()=>{

        const text=searchBox.value.toLowerCase();

        document.querySelectorAll(".event-card").forEach(card=>{

            const name=card.dataset.name.toLowerCase();

            card.style.display=name.includes(text)
                ? "block"
                : "none";

        });

    });

}

/* ==========================================
   CATEGORY FILTER
========================================== */

function filterEvents(){

    const filter=document.getElementById("categoryFilter");

    if(!filter) return;

    filter.addEventListener("change",()=>{

        const category=filter.value;

        document.querySelectorAll(".event-card").forEach(card=>{

            if(category==="all"){

                card.style.display="block";

            }

            else if(card.dataset.category===category){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }

        });

    });

}