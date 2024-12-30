//tab interactive
let doctitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Comeback Senpai🥺";
});
window.addEventListener("focus", () => {
    document.title = doctitle;
});
