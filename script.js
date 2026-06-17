/* ===================================
   PRECISION AUTO CARE JAVASCRIPT
=================================== */

/* Welcome Message */

window.onload = function () {

    console.log("Precision Auto Care Website Loaded");

};

/* ===================================
   HOME PAGE BUTTON
=================================== */

function viewServices() {

    alert("Redirecting to Services Page");

    window.location.href = "services.html";

}

/* ===================================
   ENQUIRY FORM VALIDATION
=================================== */

function validateEnquiry() {

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let enquiry = document.getElementById("enquiry").value;

    if (fullname === "" || email === "" || enquiry === "") {

        alert("Please complete all enquiry fields.");
        return false;

    }

    alert("Thank you for your enquiry. We will contact you shortly.");

    return true;

}

/* ===================================
   BOOKING FORM VALIDATION
=================================== */

function validateBooking() {

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let vehicle = document.getElementById("vehicle").value;
    let date = document.getElementById("date").value;

    if (fullname === "" ||
        email === "" ||
        vehicle === "" ||
        date === "") {

        alert("Please complete all booking details.");
        return false;

    }

    alert("Booking submitted successfully.");

    return true;

}

/* ===================================
   CONTACT FORM VALIDATION
=================================== */

function validateContact() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {

        alert("Please complete all required fields.");
        return false;

    }

    alert("Your message has been sent.");

    return true;

}

/* ===================================
   ABOUT PAGE MESSAGE
=================================== */

function aboutMessage() {

    alert("Thank you for learning more about Precision Auto Care.");

}

/* ===================================
   SERVICES PAGE MESSAGE
=================================== */

function serviceMessage(service) {

    alert("You selected: " + service);

}

/* ===================================
   BOOK NOW BUTTON
=================================== */

function bookNow() {

    alert("Taking you to the booking page.");

    window.location.href = "booking.html";

}

/* ===================================
   LIVE DATE AND TIME
=================================== */

function displayDateTime() {

    let currentDate = new Date();

    let dateElement = document.getElementById("datetime");

    if (dateElement) {

        dateElement.innerHTML =
            currentDate.toLocaleDateString() +
            " " +
            currentDate.toLocaleTimeString();

    }

}

setInterval(displayDateTime, 1000);

/* ===================================
   FOOTER YEAR
=================================== */

document.addEventListener("DOMContentLoaded", function () {

    let year = document.getElementById("year");

    if (year) {

        year.innerHTML = new Date().getFullYear();

    }

});