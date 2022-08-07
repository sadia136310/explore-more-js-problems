const names = ['abul', 'babul', 'sabul', 'ebul', 'mogbul', 'sabul', 'dabul', 'babul', 'abul'];

function removesDuplicate(names) {
    const unique = [];
    for (i = 0; i < names.length; i++) {
        const index = i;
        const element = names[index];
        if (unique.includes(element) === false) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removesDuplicate(names);
console.log(uniqueNames);