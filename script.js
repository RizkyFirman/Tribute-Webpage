//select the button
const btn = document.querySelector(".btn-toggle");

//select the stylesheet(link)
const theme = document.querySelector("#theme-link");

//listen for a click on the button
btn.addEventListener("click", function(){
    //if the current url contain style.css
    if(theme.getAttribute("href") == "light-theme.css") {
        //...then switch it to dark-theme.css
        theme.href = "dark-theme.css";
        //otherwise
    } else{
        //.... switch it to style.css(default)
        theme.href = "light-theme.css";
    }
});