function sliderPlugin (activeSlide = 0) {
    const slides = document.querySelectorAll('.slides__item')

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            removeActiveClass()
            slide.classList.add('active')
        })

        const removeActiveClass = () => {
            slides.forEach(slide => {
                slide.classList.remove('active')
            });
        }
    }
}

sliderPlugin (2)