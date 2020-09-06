const backToTopButton = document.getElementById("btn-back-to-top");

window.addEventListener("scroll", scrollFunction); //two paramenters

function scrollFunction(){
if(window.pageYOffset >= 100){ // show backToTopButton
backToTopButton.style.display = "block";

}
else{ // hide backToTopButton
    backToTopButton.style.display = "none";  // set the value of this display property to none

}

}
backToTopButton.addEventListener("click", clickFunction);

    function clickFunction(){
        window.scrollTo(0,0);

        
    }

