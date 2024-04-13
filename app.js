// window.onload = function() {
//     let password = document.getElementById("search-bar");
//     let seePassword = document.getElementById("show-button");

//     function showPassword(){
//         if (seePassword.innerText === "Show Password") {
//             password.type = "text";
//             seePassword.innerText = "Hide Password";
//         } else {
//             password.type = "password";
//             seePassword.innerText = "Show Password";
//         }
//     }

//     seePassword.addEventListener('click', showPassword);
// }


let button = document.getElementById('mode-switcher');
let body = document.body;

button.addEventListener('click', function() {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});
