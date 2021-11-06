// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map((img) => `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`).join("");
gallery.insertAdjacentHTML("afterbegin", markup)
gallery.addEventListener("click", openModal);
function openModal (event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    } else {
        const urlOrig = event.target.dataset.source;
        basicLightbox.create(`<img src="${urlOrig}">`).show();    
    }     
}
console.log(galleryItems);
