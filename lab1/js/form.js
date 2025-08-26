function validateForm() {
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let salutation = document.getElementById("salutation").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let file = document.getElementById("cvFile").files[0];

    
    if (firstName === "" || lastName === "" || email === "" || address === "" || salutation === "--None--" || !gender) {
        alert("All fields are required.");
        return false;
    }

    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    if (file && file.type !== "application/pdf") {
        alert("Please upload a PDF file for your CV.");
        return false;
    }

    alert("Success!");
    return true;
}



