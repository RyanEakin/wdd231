// Get the last visit time from localStorage
const lastVisitTime = localStorage.getItem('lastVisit');

// Check if the last visit time exists
if (lastVisitTime) {
    //get current date
    const toDate = new Date().getTime();

    // console.log(lastVisitTime);

    // console.log(toDate);

    const difference = toDate - lastVisitTime;
    // console.log(difference);

    const dayDiff = difference / (1000 * 3600 * 24);
    // console.log(dayDiff);

    if (dayDiff > 5) {
        // checks if the difference is more than 5 day long
        // Display the last visit time in days
        document.getElementById('last-visit').innerHTML = `<p>You last visited ${dayDiff} days ago. got any suggestions?</p>`;
    } else {
        // Display the less than a day message
        document.getElementById('last-visit').innerHTML = `<p>Back so soon! Awesome!</p>`;
    }

} else {
    document.getElementById('last-visit').innerHTML = "<p>Welcome! Let us know if you have any questions.</p>";
}

// Store the current date and time in localStorage
localStorage.setItem('lastVisit', new Date().getTime());