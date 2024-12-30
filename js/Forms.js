//tab interactive
let doctitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Comeback Senpai🥺";
});
window.addEventListener("focus", () => {
    document.title = doctitle;
});


const Links = document.querySelectorAll(".link");
const ForMs = document.querySelector(".formsContainer");

Links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        ForMs.classList.toggle("switch");
    })
})





















// just for eyeIcon
const LOck = document.querySelectorAll(".Lock"),
      UserIcon = document.querySelector(".userIcon"),
      lockIcon = document.querySelector('.LockIcon'),
      Username = document.querySelector(".user"),
      Password = document.querySelector('.password');



//changing the eye icon
const PasswordEye = document.querySelectorAll(".hideIcon");

PasswordEye.forEach(HideIcon => {
    HideIcon.addEventListener("click", () => {
        let EyeField =  HideIcon.parentElement.querySelectorAll(".Password")
        EyeField.forEach(Password => {
            if (Password.type === "password") {
                Password.type = "text";
                HideIcon.classList.replace("bxs-hide","bxs-show");
                return;
            }
            Password.type = "password";
            HideIcon.classList.replace("bxs-show","bxs-hide");
        })
    })
})


//toggle EyeLight

const clickableElements = document.querySelectorAll(".clickable");

clickableElements.forEach(e => {
    e.addEventListener('click', function() {
        this.classList.toggle('eyelight');
    });
});
