//arrays

//array.filter():
//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//array.map():
// const array1 = [1, 4, 9, 16];

// Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// Expected output: Array [2, 8, 18, 32]

//array.reduce()
// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// Expected output: 10

//check your understanding

let names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];

const filteredNamed = names.filter((name) => name.charAt(0) == "B");

let namesLength = names.map((name) => name.length);

names.reduce((total, name) => total + name.length, 0) / names.length;
