
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
/* ==================================
   PRECISION AUTO CARE SCRIPT
================================== */

/* Booking Form Validation */

function validateBooking() {

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let vehicle = document.getElementById("vehicle").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;

    if (
        fullname === "" ||
        email === "" ||
        phone === "" ||
        vehicle === "" ||
        date === ""
    ) {

        alert("Please complete all required fields.");
        return false;
    }

    alert(
        "Thank you " +
        fullname +
        "! Your booking for " +
        service +
        " has been submitted successfully."
    );

    return true;
}

/* Display Current Year */

document.addEventListener("DOMContentLoaded", function () {

    let year = document.getElementById("year");

    if (year) {

        year.innerHTML = new Date().getFullYear();

    }

});

/* Display Date and Time */

function updateDateTime() {

    let display = document.getElementById("datetime");

    if (display) {

        let now = new Date();

        display.innerHTML =
            now.toLocaleDateString() +
            " | " +
            now.toLocaleTimeString();

    }

}

setInterval(updateDateTime, 1000);

/* Booking Confirmation */

function bookingMessage() {

    alert(
        "Thank you for choosing Precision Auto Care. We will contact you shortly."
    );

}

/* Back To Top Button */

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

function sendContactWhatsApp() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === "") {

        alert("Please complete all required fields.");
        return false;
    }

    let whatsappMessage =
        "CONTACT REQUEST\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Message: " + message;

    let whatsappURL =
        "https://wa.me/27763537329?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

    alert("Opening WhatsApp...");

    return false;
}


/* ==================================
   ENQUIRY FORM TO WHATSAPP
================================== */

function sendEnquiryWhatsApp() {

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let vehicle = document.getElementById("vehicle").value;
    let enquiry = document.getElementById("enquiry").value;

    if(fullname === "" || email === "" || enquiry === "") {

        alert("Please complete all required fields.");
        return false;
    }

    let whatsappMessage =
    "NEW ENQUIRY%0A%0A" +
    "Customer Name: " + fullname + "%0A" +
    "Email: " + email + "%0A" +
    "Vehicle: " + vehicle + "%0A" +
    "Enquiry: " + enquiry;

    window.open(
        "https://wa.me/27763537329?text=" + whatsappMessage,
        "_blank"
    );

    return false;
}

/* ==================================
   CONTACT US FORM TO WHATSAPP
================================== */

function sendContactWhatsApp() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "") {

        alert("Please complete all required fields.");
        return false;
    }

    let whatsappMessage =
    "CONTACT FORM SUBMISSION%0A%0A" +
    "Name: " + name + "%0A" +
    "Email: " + email + "%0A" +
    "Phone: " + phone + "%0A" +
    "Message: " + message;

    window.open(
        "https://wa.me/27763537329?text=" + whatsappMessage,
        "_blank"
    );

    return false;
}

function sendBookingWhatsApp() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let vehicle = document.getElementById("vehicle").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let additionalInfo = document.getElementById("additionalInfo").value;

    if (
        fullname === "" ||
        email === "" ||
        phone === "" ||
        vehicle === "" ||
        date === ""
    ) {

        alert("Please complete all required booking fields.");
        return false;
    }

    let bookingMessage =
        "NEW SERVICE BOOKING\n\n" +
        "Customer Name: " + fullname + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Vehicle: " + vehicle + "\n" +
        "Service: " + service + "\n" +
        "Booking Date: " + date + "\n" +
        "Additional Information: " + additionalInfo;

    let whatsappURL =
        "https://wa.me/27763537329?text=" +
        encodeURIComponent(bookingMessage);

    window.open(whatsappURL, "_blank");

    return false;
}
