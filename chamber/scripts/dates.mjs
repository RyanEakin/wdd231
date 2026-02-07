const d = new Date();
const hoursBase = d.getHours();
const minutesBase = d.getMinutes();
const secondsBase = d.getSeconds();
const ampm = hoursBase >= 12 ? 'PM' : 'AM';
// ? = true ; : = false

const year = d.getFullYear();

document.getElementById("currentYear").innerHTML = "&copy; " + year;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

export const current_date = `${hoursBase}:${minutesBase}:${secondsBase} ${ampm}`;