// dom
const hamburgerBtn = document.querySelector(".hamburgerBTN");
const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");
const headTitle = document.querySelector(".headTitle");

// vars
let navIsVisible = false;


hamburgerBtn.addEventListener("click", () => {
    if(navIsVisible){
        makeNavHidden();
        navIsVisible = false;
    } else {
        makeNavVisible();
        navIsVisible = true;
    }
});

// functions
function makeNavVisible(){
    navigation.style.display = "inline";
    header.style.height = "30rem";
    headTitle.style.display = "none";
}

function makeNavHidden(){
    navigation.style.display = "none";
    header.style.height = "10rem";
    headTitle.style.display = "block";
}