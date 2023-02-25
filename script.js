const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const slideImageEl = document.querySelector('.slide-img')
const imagesArr = document.querySelectorAll('img')
const imageUrls = getUrls();
const sliderEl = document.querySelector('.itk-slider')
const dots = Array.from(document.querySelectorAll('.dot'));

dots[0].classList.add('active')

function onDotClick() {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            removeActive();
            slideImageEl.src = imageUrls[index];
            dot.classList.add('active');
        } )
    });
}
onDotClick()



function removeActive() {
    dots.forEach(dot => {dot.classList.remove('active')})
}

function getUrls() {
    imagesArr.forEach(image => {
        image.style.display = 'none';
    })
    slideImageEl.style.display = 'block';
    
    let imageUrls = []
    
    for (let i=0; i<imagesArr.length; i++) {
        imageUrls[i] = imagesArr[i].src;
    }
    return imageUrls;
}

prevBtn.addEventListener('click', onPrevBtnClick)
nextBtn.addEventListener('click', onNextBtnClick)

let number = 0;
slideImageEl.src = getUrls()[number]

function onPrevBtnClick() {
     if (number == 0) {
        number = imageUrls.length-1
    } else {
        number--;
    }
    slideImageEl.src = imageUrls[number]
    removeActive()
    dots[number].classList.add('active')
}

function onNextBtnClick() {
    if (number == imageUrls.length-1) {
        number = 0;
    } else {
        number++;
    }
    slideImageEl.src = imageUrls[number]
    removeActive()
    dots[number].classList.add('active')
}