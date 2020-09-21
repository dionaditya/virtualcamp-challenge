"use strict";
let items = [
    {
        name: 'Takoyaki',
        price: 10000,
        isAvailable: true
    },
    {
        name: 'Cumi Bakar',
        price: 15000,
        isAvailable: true
    },
    {
        name: 'Es Jeruk',
        price: 5000,
        isAvailable: true
    },
    {
        name: 'Ikan Nila',
        price: 8000,
        isAvailable: true
    },
];
let orderedItems = ['Takoyaki', 'Cumi Bakar', 'Es Jeruk', 'Ikan Nila'];
function processOrder(orderedItems, cash) {
    const totalPrice = orderedItems.map(val => {
        const getItemOrdered = items.find(item => item.name === val);
        if (getItemOrdered !== undefined) {
            return getItemOrdered;
        }
    }).filter(res => res && res.isAvailable)
        .reduce((prev, next) => {
        return next ? prev + next.price : 0;
    }, 0);
    const exchange = cash - totalPrice;
    return [
        {
            title: 'Total Price',
            total: totalPrice
        },
        {
            title: 'Exchange',
            total: exchange
        }
    ];
}
console.log(processOrder(orderedItems, 50000));
