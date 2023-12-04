const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

function OpenMenu()
{
    mobileMenu.style.display = "flex";
    body.style.overflowY = "hidden";
}

function CloseMenu()
{
    mobileMenu.style.display = "none";
    body.style.overflowY = "scroll";
}




let myButton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function ScrollToTopFunction()
{
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        })

    // Safari
    document.body.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        })
}