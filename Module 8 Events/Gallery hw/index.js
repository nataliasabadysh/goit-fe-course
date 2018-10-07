'use strict';
//const galleryItems = [
//     {
//       previews: 'img/preview-1.jpg',
//       fullviews: 'img/fullview-1.jpg',
//       alts: "alt text 1"
//     },
//     {
//       previews: 'img/preview-2.jpg',
//       fullviews: 'img/fullview-2.jpg',
//       alts: "alt text 2"
//     },
//     {
//       previews: 'img/preview-3.jpg',
//       fullviews: 'img/fullview-3.jpg',
//       alts: "alt text 3"
//     },
//     {
//       previews: 'img/preview-4.jpg',
//       fullviews: 'img/fullview-4.jpg',
//       alts: "alt text 4"
//     },
//    {
//       previews: 'img/preview-5.jpg',
//       fullviews: 'img/fullview-5.jpg',
//       alts: "alt text 5"
//     },
//     {
//       previews: 'img/preview-6.jpg',
//       fullviews: 'img/fullview-6.jpg',
//       alts: "alt text 6"
//     }
// ];
const galleryItems = [
    { preview: './img/preview-1.jpeg', fullview: './img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: './img/preview-2.jpeg', fullview: './img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: './img/preview-3.jpeg', fullview: './img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: './img/preview-4.jpeg', fullview: './img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: './img/preview-5.jpeg', fullview: './img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: './img/preview-6.jpeg', fullview: './img/fullview-6.jpeg', alt: "alt text 6" },
];

class GalleryImages {
    constructor(items, parentNode){
        this.items = items;
        this.parentNode = parentNode;

    }

    addItems({preview, fullview, alt}){
        let items = `<li class="preview__items"><img src=${preview} data-fullview=${fullview} alt=${alt} width='350'></li>`
        return items
    }

    addImage(){
        let div = `<div class="fullview"><img src=${this.items[0].fullview} data-fullview=${this.items[0].fullview} alt=${this.items[0].alt} width='1280'></div>`
        let ul =`<ul class = "preview__list"></ul>`;
        this.parentNode.insertAdjacentHTML('beforeend', div);
        this.parentNode.insertAdjacentHTML('beforeend', ul);
        let fullImg = this.parentNode.firstElementChild;
        let li = this.items.reduce((acc,val)=> acc + this.addItems(val),'');
        let list = this.parentNode.lastElementChild;
        let img = list.querySelectorAll('img');
        list.insertAdjacentHTML('beforeend', li);

        list.addEventListener('click', this.handlerPreviewClick);




    }
    handlerPreviewClick(ev){
        let evn = ev.target;
        let fullImg = this.parentNode.querySelector('.fullview');
        let items = this.parentNode.lastElementChild.children;
        if(evn.nodeName !=='IMG')return;
        fullImg.firstElementChild.setAttribute('src', evn.dataset.fullview );

        if(fullImg.firstElementChild.getAttribute('src') === evn.dataset.fullview){
            evn.parentNode.classList.add('add')
        }
        for(let res of items){
            if (evn.dataset.fullview  !== res.firstElementChild.dataset.fullview)
                res.classList.remove('add')
        }
    }

}

//let gallary = document.querySelector('.image-gallery');
let img = document.querySelector('.img');

const red = new GalleryImages(  galleryItems, img);
//const der = new GalleryImages( galleryItems, gallary);
red.addImage();
//der.addImage();