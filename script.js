function validateForm() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;
    var passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;

    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("All fields must be filled out.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits and contain only numeric values.");
        return false;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 7 characters.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Registration successful!");
    return true;
}
