// section 5 tabs
let li_section5 = document.querySelectorAll(".li-section5");
let content_tabs = document.querySelectorAll(".content");

console.log(content_tabs);


for (let i = 0; i < li_section5.length; i++) {
    let element = li_section5[i];
    element.addEventListener("click",(event)=>{
        for (let i = 0; i < li_section5.length; i++) {
            let element = li_section5[i];
            element.classList.remove("ac")
        }
        event.target.classList.add("ac");
        if (event.target.classList.contains("one")) {
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.remove("d-none")
            }
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.add("d-none")
            }
            content_tabs[0].classList.remove("d-none")
        }else if (event.target.classList.contains("two")) {
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.remove("d-none")
            }
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.add("d-none")
            }
            content_tabs[1].classList.remove("d-none")
        }else if (event.target.classList.contains("three")) {
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.remove("d-none")
            }
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.add("d-none")
            }
            content_tabs[2].classList.remove("d-none")
        }else if (event.target.classList.contains("four")) {
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.remove("d-none")
            }
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.add("d-none")
            }
            content_tabs[3].classList.remove("d-none")
        }
    })
}
//!!carousels

let carousel = document.querySelector(".carousels-div-mother");
console.log(carousel);
let dote = document.querySelectorAll(".dote")
for (let i = 0; i < dote.length; i++) {
    let element = dote[i];
    element.addEventListener("click",(event)=>{
        for (let i = 0; i < dote.length; i++) {
            let element = dote[i];
            element.classList.remove("active")
        }
        event.target.classList.add("active")
    })
    
}

const carouselMove =()=>{
    carousel.appendChild(carousel.firstElementChild);
}
const carouselMovePrevious =()=>{
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
}


const previous =()=>{
    carousel.insertBefore(carousel.firstElementChild, carousel.lastElementChild.nextElementSibling)
}
// !!
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dote");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.border = "0px solid red";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    dots[slideIndex - 1].className += " active";
  }
  
  
  let slideIndex = 0;
  
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.border = "0px solid red";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.border = "5px solid red";
  
    
  }
  
  
  function scrollToSlide(slideIndex) {
    showSlides();
    let slides = document.getElementsByClassName("slides")[0];
    let slideWidth = slides.offsetWidth;
    let slideCount = slides.children.length;
  
    let scrollDistance = slideWidth * slideIndex;
    slides.style.transform = "translateX(-" + scrollDistance + "px)";
  
    let dots = document.getElementsByClassName("dote");
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[slideIndex].classList.add("active");
  
    let firstSlide = slides.children[0];
    let lastSlide = slides.children[slideCount - 1];
  
    if (slideIndex === 0) {
  
      slides.style.transition = "none";
      slides.style.transform = "translateX(-" + slideWidth + "px)";
      setTimeout(function () {
        slides.style.transition = "transform 1s";
        slides.appendChild(lastSlide);
        slides.style.transform = "translateX(0)";
      }, 0);
    } else if (slideIndex === slideCount - 1) {
      slides.style.transition = "none";
      slides.style.transform = "translateX(-" + (slideWidth * (slideCount - 1)) + "px)";
      setTimeout(function () {
        slides.style.transition = "transform 1s";
        slides.insertBefore(firstSlide, lastSlide.nextSibling);
        slides.style.transform = "translateX(-" + slideWidth + "px)";
      }, 0);
    }
  }


