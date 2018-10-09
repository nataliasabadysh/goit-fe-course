const dishes = [
    {
        name: 'Baked Yak & Mushrooms',
        image:
            'https://images.pexels.com/photos/209406/pexels-photo-209406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
        descr:
            'Beatae sint quasi quo exercitationem vel ea distinctio. Quae eveniet porro aspernatur debitis eos accusamus est harum.',
        price: '61.00',
        available: true,
    },
    {
        name: 'Strawberry Pancakes',
        image:
            'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
        descr:
            'Aut tenetur ipsa. Ex voluptate qui aut porro numquam voluptas autem. Ex voluptate qui aut porro numquam voluptas autem.',
        price: '21.00',
        available: true,
    },
    {
        name: 'Caramel Toffee',
        image:
            'https://images.pexels.com/photos/8382/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
        descr:
            'Eum fuga sequi earum voluptas voluptas necessitatibus ut. Labore animi sed maxime animi quia eum magnam et provident.',
        price: '33.00',
        available: false,
    },
    {
        name: 'Kkona Burger',
        image:
            'https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
        descr:
            'Dolores sed vero voluptatem voluptatem architecto officiis praesentium. Dolores quasi facere incidunt sint eos omnis delectus officia.',
        price: '14.00',
        available: false,
    },
    {
        name: 'Fried Salmon',
        image:
            'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
        descr:
            'Ea eveniet vel omnis veniam et perspiciatis quod doloribus voluptas. Autem at est molestiae repellendus.',
        price: '84.00',
        available: true,
    },
    {
        name: 'Chocolate Pie',
        image:
            'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
        descr:
            'Et cum et ut quis quas maiores consequatur. Iure qui unde sint consequatur qui iusto at sit. Iure qui unde sint consequatur qui iusto at sit.',
        price: '26.00',
        available: false,
    },
    {
        name: 'Roasted Beef',
        image:
            'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
        descr:
            'Deserunt quas nostrum qui qui sunt qui dolores. Culpa facere et voluptatem nobis laudantium aperiam aliquid.',
        price: '63.00',
        available: true,
    },
    {
        name: 'Pistachio Elderberry Wafer',
        image:
            'https://images.pexels.com/photos/162827/tea-cake-cafe-desserts-162827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
        descr:
            'Optio ut eum necessitatibus dolores molestias. Tenetur libero harum nobis a est et voluptatem rerum officia. Tenetur libero harum nobis.',
        price: '67.00',
        available: false,
    },
    {
        name: 'Four Cheese Pizza',
        image:
            'https://images.pexels.com/photos/532779/pexels-photo-532779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
        descr:
            'Optio ut eum necessitatibus dolores molestias. Tenetur libero harum nobis a est et voluptatem rerum officia. Tenetur libero harum nobis.',
        price: '39.00',
        available: true,
    },
];



const grid = document.querySelector('.grid');
const source = document.querySelector('#dish-card').innerHTML.trim();
const template = Handlebars.compile(source);

// reduce На каждом обьекте вызываем  template
const markup = dishes.reduce((acc, dish) => acc + template(dish), '');

// вещаем нашу разметку

grid.insertAdjacentHTML('afterbegin', markup);