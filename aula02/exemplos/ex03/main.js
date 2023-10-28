const images = ['images/sol.webp', 'images/lua.jpg'];
let currentIndex = 0;
let intervalId;

const imageElement = document.getElementById('image');

function toggleImage() {
    imageElement.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
        imageElement.style.opacity = 1;
    }, 500);
}

function startInterval() {
    intervalId = setInterval(toggleImage, 5000);
}

function stopInterval() {
    clearInterval(intervalId);
}


startInterval(); // Iniciar o intervalo automaticamente

imageElement.addEventListener('mouseenter', stopInterval);
imageElement.addEventListener('mouseleave', startInterval);
