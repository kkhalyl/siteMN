const slider = document.querySelector('.slider-range');
const overlay = document.querySelector('.slider-overlay img');

slider.addEventListener('input', (e) => {
    let sliderValue = e.target.value;
    overlay.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
});
