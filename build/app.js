/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World";
}
;
var h = document.getElementById("greeting");
/**
 * turns demo red
 */
function greeting() {
    if (document != null) {
        var h_1 = document.getElementById("greeting");
        if (h_1 != null) {
            h_1.style.opacity = "0";
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
        var h_2 = document.getElementById("greeting");
        if (h_2 != null) {
            h_2.style.opacity = "1";
        }
        var f = document.getElementById("farewell");
        if (f != null) {
            f.style.opacity = "0";
        }
    }
}
export { hello, greeting, farewell };
//# sourceMappingURL=app.js.map