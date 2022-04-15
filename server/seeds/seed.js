const db = require('../config/connection');
const { User, Item} = require('../models')

db.once('open', async () => {

    await Item.deleteMany();
    const items = await Item.insertMany([
        {
            name: 'Burger Combo',
            description:
              'American style cheese burger with fries',
            image: 'burger.jpeg', 
            price: 10.99,
        
          },
          {
            name: 'Crab Boil',
            description:
              'Steamy hot seafood boil mix including crab, shrimp, crawfish, and vegetables',
            image: 'crab-boil.jpg',
            price: 21.99,
     
          },
          {
            name: 'Deep Dish Pizza',
            description:
              'Chicago Style Pizza',
            image: 'deepdish-pizza.jpg',
            price: 17.99,
 
          },
          {
            name: 'fried Shrimp Combo',
            description:
              'Platter of fried shrimp with sides',
            image: 'fried-shrimp.jpeg',
            price: 13.99,
       
          },
        {
            name: 'Hot Dog Combo',
            description:
              'American style hot dog with fries and condiments',
            image: 'hotdog.jpg', 
            price: 10.99,
        
          },
          {
            name: 'Korean Noodles',
            description:
              'Gochujang miso ramen noodles with choice of protein and vegetables',
            image: 'korean-noodles.webp',
            price: 18.99,
     
          },
          {
            name: 'Lobster',
            description:
              'Lobster tails with garlic butter',
            image: 'lobster.jpg',
            price: 25.99,
 
          },
          {
            name: 'Oysters',
            description:
              'Oyster platter with shrimp and dipping sauce',
            image: 'Oysters.jpg',
            price: 23.99,
       
          },
        {
            name: 'Pancakes',
            description:
              'FULL STACK of fruit covered pancakes ',
            image: 'pankcakes.webp', 
            price: 12.99,
        
          },
          {
            name: 'Pie ',
            description:
              'Whip creamed covered chocolate pie',
            image: 'pie.webp',
            price: 8.99,
     
          },
          {
            name: 'Salad',
            description:
              'orange, raisin, and nut covered salad',
            image: 'Salad.png',
            price: 10.99,
 
          },
          {
            name: 'Seafood Pasta',
            description:
              'Alfredo covered pasta with shallots',
            image: 'seafood-pasta.jpg',
            price: 13.99,
       
          },
        {
            name: 'Spaghetti',
            description:
              'American style spaghetti drenched in grated parmesian',
            image: 'spaghetti.jpg', 
            price: 9.99,
        
          },
          {
            name: 'Sushi',
            description:
              'Califronia roll sushi platter',
            image: 'sushi.jpeg',
            price: 15.99,
     
          },
          {
            name: 'Tacos',
            description:
              'Fresh Shrimp seasoned with Latin Spices, topped with mango slaw. tacos',
            image: 'taco.png',
            price: 14.99,
 
          },

    ]);


    console.log('-------------------Item seeded--------------------------------------------------------');

    await User.deleteMany();

    await User.create({
      firstName: 'Paula',
      lastName: 'Leverret',
      email: 'paulaLev@testmail.com',
      password: 'password12345',
      orders: [
        {
          itemss: [items[0]._id, items[0]._id, items[1]._id]
        }
      ]
    });
  
    await User.create({
      firstName: 'Reginald',
      lastName: 'Johnson',
      email: 'ReggieB@testmail.com',
      password: 'password12345'
    });
  
    console.log('-----------------------users seeded--------------------------------------------------');
  
    process.exit();


})