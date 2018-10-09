'use strict';

const laptops = [
    {
        size: 13,
        color: 'white',
        price: '1800 USD',
        release_date: 2015,
        name: 'Macbook Air White 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'The MacBook is a brand of notebook computers manufactured by Apple Inc. from May 2006 to ... Available in silver, gold or space grey, it is thinner than the MacBook Air and removes the traditional MagSafe .',
    },
    {
        size: 13,
        color: 'gray',
        price: '1200 USD',
        release_date: 2016,
        name: 'Macbook Air Gray 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'On a Mac, everything is designed to work just the way you expect it to — from operating it with simple, intuitive gestures to asking Siri to find a file to having your apps automatically update themselves. .',
    },
    {
        size: 13,
        color: 'black',
        price: '1500 USD',
        release_date: 2017,
        name: 'Macbook Air Black 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Dark Mode adds a dramatic new look to your desktop and apps that puts the focus on your content.',
    },
    {
        size: 15,
        color: 'white',
        price: '2500 USD',
        release_date: 2015,
        name: 'Macbook Air White 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Your Mac works with your other Apple devices in ways no other computer can. If you get a call on your iPhone, you can take it on your Mac.',
    },
    {
        size: 15,
        color: 'gray',
        price: '3500 USD',
        release_date: 2016,
        name: 'Macbook Pro Gray 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'With every Mac, you get a collection of powerful apps. They’re the same apps you use on your iPhone or iPad, so they’ll feel instantly familiar. ',
    },
    {
        size: 15,
        color: 'black',
        price: '1500 USD',
        release_date: 2017,
        name: 'Macbook Pro Black 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Everything you do with your Mac is protected by strong privacy and security features. That’s because we build data security into everything we make, right from the start.',
    },
    {
        size: 17,
        color: 'white',
        price: '2500 USD',
        release_date: 2015,
        name: 'Macbook Air White 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'macOS comes standard with a wide range of assistive technologies that help people with disabilities experience what the Mac has to offer, providing many features you won’t find in other operating systems. ',
    },
    {
        size: 17,
        color: 'gray',
        price: '3500 USD',
        release_date: 2016,
        name: 'Macbook Pro Gray 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'With macOS, it’s easy to transfer your files, photos, and other data from a Windows PC to your Mac. Work with popular file types such as JPEG, MP3, and PDF, as well as Microsoft Word, ',
    },
    {
        size: 17,
        color: 'black',
        price: '4000 USD',
        release_date: 2017,
        name: 'Macbook Pro Black 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'macOS features powerful core technologies engineered for the most important functions of your Mac.',
    },
];

const refs = selectRefs();

refs.filterButton.addEventListener('click', handleGetChecked);
refs.clearButton.addEventListener('click', handlereResetBtn);

const template = Handlebars.compile(refs.source);

let filteredLaptops = laptops;
let markup = createMarkup(filteredLaptops);
refs.laptop.insertAdjacentHTML('afterbegin', markup);

function handlereResetBtn(evt) {
  evt.preventDefault();
  refs.form.reset();

  filteredLaptops = laptops;
  markup = createMarkup(filteredLaptops);
  refs.laptop.innerHTML = markup;
}

function handleGetChecked(evt) {
  evt.preventDefault();

  const filter = {
    size: [],
    color: [],
    release_date: [],
  };

  const input = refs.form.querySelectorAll( "input[type='checkbox']:checked",);
  if (input.length === 0) return;

    input.forEach(checkbox => {
    if (checkbox.name === 'size') {
      filter.size.push(checkbox.value);
    }
    if (checkbox.name === 'color') {
      filter.color.push(checkbox.value);
    }
    if (checkbox.name === 'release_date') {
      filter.release_date.push(checkbox.value);
    }
  });

  filteredLaptops = getValue(laptops, filter);
  markup = createMarkup(filteredLaptops);
  refs.laptop.innerHTML = markup;
}

function getValue(arrObj, obj) {

  const size = obj.size;
  const color = obj.color;
  const release = obj.release_date;

  const filteredObjects = arrObj.filter(object => {

    const filterBySize = size.length !== 0 ? size.includes(object.size.toString()) : true;
    const filteredByColor = color.length !== 0 ? color.includes(object.color.toString()) : true;
    const filteredByRelease = release.length !== 0 ? release.includes(object.release_date.toString()) : true;
    return filterBySize && filteredByColor && filteredByRelease;
  });

  return filteredObjects;
}

function createMarkup(arr) {
  const markup = arr.reduce((acc, laptop) => acc + template(laptop), '');
  return markup;
}

function selectRefs() {
  const refs = {};
  refs.laptop = document.querySelector('.filtered-laptops');
  refs.source = document.querySelector('#card').innerHTML.trim();
  refs.form = document.querySelector('.js-form');

  refs.filterButton = refs.form.querySelector('button[type="submit"]');
  refs.clearButton = refs.form.querySelector('button[type="reset"]');

  return refs;
};