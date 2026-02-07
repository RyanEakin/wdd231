const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".bar");

const twilight = document.getElementById("mode-toggle")
const content = document.querySelector("body")

const toggle = document.querySelector(".list-view");
const list = document.querySelector(".cards");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

twilight.addEventListener("click", () => {
    content.classList.toggle("light-mode");
    content.classList.toggle("dark-mode");;
});

toggle.addEventListener("click", () => {
    if (document.getElementById("compact")) {
        list.removeAttribute('id');
    } else {
        list.setAttribute('id', 'compact');
    }
});