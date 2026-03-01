function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var message = document.getElementById("message");

    if(user === "" || pass === "") {
        message.style.color = "orange";
        message.innerText = "Please fill all fields ⚠️";
        return;
    }

    if(user === "admin" && pass === "1234") {
        message.style.color = "green";
        message.innerText = "Login Successful ✅";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    } else {
        message.style.color = "red";
        message.innerText = "Wrong Username or Password ❌";
    }
}

// Enter key से भी login हो सके
document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        login();
    }
});