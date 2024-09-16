`use-strict`;




const slides = document.querySelectorAll(`.slide`);
const leftBtn = document.querySelector(`.left-btn`);
const rightBtn = document.querySelector(`.right-btn`);

let curSlide = -2;


slides.forEach((s,i) => {
    s.style.transform = `translateX(calc(${((i + curSlide) * 100)}% + ${((i + curSlide) * 30)}px) )`
})

rightBtn.addEventListener(`click`, () => {
    if(curSlide !== -4) {
        curSlide--;
        slides.forEach((s,i) => {
            s.style.transform = `translateX(calc(${((i + curSlide) * 100)}% + ${((i + curSlide) * 30)}px) )`
        })    
    }
})

leftBtn.addEventListener(`click`, () => {
    if(curSlide !== 0) {
        curSlide++;
        slides.forEach((s,i) => {
            s.style.transform = `translateX(calc(${((i + curSlide) * 100)}% + ${((i + curSlide) * 30)}px) )`
        })    
    }
})

