const FormSignup = document.getElementById('signupForm');

FormSignup.addEventListener("submit", () => {
    const signup = {
        email: email.value,
        password: password.value
    }
    fetch("/api/SignUP", {
        method: "POST",
        body: JSON.stringify(signup),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.status = "error"){
            success.style.display = "none";
            error.style.display = "block";
            error.innerText = data.error;

        }
        else{
            error.style.display = "none",
            success.style.display = "block",
            success.innerText = data.success;
        }
    })
})

