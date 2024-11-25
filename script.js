// Typing effect for the name
document.addEventListener("DOMContentLoaded", function () {
    const name = "Samruddhi Mali"; // Replace with your name
    const dynamicName = document.getElementById("dynamic-name");
    let index = 0;

    function type() {
        if (index < name.length) {
            dynamicName.textContent += name.charAt(index);
            index++;
            setTimeout(type, 150); // Adjust typing speed here
        }
    }

    type();
});

// Basic interactivity for the contact form
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message!");
});
 