'use strict';
const galleryItems = [
    { 
      previews: 'img/preview-1.jpg', 
      fullviews: 'img/fullview-1.jpg', 
      alts: "alt text 1" 
    },
    { 
      previews: 'img/preview-2.jpg', 
      fullviews: 'img/fullview-2.jpg', 
      alts: "alt text 2" 
    },
    {
      previews: 'img/preview-3.jpg', 
      fullviews: 'img/fullview-3.jpg', 
      alts: "alt text 3" 
    },
    { 
      previews: 'img/preview-4.jpg', 
      fullviews: 'img/fullview-4.jpg', 
      alts: "alt text 4" 
    }, 
   { 
      previews: 'img/preview-5.jpg', 
      fullviews: 'img/fullview-5.jpg', 
      alts: "alt text 5" 
    },
    { 
      previews: 'img/preview-6.jpg', 
      fullviews: 'img/fullview-6.jpg', 
      alts: "alt text 6" 
    }
];
//console.log(galleryItems);

const createFullView = ({fullviews, alts}) => {
    const fullview = document.createElement('div');
    fullview.classList.add('fullview');

    const img = document.createElement('img');
    img.setAttribute('src', fullviews);
    img.setAttribute('alt', alts);
    img.setAttribute('width', 1280);

    fullview.append(img);

    return fullview;
};

const createPreview = ( ) => {
    const ul = document.createElement('ul');
    ul.classList.add('preview');

    return ul;
};

const createPreviewImage = ( {previews, fullviews, alts}) => {
    const li = document.createElement('li');

    const image = document.createElement('img');
    image.classList.add('pre_img');
    image.setAttribute('src', previews);
    image.setAttribute('data-fullview', fullviews);
    image.setAttribute('alt', alts);
    image.setAttribute('width', 320);

    li.append(image);

    return li;
}

const createImageList = (galleryItems) => {
    const elements = galleryItems.map(galleryItem => createPreviewImage(galleryItem));

    return elements;
};

const imageGallery = document.querySelector('.js-image-gallery');

const previewList = createPreview();
const fullviewList = createFullView(galleryItems[0]);
imageGallery.append(fullviewList, previewList);



const smallImageItem = createImageList(galleryItems)


previewList.append(...smallImageItem);

const previewImg = document.querySelector('.preview');
previewImg.addEventListener('click', handlePreviewImgClick);

function handlePreviewImgClick(evt){
    evt.preventDefault();
   
   const nodeName = evt.target.nodeName;
   const action = evt.target.dataset.fullview;
   //console.log(action);

   if(nodeName !== 'IMG') return;
   
   const activeLargeImg = imageGallery.querySelector('.fullview img');

  activeLargeImg.setAttribute('src', action);
};


