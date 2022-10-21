/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World";
}
;
/**
 * turns demo red
 */
function greeting() {
    if (document.body.style.backgroundColor != "white") {
        document.body.style.backgroundColor = "white";
    }
    else {
        document.body.style.backgroundColor = "black";
    }
}
export { hello, greeting };
//# sourceMappingURL=app.js.map