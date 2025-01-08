// Typed.js initialization
var typed = new Typed(".text", {
    strings: ["Computer Science Student", "Aspiring Network Engineer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// EmailJS integration
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Validate inputs
    if (!name || !email || !message) {
        alert("Please fill out all required fields.");
        return;
    }

    // Initialize EmailJS
    emailjs.init("jXFe0H5wf4D2kphVu"); // Public API key for initialization

    // Send email
    emailjs
        .send("service_9jxtw1a", "template_tgjmthg", {
            name: name,
            email: email,
            subject: subject,
            message: message,
        })
        .then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully!");
                document.getElementById("contactForm").reset(); // Reset the form
            },
            (error) => {
                console.error("FAILED...", error);
                alert("There was an error sending your message. Please try again later.");
            }
        );
});
