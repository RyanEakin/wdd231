//defines CSS Syntax Highlighting
const CSSkeywords = [];
const CSSvalues = [];
const CSSspecial = [];
const CSSstructure = [CSSkeywords, CSSvalues, CSSspecial];

//defines JavaScript Syntax Highlighting
const JSkeywords = [];
const JSvalues = [];
const JSspecial = ['{', '}', ';'];
const JSstructure = [JSkeywords, JSvalues, JSspecial];


export function WordColorer(wordsToColor) {
    if (!wordsToColor.isArray(arr)) {
        throw new TypeError('give an array of words to color');
    }

    try {

        let listChoice;

        let structureChoice;

        let wasFunc;

        if (window.location.pathname === "/wdd231/final/styling.html") {
            listChoice = "CSS";
            structureChoice = "CSSstructure";
        }
        else {
            listChoice = "JS";
            structureChoice = "JSstructure";
        }
        wordsToColor.forEach(word => {
            let span = document.createElement('span');
            span.textContent = word;

            switch (structureChoice) {
                case structureChoice[0].includes(word):
                    span.className = 'keyword';
                    wasFunc = true;
                case structureChoice[1].includes(word):
                    span.className = 'value';
                case structureChoice[2].includes(word):
                    const br = document.createElement('br');
                    document.body.appendChild('br');

                default:
                    if (wasFunc === true) {
                        span.className = 'name';
                        wasFunc = false;
                    } else {
                        span.className = 'text';
                    }
            }
        })
    } catch (error) {
        console.error(error.message);
    }
}