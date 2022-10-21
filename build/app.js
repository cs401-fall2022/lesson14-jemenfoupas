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
    // if(document.body.style.backgroundColor != "rgb(188, 195, 208)" ){
    //     document.body.style.backgroundColor = "rgb(188, 195, 208)";
    // } else {
    //     document.body.style.backgroundColor = "black";
    // }
    var title = document.getElementById("firstTitle");
    var box = document.getElementById("firstBox");
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
export { hello, greeting };
//# sourceMappingURL=app.js.map