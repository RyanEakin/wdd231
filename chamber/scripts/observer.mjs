document.addEventListener("DOMContentLoaded", function () {
    const badges = document.querySelectorAll(".badge");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.5 // 50% of the card must be in view to trigger
    });

    badges.forEach(badge => {
        observer.observe(badge); // Start observing each card
    });
});