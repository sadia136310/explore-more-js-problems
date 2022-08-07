// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা(prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 
function findPrimeNumber(number) {
    if (typeof number !== 'number' || number < 0) {
        return 'please enter a number'
    }
    let count = 0;
    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            count++;
            break;
        }
    }
    if (count == 1) {
        return 'Its a PrimeNumber';
    }
    else {
        return 'Its not a PrimeNumber';
    }
}
const check = findPrimeNumber(-1);
console.log(check);