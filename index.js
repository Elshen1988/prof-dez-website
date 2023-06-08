const carousel = document.querySelector('[js-carousel-wrapper]');
const arrows = document.querySelectorAll('[data-carousel-arrows]');
const carouselDots = document.querySelectorAll('[js-data-dots]');
const slideNumber = document.querySelector('[js-slide-number-text]');
let slideIndex = 0;
// add current slide number on the top
function addCurrentSlideNumber(slide, numberText) {
    const lengthOfSlide = slide.length;
    numberText.textContent = `${slideIndex + 1} / ${lengthOfSlide}`;
}
// function to add active slide attribute
function activateSlide (slides) {
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[slideIndex].setAttribute('data-active-slide', true);
}
// function to add active dots attribute
function activateDots(dots) {
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[slideIndex].setAttribute('data-active-dot', true);
}
// Below function will add or remove disabled attribute to the arrows
function disableArrows(slides, nextBtn, prevBtn) {
    let nextBtnBooleanValue = slideIndex >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = slideIndex <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}
// helper function to hide or show slides
function showslides(carouselWrapper, dots) {
    const slides = carouselWrapper.querySelectorAll('[js-carousel-item]');
    // Below commented code need to added only if we no need to disabled arrow once they reached to end
    // if (slideIndex > slides.length - 1) slideIndex = 0;
    // if (slideIndex < 0) slideIndex = slides.length - 1;
    // Below code need to added only if we need to disable the arrows once they reached to end
    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disableArrows(slides, nextBtn, prevBtn)
    activateSlide (slides);
    activateDots(dots);
    addCurrentSlideNumber(slides, slideNumber);
}
// function to navigate next or prev slide
function nextOrPrevSlide (dir) {
    if (dir === 'next') {
        slideIndex++;
        showslides(carousel, carouselDots);
    } else {
        slideIndex--;
        showslides(carousel, carouselDots);
    }
}
// function to activate current clicked dot vs current slide
function currentSlide(n) {
    slideIndex = n - 1;
    showslides(carousel, carouselDots);
}
// function to handle arrows click event
function handleArrowClickEvent(arrowBtn) {
    arrowBtn.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (arrow.dataset.dir === 'next') {
                nextOrPrevSlide('next');
            } else {
                nextOrPrevSlide('prev')
            }
        })
    });
}
// function to handle dots click event
function handleDotsClickEvent(dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex))
        })
    })
}
// handle all the click events
function handleClickEvents() {
    handleDotsClickEvent(carouselDots);
    handleArrowClickEvent(arrows);
    // We need to call this function here only if we need to disable the prev arrow on-load
    showslides(carousel, carouselDots);
}
handleClickEvents();

// service area............................
let colseImage=document.querySelectorAll(".colseImage")
let im1 =document.querySelector(".im1 ")
let im2 =document.querySelector(".im2 ")
let im3 =document.querySelector(".im3 ")

let click_Image1_Div=document.querySelector(".click_Image1_Div")
let click_Image2_Div=document.querySelector(".click_Image2_Div")
let click_Image3_Div=document.querySelector(".click_Image3_Div")



im1.addEventListener('click',()=>{

    click_Image1_Div.style.display="block"
   
})
im2.addEventListener('click',()=>{

    click_Image2_Div.style.display="block"
   
})
im3.addEventListener('click',()=>{

    click_Image3_Div.style.display="block"
   
})

colseImage.forEach((e)=>{
    e.addEventListener('click',()=>{

    click_Image1_Div.style.display="none"
    click_Image2_Div.style.display="none"
    click_Image3_Div.style.display="none"
   
})
})
// about our service area............................
let aboutServiceDivClick1=document.querySelector(".aboutServiceDivClick1")
let aboutServiceDivClick2=document.querySelector(".aboutServiceDivClick2")
let aboutServiceDivClick3=document.querySelector(".aboutServiceDivClick3")
let aboutServiceDivClick4=document.querySelector(".aboutServiceDivClick4")
let aboutServiceDiv1=document.querySelector(".aboutServiceDiv1")
let aboutServiceDiv2=document.querySelector(".aboutServiceDiv2")
let aboutServiceDiv3=document.querySelector(".aboutServiceDiv3")
let aboutServiceDiv4=document.querySelector(".aboutServiceDiv4")


aboutServiceDivClick1.addEventListener('click',()=>{

    aboutServiceDiv1.style.display="block"
    aboutServiceDiv2.style.display="none"
    aboutServiceDiv3.style.display="none"
    aboutServiceDiv4.style.display="none"
    aboutServiceDivClick1.style.background="#99a6ba"
    aboutServiceDivClick2.style.background="#e5e5e5"
    aboutServiceDivClick3.style.background="#e5e5e5"
    aboutServiceDivClick4.style.background="#e5e5e5"

})
aboutServiceDivClick2.addEventListener('click',()=>{

    aboutServiceDiv1.style.display="none"
    aboutServiceDiv2.style.display="block"
    aboutServiceDiv3.style.display="none"
    aboutServiceDiv4.style.display="none"
    aboutServiceDivClick1.style.background="#e5e5e5"
    aboutServiceDivClick2.style.background="#99a6ba"
    aboutServiceDivClick3.style.background="#e5e5e5"
    aboutServiceDivClick4.style.background="#e5e5e5"
   
})
aboutServiceDivClick3.addEventListener('click',()=>{

    aboutServiceDiv1.style.display="none"
    aboutServiceDiv2.style.display="none"
    aboutServiceDiv3.style.display="block"
    aboutServiceDiv4.style.display="none"
    aboutServiceDivClick1.style.background="#e5e5e5"
    aboutServiceDivClick2.style.background="#e5e5e5"
    aboutServiceDivClick3.style.background="#99a6ba"
    aboutServiceDivClick4.style.background="#e5e5e5"
   
})
aboutServiceDivClick4.addEventListener('click',()=>{

    aboutServiceDiv1.style.display="none"
    aboutServiceDiv2.style.display="none"
    aboutServiceDiv3.style.display="none"
    aboutServiceDiv4.style.display="block"
    aboutServiceDivClick1.style.background="#e5e5e5"
    aboutServiceDivClick2.style.background="#e5e5e5"
    aboutServiceDivClick3.style.background="#e5e5e5"
    aboutServiceDivClick4.style.background="#99a6ba"
   
})







