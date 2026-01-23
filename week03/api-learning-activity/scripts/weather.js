const url = '//api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=INSERT_OPENWEATHER_API_KEY_HERE'
// no need for https protocol portion, automatically makes it or uses most appropriate protocol

const temperature = document.getElementById('current-temp');
const icon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
            // displayResults(data); // this also works for parsing through JSON data
        }
        else {
            throw Error(await response.text());
        }

    }
    catch (error) {
        console.log(error);
    }
}

async function displayResults(data) {

    console.log(data)
    temperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconurl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;
    icon.setAttribute('loading', 'lazy');
    icon.setAttribute('src', iconurl);
    captionDesc.textContent = `${desc}`;
}

apiFetch().then(data => displayResults(data));
//this needs to be remembered as the CORRECT way to access JSON objects via Promises
// because it allows the first function to work. and THEN the next function to begin work