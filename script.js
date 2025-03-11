const slider = document.querySelector('.slider-range');
const overlayImage = document.querySelector('.slider-overlay img');

slider.addEventListener('input', (e) => {
    let sliderValue = e.target.value;
    overlayImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
});
slider.addEventListener('input', () => {
    overlayImage.style.width = `${slider.value}%`;
});
