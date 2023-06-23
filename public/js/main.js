// darck mode
let btnMode = document.querySelector(".said-darck");

btnMode.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("sombre")
})

// modal conexion
let btn_open_modal = document.querySelectorAll(".btn-open-modal");
let div_modal = document.querySelectorAll(".div-modal");
let btn_close_modal = document.querySelectorAll(".btn-close-modal");

let myBody = document.body ;

const openModal = (div) => {
    div.classList.remove("modal-no-show");
    div.classList.add("modal-show");
    myBody.classList.add("body-modal-open");
}

const closeModal = (div) => {
    div.classList.add("modal-no-show");
    div.classList.remove("modal-show");
    myBody.classList.remove("body-modal-open");
}

for (let index = 0; index < btn_open_modal.length; index++) {

    let btnElementOpen = btn_open_modal[index];
    let idBtnOpen = btnElementOpen.getAttribute("id");

    for (let idx = 0; idx < div_modal.length; idx++) {
        let divElement = div_modal[idx];
        let idDiv = divElement.getAttribute("id");

        if (idBtnOpen == idDiv) {
            btn_open_modal[index].addEventListener("click" , () => {
                openModal(div_modal[idx])
            })
        }

        for (let i = 0; i < btn_close_modal.length; i++) {
            let btnElementClose = btn_close_modal[i];
            let idBtnClose = btnElementClose.getAttribute("id");

            if (idBtnClose == idDiv) {
                btn_close_modal[i].addEventListener("click" , () => {
                    closeModal(div_modal[idx]);
                })
            }
        }
    }
}

// border hover
let navUl = document.querySelectorAll(".nav-item");
console.log(navUl);

for (let i = 0; i < navUl.length; i++) {
    let element = navUl[i];
    element.addEventListener("click",(e)=>{
            for (let i = 0; i < navUl.length; i++) {
                let euu = navUl[i];
                euu.classList.remove("cc")
            }
e.target.classList.add("cc")
    })
   
}
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


