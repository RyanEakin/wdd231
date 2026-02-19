import { WordColorer } from "./colortext.mjs";
import { CSSExamples, JSExamples } from "../data/codereferences.mjs";
const dealer = document.querySelector('.pageContent');

const displayExamples = () => {

    let listChoice = (window.location.pathname === "/wdd231/final/styling.html")
        ? CSSExamples // if it is true, then use this
        : JSExamples; // if it is false, then use this

    listChoice.forEach((example) => {
        const deck = document.createElement('div');

        const front = document.createElement('div');
        const glass = document.createElement('label');
        const view = document.createElement('article');

        const back = document.createElement('div');
        const definer = document.createElement('label');
        const box = document.createElement('div');

        deck.setAttribute('class', "slice");

        front.setAttribute('class', "border-box");

        back.setAttribute('class', "border-box");

        box.innerHTML = WordColorer(example);

        view.setAttribute('class', "example")
        glass.appendChild(view);
        glass.setAttribute('aria-label', "visual example");
        front.appendChild(glass);

        box.setAttribute('class', "code");
        definer.appendChild(box)
        definer.setAttribute('aria-label', "code-box");
        back.appendChild(definer);

        deck.appendChild(front);
        deck.appendChild(back);
        dealer.appendChild(deck);
        //});
    });

    //document.getElementById('refreshCode').addEventListener('click', function () {
    // Get the CSS and JavaScript input values
    //    const cssCode = document.getElementById('cssInput').value;
    //    const jsCode = document.getElementById('jsInput').value;

    // Add the CSS to the page
    //    style.appendChild(document.createTextNode(cssCode));
    //    document.head.appendChild(style);

    // Execute the JavaScript code
    //    script.appendChild(document.createTextNode(jsCode));
    //    document.body.appendChild(script);
    //});
}

function getmemberData() {
    // Directly use revelations imported from the .mjs file
    try {
        // Display the revealings without an async fetch
        displayExamples(revelations.revealings);
    } catch (error) {
        console.log(error);
    }
}

//getmemberData();
displayExamples();
