const elBlockImg = document.querySelectorAll('.block__img');
const elBtnPrev = document.querySelector('.btn-prev');
const elBtnNext = document.querySelector('.btn-next');
const elSlider = document.querySelector('.slider');

let i = 0;


// Slider Auto
function sliderNext () {
    elBlockImg[i].classList.remove('active_img');
    i++;

    if(i >= elBlockImg.length) {
        i = 0;
    }

    elBlockImg[i].classList.add('active_img');
}

// Start Slider
function startAuto () {
    return interval = setInterval(sliderNext, 2000)
}

startAuto();

// Stop Slider

function stopAuto () {
    clearInterval(interval);
}

elSlider.onmouseover = function () {
    stopAuto();
}

elSlider.onmouseout = function () {
    startAuto();
}

// NOT Auto:

// NEXT
elBtnNext.addEventListener('click', function() {
    elBlockImg[i].classList.remove('active_img');
    i++;

    if(i >= elBlockImg.length) {
        i = 0;
    }

    elBlockImg[i].classList.add('active_img');
    
})

// PREV
elBtnPrev.addEventListener('click', function () {
    elBlockImg[i].classList.remove('active_img');
    i--;
    
    if (i < 0) {
        i = elBlockImg.length - 1;
    } 
    
    elBlockImg[i].classList.add('active_img');

    function startAuto () {
        return interval = setInterval(sliderNext, 2000)
    }
    
    stopAuto();
})
