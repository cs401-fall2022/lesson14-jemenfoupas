/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World";
}
;
/**
 * the function switch the color scheme of the first content box
 */
function switchColors() {
    // gets the box that contains the title
    var title = document.getElementById("firstTitle");
    // gets the box that contains the content 
    var box = document.getElementById("firstBox");
    // this if statement switch the color scheme
    if (title != null && box != null) {
        if (title.style.backgroundColor != "rgb(214, 67, 9)") {
            title.style.backgroundColor = "rgb(214, 67, 9)";
            title.style.borderColor = "rgb(0, 55, 161)";
            box.style.borderColor = "rgb(0, 55, 161)";
        }
        else {
            title.style.backgroundColor = "rgb(0, 55, 161)";
            title.style.borderColor = "rgb(214, 67, 9)";
            box.style.borderColor = "rgb(214, 67, 9)";
        }
    }
}
export { hello, switchColors };
//# sourceMappingURL=app.js.map