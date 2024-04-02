const form = document.querySelector("form");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "techhelp.sodex@gmail.com",
        Password : "85A0BDB6FF671956C4EFDB1E911531AF506B",
        To : 'techhelp.sodex@gmail.com',
        From : "techhelp.sodex@gmail.com",
        Subject : "Message from Sodex Website", // You may want to specify a subject here
        Body : bodyMessage
    }).then(
      message => {
        if (message === "OK") {
            Swal.fire({
                title: "Successful!",
                text: "Message sent successfully",
                icon: "success"
            });
        }
      }
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
});
