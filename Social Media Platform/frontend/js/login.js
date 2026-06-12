document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;

    let message =
    document.getElementById("message");

    if(email === "" || password === ""){
        message.style.color = "red";
        message.textContent =
        "Please fill all fields";
        return;
    }

    message.style.color = "green";
    message.textContent =
    "Login Successful!";

});