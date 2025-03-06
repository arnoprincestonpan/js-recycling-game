const items = [
    { "id": 1, "name": "Coca Cola Can", "image": "coca-cola-can.jpg", "recyclable": true },
    { "id": 2, "name": "Plastic Water Bottle", "image": "water-bottle.jpg", "recyclable": true },
    { "id": 3, "name": "Paper Coffee Cup", "image": "coffee-cup.jpg", "recyclable": true },
    { "id": 4, "name": "Banana Peel", "image": "banana-peel.jpg", "recyclable": false },
    { "id": 5, "name": "Glass Jar", "image": "glass-jar.jpg", "recyclable": true },
    { "id": 6, "name": "Styrofoam Cup", "image": "styrofoam-cup.jpg", "recyclable": false },
    { "id": 7, "name": "Aluminum Foil", "image": "aluminum-foil.jpg", "recyclable": true },
    { "id": 8, "name": "Pizza Box (Greasy)", "image": "pizza-box.jpg", "recyclable": false },
    { "id": 9, "name": "Tin Can", "image": "tin-can.jpg", "recyclable": true },
    { "id": 10, "name": "Plastic Grocery Bag", "image": "grocery-bag.jpg", "recyclable": true },
    { "id": 11, "name": "Broken Light Bulb", "image": "light-bulb.jpg", "recyclable": false },
    { "id": 12, "name": "Cardboard Box", "image": "cardboard-box.jpg", "recyclable": true },
    { "id": 13, "name": "Juice Carton", "image": "juice-carton.jpg", "recyclable": true },
    { "id": 14, "name": "Old Newspaper", "image": "newspaper.jpg", "recyclable": true },
    { "id": 15, "name": "Used Paper Towel", "image": "paper-towel.jpg", "recyclable": false },
    { "id": 16, "name": "Aerosol Can", "image": "aerosol-can.jpg", "recyclable": false },
    { "id": 17, "name": "Wine Bottle", "image": "wine-bottle.jpg", "recyclable": true },
    { "id": 18, "name": "Plastic Yogurt Cup", "image": "yogurt-cup.jpg", "recyclable": true },
    { "id": 19, "name": "Batteries", "image": "batteries.jpg", "recyclable": false },
    { "id": 20, "name": "Soup Can", "image": "soup-can.jpg", "recyclable": true }
];

const timer = document.getElementById('timer');

const recycleBin = document.getElementById('recycle-bin');
const gameCard = document.getElementById('game-card');
const itemImage = document.getElementById('item-image');
const itemName = document.getElementById('item-name');

const trashBin = document.getElementById('trash-bin');

const score = document.getElementById('score');


