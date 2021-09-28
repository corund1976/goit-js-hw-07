import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');

const markUp = galleryItems
    .map(image =>
        `
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
        `)
    .join("");

divGallery.insertAdjacentHTML('beforeend', markUp);

divGallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    document.removeEventListener("keydown", onEscDown);

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`,
        {
            onClose: (instance) => {
                document.removeEventListener("keydown", onEscDown);
            }
        }
    );

    instance.show();
    
    document.addEventListener("keydown", onEscDown);
    
    function onEscDown(event) {

        if (event.code === "Escape") {
            instance.close();
            document.removeEventListener("keydown", onEscDown);
        }
    };
}

