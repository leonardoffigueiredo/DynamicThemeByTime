function updateBackgroundAndTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeElement = document.getElementById('time');
    const imageElement = document.getElementById('background-image');
    const messageElement = document.getElementById('message');
    let backgroundColor = '';
    let imageSrc = '';
    let message = '';

    if (hours >= 6 && hours < 12) {
        // Manhã
        backgroundColor = '#FFD700'; // Amarelo claro
        imageSrc = 'images/morning-time.png'; // Substitua pelo caminho da imagem do sol
        message = 'Bom dia';
    } else if (hours >= 12 && hours < 18) {
        // Tarde
        backgroundColor = '#FF8C00'; // Laranja
        imageSrc = 'images/afternoon-time.png'; // Substitua pelo caminho da imagem do dia
        message = 'Boa tarde';
    } else {
        // Noite
        backgroundColor = '#001f3f'; // Azul escuro
        imageSrc = 'images/night-time.png'; // Substitua pelo caminho da imagem da lua
        message = 'Boa noite';
    }

    document.body.style.backgroundColor = backgroundColor;
    imageElement.src = imageSrc;
    timeElement.textContent = now.toLocaleTimeString('pt-BR');
    messageElement.textContent = message;
}

// Atualiza o fundo e a hora a cada segundo
setInterval(updateBackgroundAndTime, 1000);

// Atualiza ao carregar a página
updateBackgroundAndTime();
