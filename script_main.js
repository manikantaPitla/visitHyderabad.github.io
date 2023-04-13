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



//close menubar on scroll
window.onscroll = function() {
    let navLinks = document.getElementById("navLinks");
    navLinks.classList.remove("nav-links-open")
    backBlur.classList.remove("back-blur")
}



let sections = document.querySelectorAll('[id^="section"]');

if (sections.length > 1) {
  let sectionOne = sections[0];
  sections.forEach((section) => {
    if (section != sectionOne) {
      $(section).css("display", "none");
    }
  });
}

const display = (sectionId) => {
  makeRemainingScreensInvisible(sectionId);
  let section = document.getElementById(sectionId);
  $(section).css("display", "block");
  window.scrollTo(0, 0);
};

const makeRemainingScreensInvisible = (sectionId) => {
  let sections = document.querySelectorAll('[id^="section"]');
  sections.forEach((section) => {
    if ($(section).attr("id") != sectionId) {
      $(section).css("display", "none");
    }
  });
};


// let places = document.getElementById("sectionPlacesContainer")
// let home = document.getElementById("sectionHomeContainer")
// let exploreBtn = document.getElementById("exploreBtn")
// places.style.display = "none";

// exploreBtn.onclick = () =>{
//     if(home.style.display = "block"){
//         home.style.display = "none";
//         places.style.display = "block";
//     }

// }

