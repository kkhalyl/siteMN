const slider = document.querySelector('.slider-range');
const overlay = document.querySelector('.slider-overlay');

slider.addEventListener('input', (e) => {
    let sliderValue = e.target.value;
    overlay.style.width = `${sliderValue}%`;
});
