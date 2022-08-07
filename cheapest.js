const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 7, storage: '32gb', price: 26000, color: 'silver' },
    { name: 'Nokia', camera: 12, storage: '32gb', price: 40000, color: 'black' },
    { name: 'i-phone', camera: 18, storage: '32gb', price: 80000, color: 'silver' },
    { name: 'Oppo', camera: 23, storage: '32gb', price: 23000, color: 'silver' },
    { name: 'Xiaomi', camera: 34, storage: '32gb', price: 13000, color: 'silver' },

];

function highestCamera(phones) {
    let highest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera > highest.camera) {
            highest = phone
        }
    }
    return highest;
}
const mySelection = highestCamera(phones);
console.log(mySelection);


// function cheapestPhone(phones) {
//     let cheapest = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.price < cheapest.price) {
//             cheapest = phone
//         }
//     }
//     return cheapest;
// }
// const mySelection = cheapestPhone(phones);
// console.log(mySelection);