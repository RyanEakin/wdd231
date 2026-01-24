const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".bar");

const twilight = document.getElementById("mode-toggle")
const content = document.querySelector("body")

const list = document.querySelector(".compact");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

twilight.addEventListener("click", () => {
    content.classList.toggle("light-mode");
    content.classList.toggle("dark-mode");;
});