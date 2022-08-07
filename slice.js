const friends = [12, 48, 73, 65, 56, 16, 39, 43, 13];
// const partial = friends.slice(2, 5);
// console.log(partial);


// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// will chnge the orginal array
const partial = friends.splice(2, 5, 43, 99, 555);

console.log(partial);