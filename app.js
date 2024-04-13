window.onload = function() {
    let password = document.getElementById("search-bar");
    let seePassword = document.getElementById("show-button");

    function showPassword(){
        if (seePassword.innerText === "Show Password") {
            password.type = "text";
            seePassword.innerText = "Hide Password";
        } else {
            password.type = "password";
            seePassword.innerText = "Show Password";
        }
    }

    seePassword.addEventListener('click', showPassword);
}
