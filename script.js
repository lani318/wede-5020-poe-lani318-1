
document.addEventListener("DOMContentLoaded", function () {

    console.log("Precision Auto Care Website Loaded Successfully");

});

/* =====================================
   MOBILE NAVIGATION MENU
===================================== */

function toggleMenu() {

    let nav = document.getElementById("mainNav");

    if (nav.style.display === "block") {

        nav.style.display = "none";

    } else {

        nav.style.display = "block";

    }
}

/* =====================================
   LIVE DATE AND TIME
===================================== */

function updateDateTime() {

    let dateTime = document.getElementById("datetime");

    if (dateTime) {

        let current = new Date();

        dateTime.innerHTML =
            current.toLocaleDateString() +
            " | " +
            current.toLocaleTimeString();
    }
}

setInterval(updateDateTime, 1000);

/* =====================================
   BOOKING FORM VALIDATION
===================================== */

function validateBooking() {

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let vehicle = document.getElementById("vehicle").value;

    if (
        fullname === "" ||
        email === "" ||
        phone === "" ||
        vehicle === ""
    ) {

        alert("Please complete all booking details.");
        return false;
    }

    alert(
        "Thank you for booking with Precision Auto Care. We will contact you shortly."
    );

    return true;
}

/* =====================================
   ENQUIRY FORM VALIDATION
===================================== */

function validateEnquiry() {

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let enquiry = document.getElementById("enquiry").value;

    if (
        fullname === "" ||
        email === "" ||
        enquiry === ""
    ) {

        alert("Please complete all enquiry fields.");
        return false;
    }

    alert("Your enquiry has been submitted successfully.");

    return true;
}

/* =====================================
   CONTACT FORM VALIDATION
===================================== */

function validateContact() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please complete all required fields.");
        return false;
    }

    alert("Thank you. Your message has been sent.");

    return true;
}

/* =====================================
   SERVICE BUTTONS
===================================== */

function serviceInfo(service) {

    alert(
        "You selected " +
        service +
        ". Contact us for more information."
    );
}

/* =====================================
   BACK TO TOP BUTTON
===================================== */

window.onscroll = function () {

    let button = document.getElementById("topBtn");

    if (!button) return;

    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {

        button.style.display = "block";

    } else {

        button.style.display = "none";
    }
};

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* =====================================
   FOOTER YEAR
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    let year = document.getElementById("year");

    if (year) {

        year.innerHTML = new Date().getFullYear();
    }
});

/* =====================================
   BOOK NOW BUTTON
===================================== */

function bookNow() {

    window.location.href = "booking.html";
}

/* =====================================
   SERVICE SEARCH
===================================== */

function searchServices() {

    let input =
        document.getElementById("serviceSearch");

    if (!input) return;

    let filter =
        input.value.toUpperCase();

    let cards =
        document.getElementsByClassName("service-box");

    for (let i = 0; i < cards.length; i++) {

        let text =
            cards[i].textContent ||
            cards[i].innerText;

        if (
            text.toUpperCase().indexOf(filter) > -1
        ) {

            cards[i].style.display = "";

        } else {

            cards[i].style.display = "none";
        }
    }
}