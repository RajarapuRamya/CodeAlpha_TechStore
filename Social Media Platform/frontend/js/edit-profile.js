document
.getElementById("editProfileForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const fullname =
    document.getElementById("fullname").value;

    const bio =
    document.getElementById("bio").value;

    const email =
    document.getElementById("email").value;

    localStorage.setItem("fullname", fullname);
    localStorage.setItem("bio", bio);
    localStorage.setItem("email", email);

    alert("Profile Updated Successfully!");

    window.location.href = "profile.html";

});