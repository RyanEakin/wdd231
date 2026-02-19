import { WordColorer } from "./colortext.mjs";
import { CSSExamples, JSExamples, JSpages, CSSpages } from "../data/codereferences.mjs";
const dealer = document.querySelector('.pageContent');

const displayExamples = () => {

    let listChoice = (window.location.pathname === "/wdd231/final/styling.html")
        ? CSSExamples // if it is true, then use this
        : JSExamples; // if it is false, then use this

    let pageChoice = (window.location.pathname === "/wdd231/final/styling.html")
        ? CSSpages // if it is true, then use this
        : JSpages; // if it is false, then use this

    listChoice.forEach((example, index) => {
        const deck = document.createElement('div');

        const front = document.createElement('div');
        const glass = document.createElement('article');
        const view = document.createElement('iframe');

        const back = document.createElement('div');
        const definer = document.createElement('label');
        const box = document.createElement('div');

        deck.setAttribute('class', "slice");

        front.setAttribute('class', "border-box");

        back.setAttribute('class', "border-box");

        box.innerHTML = WordColorer(example);

        view.setAttribute('class', "example")
        view.setAttribute('src', pageChoice[index])
        view.setAttribute('title', "Example Website");
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


//getmemberData();
displayExamples();
