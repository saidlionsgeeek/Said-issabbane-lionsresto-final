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


