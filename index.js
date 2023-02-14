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
  sayHello: function () {
    console.log("hello");
  },
};

//создать объект описывающий себя
let elya = {
  name: "Elya",
  age: 18,
  weight: 50,
  height: 165,
  eyeLight: "browm",
  isEmployed: true,
  greeting: function () {
    console.log("hello my name is " + this.name);
  },
  sayAge: function () {
    console.log("my age " + this.age); // + this.name + "-" + this.age
  },
};

// view, edit, add
console.log(elya.height);
elya.age = 19;
elya.favouriteColor = ["black", "white"];

// delete
delete elya.favouriteColor;

//функуция которые находится внутри объекта это метод
joldosh.sayHello(); //() обязатльно

elya.greeting();
elya.name = "eleonora";
elya.greeting();
elya.sayAge();

let example = {
  number: 0,
  inc: function () {
    this.number = this.number + 1; //добавляет одно
  },
  dcr: function () {
    this.number = this.number - 1;
  },
  add: function (num) {
    this.number = this.number + num; //функция кот увелич число намбер на опред число в методе
  },
  subtract: function (num) {
    this.number = this.number - num;
  },
  print: function () {
    console.log(this.number);
  },
};

//калькулятор
example.print();
example.inc();
example.inc();
example.print();
example.add(5);
example.subtract(4);
example.print();
