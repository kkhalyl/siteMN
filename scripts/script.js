const slider = document.querySelector('.slider-range');
const overlay = document.querySelector('.slider-overlay');

slider.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do slider

    // Verifica o estado atual do overlay (cheio ou vazio)
    const isOverlayFull = overlay.style.width === '100%';

    // Define a nova largura com base no estado atual
    const newWidth = isOverlayFull ? '0%' : '100%';

    // Aplica a transição suave e atualiza a largura
    overlay.style.transition = 'width 0.5s ease-in-out';
    overlay.style.width = newWidth;

    // Atualiza a posição do botão do slider
    slider.value = isOverlayFull ? 0 : 100;

    // Inverte o triângulo
    if (isOverlayFull) {
        slider.classList.remove('inverted'); // Volta a apontar para a direita
    } else {
        slider.classList.add('inverted'); // Aponta para a esquerda
    }
});