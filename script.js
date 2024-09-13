// JavaScript to manage the z-index of layers
document.querySelectorAll('.layer').forEach(layer => {
    layer.addEventListener('click', () => {
        // Get the current highest z-index among all layers
        let maxZIndex = Math.max(...Array.from(document.querySelectorAll('.layer')).map(el => +window.getComputedStyle(el).zIndex));

        // Increase the z-index of the clicked layer to bring it to the top
        layer.style.zIndex = maxZIndex + 1;
    });
});
