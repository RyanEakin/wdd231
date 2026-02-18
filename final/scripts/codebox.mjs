import "../data/codereferences.json";
import { WordColorer } from colortext.mjs
const fronts = document.getElementById('pageContent');

const displayExamples = () => {

    example.forEach(() => {
        const deck = document.createElement('div');
        const front = document.createElement('div');
        const back = document.createElement('div');

        front.setAttribute('class', "border-box");

        if (boxState === "JS" || boxState === "CSS") {
            const style = document.createElement('textarea');
            style.setAttribute('class', "code");
            style.appendChild(document.createTextNode(cssCode));
            document.head.appendChild(style);
        }

        else {
            const backing = document.createElement('article');
            backing.setAttribute('class', "example")
        }


        front.appendChild();

        fronts.appendChild(front);
    });
}

document.getElementById('refreshCode').addEventListener('click', function () {
    // Get the CSS and JavaScript input values
    const cssCode = document.getElementById('cssInput').value;
    const jsCode = document.getElementById('jsInput').value;

    // Add the CSS to the page
    style.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(style);

    // Execute the JavaScript code
    script.appendChild(document.createTextNode(jsCode));
    document.body.appendChild(script);
});

function getmemberData() {
    // Directly use revelations imported from the .mjs file
    try {
        // Display the revealings without an async fetch
        displayExamples(revelations.revealings);
    } catch (error) {
        console.log(error);
    }
}

getmemberData();
