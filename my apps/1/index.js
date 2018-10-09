'use strict';

const laptops = [
    {
        size: 13,
        color: 'white',
        price: 28000,
        release_date: 2015,
        name: 'Macbook Air White 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'gray',
        price: 32000,
        release_date: 2016,
        name: 'Macbook Air Gray 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'black',
        price: 35000,
        release_date: 2017,
        name: 'Macbook Air Black 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'white',
        price: 45000,
        release_date: 2015,
        name: 'Macbook Air White 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'gray',
        price: 55000,
        release_date: 2016,
        name: 'Macbook Pro Gray 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'black',
        price: 45000,
        release_date: 2017,
        name: 'Macbook Pro Black 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'white',
        price: 65000,
        release_date: 2015,
        name: 'Macbook Air White 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'gray',
        price: 75000,
        release_date: 2016,
        name: 'Macbook Pro Gray 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'black',
        price: 80000,
        release_date: 2017,
        name: 'Macbook Pro Black 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
];

function selectRefs() {
    const refs = {};

    refs.laptop = document.querySelector('.laptops');
    refs.source = document.querySelector('#card').innerHTML.trim();
    refs.form = document.querySelector('.js-form');

    refs.filterButton = refs.form.querySelector('button[type="submit"]');
    refs.clearButton = refs.form.querySelector('button[type="reset"]');


    return refs;
}
//===== Showed all items fron obj

const refs = selectRefs();
const template = Handlebars.compile(refs.source);

let markup = createMarkup(laptops);
refs.laptop.insertAdjacentHTML('afterbegin', markup);

function createMarkup(arr) {
    const markup = arr.reduce((acc, laptop) => acc + template(laptop), '');
    return markup;
}

//===== filter

refs.form.addEventListener('submit', handleFilterItems);


const input = refs.form.querySelectorAll("input[type='checkbox']:checked");

function handleFilterItems(event) {
    event.preventDefault();

    const filter = { size: [], color: [], release_date: [] };

    refs.laptop.innerHTML = "";

    input.forEach(input => {
        if (input.name === "size" && input.checked) {
            filter.size.push(input.value);
        }
        if (input.name === "color" && input.checked) {
            filter.color.push(input.value);
        }
        if (input.name === "release_date" && input.checked) {
            filter.release_date.push(input.value);
        }
    });

    sorterLaptop(laptops, filter)
}
function sorterLaptop() {


}
