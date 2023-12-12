// darck mode
let btnMode = document.querySelector(".said-darck");

btnMode.addEventListener("click", () => {
    let array = document.querySelectorAll(".dark")
    let arraytext = document.querySelectorAll('.lighttext');
    console.log(arraytext);
    arraytext.forEach(element => {
        element.classList.toggle("lighttextt")
    })
    array.forEach(element => {
        element.classList.toggle("sombre");
    });
})

// modal conexion
let btn_open_modal = document.querySelectorAll(".btn-open-modal");
let div_modal = document.querySelectorAll(".div-modal");
let btn_close_modal = document.querySelectorAll(".btn-close-modal");
let video = document.querySelectorAll(".myvideo");

let myBody = document.body;

const openModal = (div) => {
    div.classList.remove("modal-no-show");
    div.classList.add("modal-show");
    myBody.classList.add("body-modal-open");
}

const closeModal = (div) => {
    div.classList.add("modal-no-show");
    div.classList.remove("modal-show");
    myBody.classList.remove("body-modal-open");
    video.forEach(element => {
        var src = element.src;
        element.src = src;
    });
}

for (let index = 0; index < btn_open_modal.length; index++) {

    let btnElementOpen = btn_open_modal[index];
    let idBtnOpen = btnElementOpen.getAttribute("id");

    for (let idx = 0; idx < div_modal.length; idx++) {
        let divElement = div_modal[idx];
        let idDiv = divElement.getAttribute("id");

        if (idBtnOpen == idDiv) {
            btn_open_modal[index].addEventListener("click", () => {
                openModal(div_modal[idx])
            })
        }

        for (let i = 0; i < btn_close_modal.length; i++) {
            let btnElementClose = btn_close_modal[i];
            let idBtnClose = btnElementClose.getAttribute("id");

            if (idBtnClose == idDiv) {
                btn_close_modal[i].addEventListener("click", () => {
                    closeModal(div_modal[idx]);
                })
            }
        }
    }
}


// scrolup
let scroll_up = document.querySelector(".up")
window.onscroll = function () {
    if (this.scrollY >= 500) {
        scroll_up.classList.add("show")
    } else {
        scroll_up.classList.remove("show")

    }
}
scroll_up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})
// section 5 tabs

let li_section5 = document.querySelectorAll(".li-section5");
let content_tabs = document.querySelectorAll(".content");

console.log(content_tabs);


for (let i = 0; i < li_section5.length; i++) {
    let element = li_section5[i];
    element.addEventListener("click", (event) => {
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
        } else if (event.target.classList.contains("two")) {
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.remove("d-none")
            }
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.add("d-none")
            }
            content_tabs[1].classList.remove("d-none")
        } else if (event.target.classList.contains("three")) {
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.remove("d-none")
            }
            for (let i = 0; i < content_tabs.length; i++) {
                let element = content_tabs[i];
                element.classList.add("d-none")
            }
            content_tabs[2].classList.remove("d-none")
        } else if (event.target.classList.contains("four")) {
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
    element.addEventListener("click", (event) => {
        for (let i = 0; i < dote.length; i++) {
            let element = dote[i];
            element.classList.remove("active")
        }
        event.target.classList.add("active")
    })

}

const carouselMove = () => {
    carousel.appendChild(carousel.firstElementChild);
}
const carouselMovePrevious = () => {
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
}


const previous = () => {
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

document.addEventListener("DOMContentLoaded", function () {
    // Cache the navigation links
    var navLinks = document.querySelectorAll('nav .navbar-nav a');
    console.log(navLinks);
    // Smooth scrolling for all links
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            if (!event.target.href.includes('home')) {
                event.preventDefault();
                var targetId = this.getAttribute("href").substring(1);
                var target = document.getElementById(targetId);
                var offset = target.offsetTop - 50;
                // Adjusted for better accuracy

                navLinks.forEach((navItem) => {
                    navItem.classList.remove("cc");
                });

                // Add the "cc" class to the clicked "nav-item" element
                event.target.classList.add("cc");

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            } else {
                event.preventDefault();
                var targetId = this.getAttribute("href").substring(1);
                var target = document.getElementById(targetId);
                // Adjusted for better accuracy

                navLinks.forEach((navItem) => {
                    navItem.classList.remove("cc");
                });

                // Add the "cc" class to the clicked "nav-item" element
                event.target.classList.add("cc");

                window.scrollTo({
                    top: target,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add class 'active' to the navigation link when scrolling to the corresponding section
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        let section = document.querySelectorAll('section');
        // console.log(section);
        // Iterate through each section and check if the scroll position is within the section's range
        section.forEach(function (section) {
            if (section.getAttribute('id')) {

                if (!section.getAttribute('id').includes('home')) {
                    // console.log(section);
                    var sectionTop = section.offsetTop - 50; // Adjusted for better accuracy
                    // console.log(sectionTop);
                    var sectionId = section.getAttribute("id");
                    // console.log(sectionId);
                    var correspondingNavLink = document.querySelector('nav .navbar-nav a[href="#' + sectionId + '"]');
                    // console.log(correspondingNavLink);
                    if (scrollPosition >= sectionTop) {
                        // console.log(correspondingNavLink);
                        // Remove 'active' class from all links and add it to the corresponding link
                        navLinks.forEach(link => {link.classList.remove("cc")});
                        correspondingNavLink.classList.add("cc");
                    }
                }else if (section.getAttribute('id').includes('home')) {
                    console.log('home');
                    var sectionTop = section.offsetTop ; // Adjusted for better accuracy
                    var correspondingNavLink = document.querySelector('nav .navbar-nav a[href="#' + "home" + '"]');
                    // console.log(correspondingNavLink);
                    if (scrollPosition <= sectionTop) {
                        // console.log(correspondingNavLink);
                        // Remove 'active' class from all links and add it to the corresponding link
                        navLinks.forEach(link => {link.classList.remove("cc")});
                        correspondingNavLink.classList.add("cc");
                    }
                }
            }
        });
    });
});

// gsap animation


gsap.from("#logo",1,{
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav div ul li",1,{
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.05)
TweenMax.staggerFrom("#conexion",1,{
    opacity: 0,
    x: -20,
    delay:0.5,
    ease: Power3.easeInOut
})
TweenMax.staggerFrom(".said-darck",1,{
    opacity: 0,
    x: -20,
    delay:0.5,
    ease: Power3.easeInOut
})
TweenMax.from("#image",2,{
    rotation:95,
    opacity: 0,
    y: -800,
    delay:0.5,
    ease: Expo.easeInOut
})
TweenMax.from("#texetone",1,{
    opacity: 0,
    y: -500,
    delay:0.5,
    ease: Expo.easeInOut
})
TweenMax.from("#texettwo",1,{
    opacity: 0,
    x: -500,
    delay:0.5,
    ease: Power3.easeInOut
})
TweenMax.from("#buttonone",1,{
    opacity: 0,
    x: -500,
    delay:0.5,
    ease: Power3.easeInOut
})
TweenMax.from("#buttontwo",1,{
    opacity: 0,
    x: -500,
    delay:0.5,
    ease: Power3.easeInOut
})
