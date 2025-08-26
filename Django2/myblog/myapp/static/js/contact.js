function validateContactForm() {
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

   
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return false;
    }

    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    alert("Message sent successfully!");
    return true;
}
