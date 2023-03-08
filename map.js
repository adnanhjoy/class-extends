const phoneName = [
    { name: 'Xiomi', price: 20000, release: 2017 },
    { name: 'Samsung', price: 15000, release: 2011 },
    { name: 'iphone', price: 30000, release: 2000 },
    { name: 'Pixel', price: 25000, release: 2015 }
];

// const phoneList = phone => phone[0];
// console.log(phoneList(phoneName));

const mobileName = phoneName.map(phone => phone);
console.log(mobileName);

// console.log(phoneName.map(phone => phone[0]))
