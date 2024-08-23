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
        backgroundColor = '#FFD700';
        imageSrc = 'images/morning-time.png';
        message = 'Bom dia';
    } else if (hours >= 12 && hours < 18) {
        backgroundColor = '#FF8C00';
        imageSrc = 'images/afternoon-time.png';
        message = 'Boa tarde';
    } else {
        backgroundColor = '#001f3f';
        imageSrc = 'images/night-time.png';
        message = 'Boa noite';
    }

    document.body.style.backgroundColor = backgroundColor;
    imageElement.src = imageSrc;
    timeElement.textContent = now.toLocaleTimeString('pt-BR');
    messageElement.textContent = message;
}

setInterval(updateBackgroundAndTime, 1000);
updateBackgroundAndTime();
