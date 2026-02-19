const stamps = document.getElementById("timestamp");

const timestamp = new Date('2026-02-19T12:00:00'); // Static date
document.body.innerHTML += `<p>The static timestamp is: ${timestamp.toString()}</p>`;