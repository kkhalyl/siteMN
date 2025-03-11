const slider = document.querySelector('.slider-range');
const overlay = document.querySelector('.slider-overlay');
const playButton = document.querySelector('#playButton'); // Get the play button
const video = document.querySelector('#yourVideoElement'); // Replace with your video element selector

slider.addEventListener('input', () => {
    overlay.style.width = `${slider.value}%`;
    if (slider.value == slider.max) {
        slider.classList.add('hidden'); // Hide the slider
        playButton.classList.remove('hidden'); // Show the play button
    } else {
        slider.classList.remove('hidden'); // Show the slider
        playButton.classList.add('hidden'); // Hide the play button
    }
});

playButton.addEventListener('click', () => {
    video.classList.remove('hidden'); // Mostra o vídeo
    video.play().catch(error => {
        console.error('Erro ao reproduzir o vídeo:', error);
    });
});
