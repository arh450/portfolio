$(document).ready(() => {

    // On click to display phone number in modal
    $("#phone-contact").on("click", ".btn", (event) => {
        event.preventDefault();
        $("#contact-modal").modal('show');
        $("#contact-title").text("Phone Number");
        $("#contact-text").text("(207) 206-5175");
    });

    // On click to display email address in modal
    $("#email-contact").on("click", ".btn", (event) => {
        event.preventDefault();
        $("#contact-modal").modal('show');
        $("#contact-title").text("Email Address");
        $("#contact-text").text("gusheptig@gmail.com");
    });

});