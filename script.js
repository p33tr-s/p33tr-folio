// JavaScript to manage the z-index of layers
document.querySelectorAll('.layer').forEach(layer => {
    layer.addEventListener('click', () => {
        // Get the current highest z-index among all layers
        let maxZIndex = Math.max(...Array.from(document.querySelectorAll('.layer')).map(el => +window.getComputedStyle(el).zIndex));

        // Increase the z-index of the clicked layer to bring it to the top
        layer.style.zIndex = maxZIndex + 1;
    });
});

// JavaScript to apply lazy loading to all iframes and images
document.addEventListener("DOMContentLoaded", function() {
    // Apply lazy loading to all iframe elements
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.setAttribute('loading', 'lazy');
    });

    // Apply lazy loading to all img elements
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.setAttribute('loading', 'lazy');
    });
});
