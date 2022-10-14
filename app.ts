/**
 * This returns the string hello
 * @returns the String hello
 */
function hello (): String {
    return "Hello World";
};


/**
 * turns demo red
 */
 function greeting() {
    
        let h = document.getElementById("greeting");
        if(h != null){
            h.style.opacity = "0";
        }
        let f = document.getElementById("farewell");
        if(f!= null){
            f.style.opacity = "1";
        }
        
      
}

/**
 * turns demo red
 */
 function farewell() {
        let h = document.getElementById("greeting");
        if(h != null){
            h.style.opacity = "1";
        }
        let f = document.getElementById("farewell");
        if(f!= null){
            f.style.opacity = "0";
        }
        
     
}

export {hello, greeting, farewell}
