// сумма трех чисел
function summa(a, b, c) {
  console.log(a + b + c);
}
summa(5, 3, 4);

//функция которая считает от 1 до 10 (цикл)
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//массив из 10 элементов
let ex1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(ex1);
let result = 0;
for (let i = 0; i < ex1.length; i++) {
  result = result + ex1[i];
}
console.log(result);

//тема: Объекты
let example1 = {};
let joldosh = {
  name: " joldosh",
  age: 22,
  isEmployed: false,
};

//создать объект описывающий себя
let elya = {
  name: "Elya",
  age: 18,
  weight: 50,
  height: 165,
  eyeLight: "browm",
  isEmployed: true,
};

// view, edit, add
console.log(elya.height);
