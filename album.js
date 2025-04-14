document.addEventListener('DOMContentLoaded', () => {
    const zoomOverlay = document.createElement('div');
    zoomOverlay.classList.add('zoom-overlay');
    zoomOverlay.onclick = () => {
        zoomOverlay.style.display = 'none';
    };

    const zoomImage = document.createElement('img');
    zoomOverlay.appendChild(zoomImage);

    document.body.appendChild(zoomOverlay);

    window.abrirZoom = (img) => {
        zoomImage.src = img.src;
        zoomOverlay.style.display = 'flex'; 
    };
});