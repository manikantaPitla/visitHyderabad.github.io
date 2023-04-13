function navLinks() {
    let navLinks = document.getElementById("navLinks");
    let backBlur = document.getElementById("backBlur");
    let navCloseIcon = document.getElementById("navCloseIcon");

    navLinks.classList.toggle("nav-links-open")
    backBlur.classList.toggle("back-blur")


    if(navLinks.classList.contains("nav-links-open")){
        navCloseIcon.style.transform = "rotate(0deg)"
    }
    else{
        navCloseIcon.style.transform = "rotate(180deg)"
    }
        
}