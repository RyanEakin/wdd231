const CSSkeywords = [
    "margin", "padding", "border", "background-color",
    "color", "font-size", "display", "flex",
    "grid", "width", "height", "text-align",
    "box-shadow", "opacity", "transition", "position",
    "top", "left", "right", "bottom", "z-index"
];

const CSSvalues = [
    "0", "1rem", "2rem", "10px", "auto", "none",
    "block", "inline", "flex", "grid", "hidden",
    "visible", "#ffffff", "#000000", "rgba(0, 0, 0, 0.5)",
    "solid", "dashed", "bold", "normal", "italic",
    "center", "right", "left", "100%", "50%",
    "100vh", "100vw", "ease", "linear"
];

const CSSspecial = [':', ';'];

const CSSstructure = [CSSkeywords, CSSvalues, CSSspecial];
//defines JavaScript Syntax Highlighting
const JSkeywords = [
    "var",
    "let",
    "const",
    "function",
    "if",
    "else",
    "for",
    "while",
    "switch",
    "case",
    "break",
    "continue",
    "return",
    "try",
    "catch",
    "throw",
    "async",
    "await",
    "import",
    "export",
    "new",
    "instanceof",
    "this",
    "null",
    "undefined",
    "true",
    "false",
    "class",
    "extends",
    "super",
    "static",
    "get",
    "set"
]
    ;
const JSvalues = [
    "null",                     // Represents absence of value
    "undefined",                // Represents unassigned variable
    "true",                     // Boolean true
    "false",                    // Boolean false
    "0",                        // Numeric value
    "1",                        // Numeric value
    "-1",                       // Numeric value
    "NaN",                      // Not-a-Number
    "Infinity",                 // Positive infinity
    "-Infinity",                // Negative infinity
    "\"string\"",              // String value (double quotes)
    "'string'",                // String value (single quotes)
    "``",                      // Template literals
    "[1, 2, 3]",               // Array notation
    "{\"key\": \"value\"}",    // Object notation
    "function() {}",           // Function expression
    "Symbol('key')",           // Symbol value
    "BigInt(123)",             // BigInt value
    "document",                 // DOM reference
    "window",                   // Global reference in browser
    "console",                  // Console reference for logging
    "localStorage",             // Web storage reference
    "sessionStorage",           // Web storage reference
    "Math.PI",                  // Mathematical constant
    "Math.random()",            // Random number generation
    "Date.now()",               // Current timestamp
    "new Date()",               // Current date object
    "JSON.parse()",             // JSON parsing
    "JSON.stringify()"          // JSON serialization

];
const JSspecial = ['{', '}', ';'];
const JSstructure = [JSkeywords, JSvalues, JSspecial];

function WordColorer(wordsToColor) {
    if (!Array.isArray(wordsToColor)) {
        throw new TypeError('give an array of words to color');
    }

    const structureChoice = JSstructure;

    let wasKey = false;

    wordsToColor.forEach(word => {
        let span = document.createElement('span');
        span.textContent = word;
        span.className = '';

        if (structureChoice[0].includes(word)) {
            span.className = 'keyword';
            wasKey = true;
        } else if (structureChoice[1].includes(word)) {
            span.className = 'value';
        } else if (structureChoice[2].includes(word)) {
            span.className = 'special';
            document.body.appendChild(span);
            const br = document.createElement('br');
            document.body.appendChild(br);
            return;
        } else {
            if (wasKey) {
                span.className = 'name';
            } else {
                span.className = 'text';
            }
            wasKey = false;
        }

        document.body.appendChild(span);
    });
}

// Sample words to color
const wordsToTest = [
    "const",         // Keyword
    "function",      // Keyword
    "if",            // Keyword
    "else",          // Keyword
    "10",            // Value
    "null",          // Value
    "true",          // Value
    ":",             // Special Character
    ":",
    "1rem",          // Value
    "margin",        // Keyword
    "text-align",    // Keyword
    "invalid_word",  // Basic Text
    "auto",          // Value
    ";",             // Special Character
    "padding",       // Keyword
    "rgba(0, 0, 0, 0.5)", // Value
    "this",          // Keyword
    "100vh",         // Value
    ";",
    "{",
    "}",
    "1",
    ";",
    "const",
    "hello"

];

// Call the function to test it
WordColorer(wordsToTest);

