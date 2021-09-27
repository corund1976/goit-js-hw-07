import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');

galleryItems.map(image => {

    let markUp = `
        <a class="gallery__item" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>
    `;

    divGallery.insertAdjacentHTML('beforeend', markUp);
});


divGallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionData: 'alt',
        captionDelay: 250
    });
}