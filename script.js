const slider = document.querySelector('.slider-range');
const overlay = document.querySelector('.slider-overlay');

slider.addEventListener('input', () => {
    overlay.style.width = `${slider.value}%`;
});
