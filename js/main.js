const mobileMenu = document.querySelector(".mobile-menu");
const signupForm = document.getElementById("signup-form");
const body = document.querySelector("body");

// Menu
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

// Scroll to top feature
let myButton = document.getElementById("return-to-top-button");

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

// Sign up form
function OpenSignUpForm()
{
    signupForm.style.display = "block";
    body.style.overflowY = "hidden";
}

function CloseSignUpForm()
{
    signupForm.style.display = "none";
    body.style.overflowY = "scroll";
}