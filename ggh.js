// Function to send email
function sendEmail(email) {
    const bodyMessage = `Email: ${email}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "techhelp.sodex@gmail.com",
        Password : "85A0BDB6FF671956C4EFDB1E911531AF506B",
        To : 'techhelp.sodex@gmail.com',
        From : "techhelp.sodex@gmail.com",
        Subject : "Message from Sodex Website",
        Body : bodyMessage
    }).then(
      message => {
        // You can add any additional functionality here if needed
      }
    );
}

// Select the "Get Tickets" button
var getTicketsButton = document.querySelector('.buttons button');

// Add event listener for form validation before opening the ticket page
getTicketsButton.addEventListener('click', function() {
    // Check if all required fields are filled
    var issuesSelected = document.querySelector('.selectBtn[data-type="firstOption"]').textContent.trim();
    var forSelected = document.querySelector('.selectBtn[data-type="firstOption"]').textContent.trim();
    var fixingDate = document.querySelector('.date-input-field').value.trim();
    var lastFixingDate = document.querySelectorAll('.date-input-field')[1].value.trim();
    var issuesExplainSelected = document.querySelector('.selectBtn[data-type="firstOption"]').textContent.trim();
    var email = document.getElementById('email').value.trim(); // Retrieve email value

    // Check if any required field is empty
    if (!issuesSelected || !forSelected || !fixingDate || !lastFixingDate || !issuesExplainSelected || !email) {
        // Display error message if any required field is not filled
        Swal.fire({
            title: "Error!",
            text: "Please fill all the required fields before getting the ticket.",
            icon: "error",
            iconHtml: '<span style="color:#ff0000;font-size:1em;">&#10060;</span>' // Adjust font-size here
        });
    } else {
        // All required fields are filled, proceed to get ticket
        window.open('hht.html', '_blank');
        // Send email with the provided email address
        sendEmail(email);
    }
});
