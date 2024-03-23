const initGallery = () => {
    let galleryWrapperEl = document.getElementById('gallery');
    let childrensImgEl = Array.from(galleryWrapperEl.children);
    childrensImgEl.forEach((img) => img.addEventListener('click', showFullscreen));

    let closeFullscreenButtonEl = document.getElementById('close-button');
    closeFullscreenButtonEl.addEventListener('click', hideFullscreen);
}

const showFullscreen = (event) => {
    let src = event.target.src;
    let fullscreenEl = document.getElementById('fullscreen-image');
    fullscreenEl.setAttribute('src', src);

    let fullscreenImageWrapperEl = document.getElementById('fullscreen-image-wrapper');
    fullscreenImageWrapperEl.classList.remove('hide-fullscreen-image-wrapper');
}

const hideFullscreen = () => {
    let fullscreenImageWrapperEl = document.getElementById('fullscreen-image-wrapper');
    fullscreenImageWrapperEl.classList.add('hide-fullscreen-image-wrapper');
}


if (!!window.addEventListener) {
    window.addEventListener("DOMContentLoaded", initGallery);
} else {
    // MSIE
    window.attachEvent("onload", initGallery);
}