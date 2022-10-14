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
    if (document != null) {
        var h = document.getElementById("greeting");
        if (h != null) {
            h.style.opacity = "0";
        }
        var f = document.getElementById("farewell");
        if (f != null) {
            f.style.opacity = "1";
        }
    }
}
/**
 * turns demo red
 */
function farewell() {
    if (document != null) {
        var h = document.getElementById("greeting");
        if (h != null) {
            h.style.opacity = "1";
        }
        var f = document.getElementById("farewell");
        if (f != null) {
            f.style.opacity = "0";
        }
    }
}
export { hello, greeting, farewell };
//# sourceMappingURL=app.js.map