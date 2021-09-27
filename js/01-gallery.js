import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');

galleryItems.map(image => {
    
    let markUp = `
    <div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
            />
        </a>
    </div>
    `;

    divGallery.insertAdjacentHTML('beforeend', markUp);
});

divGallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `)

    instance.show();
}