const photos = ["985719.jpg", "ghostface-in-scream-wallpaper-preview.jpg"]; // Adicione mais fotos conforme necessário
let currentIndex = 0;
const photoElement = document.getElementById('currentPhoto');
const counterElement = document.getElementById('counter');

// Função para mudar a foto
function changePhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    photoElement.src = photos[currentIndex];
}

// Loop de fotos
setInterval(changePhoto, 3000); // Troca de foto a cada 3 segundos

// Função para a contagem em tempo real
function updateCounter() {
    const startDate = new Date('2021-08-11T21:00:00'); // Defina a data inicial
    const now = new Date();
    const timeDiff = now - startDate;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    counterElement.innerText = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);