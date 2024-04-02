const email = document.getElementById("email");
const form = document.getElementById("yourFormId"); // Make sure to replace "yourFormId" with the actual id of your form

function sendEmail() {
    const bodyMessage = ` Email: ${email.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "techhelp.sodex@gmail.com",
        Password : "85A0BDB6FF671956C4EFDB1E911531AF506B",
        To : 'techhelp.sodex@gmail.com',
        From : "techhelp.sodex@gmail.com",
        Subject : "Message from Sodex Website", // You may want to specify a subject here
        Body : bodyMessage
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
