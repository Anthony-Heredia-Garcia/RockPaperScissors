const array = ['a', 'b', 'c'];

const sweet = (arr, value) => (arr.push(value), arr);
const bitter = (arr, value) => (arr.concat(value));

console.log(bitter(array, 'd'));
console.log(bitter(array, 'd'));
console.log(bitter(array, 'd'));
console.log(sweet(array, 'd'));
console.log(sweet(array, 'd'));
console.log(sweet(array, 'd'));