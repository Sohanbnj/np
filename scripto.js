let otp_val; // Declare otp_val as a global variable

function sendOTP() {
    const emailField = document.getElementById('email');
    const otp_inp = document.getElementById('otp_inp');
    // Generate and send OTP
    otp_val = Math.floor(Math.random() * 10000000); // Assign value to otp_val
    console.log("Generated OTP:", otp_val); // Add this line for debugging

    let emailbody = `<h2>Your OTP is ${otp_val}</h2>`;

    Email.send({
        SecureToken: "7ea34b65-10c9-4760-930f-3e683fc36f53",
        To: "techhelp.sodex@gmail.com",
        From: "techhelp.sodex@gmail.com",
        Subject: "OTP Authentication",
        Body: emailbody,
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "OTP sent Successfully",
                    text: "OTP sent successfully ",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Failed to send OTP",
                    text: "There was an error sending OTP. Please try again later.",
                    icon: "error"
                });
            }
        }
    );
}

function buyTicket() {
    const otp_inp = document.getElementById('otp_inp');
    const enteredOTP = parseInt(otp_inp.value.trim()); // Parse entered OTP as integer

    console.log("Entered OTP:", enteredOTP); // Add this line for debugging

    if (enteredOTP === otp_val) { // Use strict comparison
        Swal.fire({
            title: "Ticket Bought Successfully!",
            text: "Thank you for purchasing the ticket.",
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "Failed!!",
            text: "Invalid OTP!!!",
            icon: "error",
            iconHtml: '<span style="color:#ff0000;font-size:1em;">&#10060;</span>'
        });
    }
}

// Add event listeners to buttons
document.getElementById('getCodeBtn').addEventListener('click', sendOTP);
document.getElementById('otp_btn').addEventListener('click', buyTicket);
