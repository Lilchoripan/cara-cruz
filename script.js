const coin = document.getElementById('coin');
const flipBtn = document.getElementById('flip-btn');
const resultText = document.getElementById('result');

let currentRotation = 0;

flipBtn.addEventListener('click', () => {
    flipBtn.disabled = true;
    resultText.textContent = "Girando...";

    const isHeads = Math.random() < 0.5;
    const extraDegrees = isHeads ? 0 : 180;
    currentRotation += 1800 + extraDegrees;

    coin.style.transform = `rotateY(${currentRotation}deg)`;

    setTimeout(() => {
        if (isHeads) {
            resultText.textContent = "¡Salió CARA!";
        } else {
            resultText.textContent = "¡Salió CRUZ!";
        }
        flipBtn.disabled = false;
    }, 3000);
});
