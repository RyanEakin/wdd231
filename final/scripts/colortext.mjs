export function WordColorer(wordsToColor) {

    //defines CSS Syntax Highlighting
    const CSSkeywords = [
        "margin",
        "padding",
        "border",
        "border-color",
        "background-color",
        "color",
        "font-size",
        "display",
        "rgba",
        "width",
        "height",
        "text-align",
        "box-shadow",
        "box-sizing",
        "justify-content",
        "grid-template-columns",
        "opacity",
        "transition",
        "position",
        "top",
        "left",
        "right",
        "bottom",
        "z-index",
        "gap",
        "@keyframes"
    ];
    const CSSvalues = [
        "0",
        "1rem",
        "2rem",
        "10px",
        "auto",
        "none",
        "block",
        "inline",
        "flex",
        "grid",
        "hidden",
        "visible",
        "#ffffff",
        "#000000",
        "solid",
        "dashed",
        "bold",
        "normal",
        "italic",
        "center",
        "right",
        "left",
        "100%",
        "50%",
        "100vh",
        "100vw",
        "transition",
        "ease",
        "linear",
        "flex",
        "grid",
    ];
    const CSSspecial = [':', "(", ")", '}', ';', '*/'];
    const CSSstructure = [CSSkeywords, CSSvalues, CSSspecial];

    //defines JavaScript Syntax Highlighting
    const JSkeywords = [
        "var",
        "let",
        "const",
        "function",
        "console",
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
        "undefined",
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
        "10",                       // Numeric value
        "100",                      // Numeric value
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
    const JSspecial = ['{', '}', ';', '', '', ''];
    const JSstructure = [JSkeywords, JSvalues, JSspecial];

    if (!Array.isArray(wordsToColor)) {
        throw new TypeError('give an array of words to color');
    }

    const numRegexp = /^[+-]?(\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)(,)?$/; // Regex to identify numbers (integers and floats)

    let structureChoice = (window.location.pathname === "/wdd231/final/styling.html")
        ? CSSstructure // if it is true, then use this
        : JSstructure; // if it is false, then use this

    let wasKey = false;
    let output = '<span>';

    wordsToColor.forEach(word => {
        let span = document.createElement('span');
        span.textContent = word;
        let spanClass = '';

        if (structureChoice[0].includes(word)) {
            spanClass = 'keyword';
            wasKey = true;
        } else if (structureChoice[1].includes(word) || numRegexp.test(word)) {
            spanClass = 'value';
            wasKey = false;
        }
        else if (structureChoice[2].includes(word)) {
            if (CSSstructure[2][3].includes(word) || CSSstructure[2][4].includes(word) || CSSstructure[2][5].includes(word) || JSstructure[2].includes(word)) {
                spanClass = 'special';
                output += `<span class="${spanClass}">${word}</span><br/>`
                return;
            } else {
                output += `<span>${word} </span>`
                return;
            }
        } else {
            if (wasKey) {
                spanClass = 'name';
            } else {
                spanClass = 'text';
            }
            wasKey = false;
        }

        output += `<span class="${spanClass}">${word}</span>`;
    });
    output += '</span>';
    return output.trim();
}