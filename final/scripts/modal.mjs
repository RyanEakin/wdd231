
const closeModal = document.querySelectorAll('.closeModal');


document.getElementById("homeModal").showModal();

closeModal.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.close();
    });
});
