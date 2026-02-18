//import "../data/codereferences.json";
//import { WordColorer } from colortext.mjs
const dealer = document.querySelector('.pageContent');

const displayExamples = () => {

    //example.forEach(() => {
    const deck = document.createElement('div');

    const front = document.createElement('div');
    const glass = document.createElement('label');
    const view = document.createElement('article');

    const back = document.createElement('div');
    const definer = document.createElement('label');
    const box = document.createElement('textarea');

    deck.setAttribute('class', "slice");

    front.setAttribute('class', "border-box");
    glass.setAttribute('name', "visual-example")

    back.setAttribute('class', "border-box");
    definer.setAttribute('name', "code-box")

    //if (boxState === "CSS") {
    //    const box = document.createElement('textarea');
    //    box.setAttribute('class', "code");
    //    box.appendChild(document.createTextNode(cssCode));
    //    document.head.appendChild(style);
    //    back.appendChild(box);
    //}

    //else {

    //}
    view.setAttribute('class', "example")
    glass.appendChild(view);
    front.appendChild(glass);

    box.setAttribute('class', "code");
    definer.appendChild(box)
    back.appendChild(definer);

    deck.appendChild(front);
    deck.appendChild(back);
    dealer.appendChild(deck);
    //});
}

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
