console.log("js");

let form = document.getElementById("loginForm")
let email = document.getElementById("email")
let password = document.getElementById("password")
let emailError = document.getElementById("emailError")
let passwordError = document.getElementById("passwordError")
let message = document.getElementById("message")
let showPassword = document.getElementById("showPassword")
 
showPassword.addEventListener("change", function(){
    if ( showPassword.checked) {
        password.type = "text"
    }
    else{
        password.type = "password"
    }
})


form.addEventListener("submit", function(event){
    event.preventDefault()
     emailError.innerText = ""
     passwordError.innerText = ""
     message.innerText = ""
     message.className = ""
     let valid = true
     if(email.value.trim() === "") {
        emailError.innerText = "Please enter your email"
        valid = false
     }else if (!email.value.includes("@") || email.value.includes(".")){
        emailError.innerText = "Please enter a valid email"
        valid = false
     } 
     if(password.value.trim() === ""){
        passwordError.innerText = "Please enter your password"
        valid = false
     }else if (password.value.length < 4) {
        passwordError.innerText = "Password must be at least 4 characters."
        valid = false
     }
     if(valid) {
        message.innerText = "Welcome to LUME! Your form is valid."
        message.className = "success"
     }
})

document.getElementById("forgotPassword").addEventListener("click", function(event){
    event.preventDefault()
    message.innerText = "Please contact support to reset your password."
    message.className = "error"
})

document.getElementById("createAccount").addEventListener("click", function(event){
    event.preventDefault()
    message.innerText = "Account registration will be available soon."
    message.className = "error"
})
