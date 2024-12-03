// 1

// const date=new Date();
// console.dir(date);
// // 'date' состоит из прототипа 'object' и конструктора

// function Car() {} // функция-конструтор

// // по сути все в js-это обьекты и класс - это шаблон обьета
// const c1 = new Car();
// const c2 = new Car();

// console.dir(c1);
// console.dir(c2);

// 2
// здесь мы не обьявляем класс, а создаем обьекты (по сути тоже классы)
// через функции

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    // можно переопределить метод прямо в классе - первый вариант
    this.toString=function(){
        return `${this.brand} ${this.model} ${this.year}`;
      }
}

function Driver(name, age) {
    this.name = name;
    this.age = age;
}

//const c1 = new Car("Toyota", "Camry", 2020);
//const d1 = new Driver("Peter", 30);

// console.dir(c1);
// console.dir(d1);

// обращаемся к прототипу 'Car' - object и описываем его метод 'toString'
// без описания этот метод не будет вызываться вообще
// можно здесь переопределить метод - второй вариант
// Car.prototype.toString=function() {
//     return `${this.brand} ${this.model} ${this.year}`;
// }

// console.dir(c1.toString());

// 3 
// инкапсуляция
// все методы сейчас 'public' 
// можно спрятать какой-то метод, а можно запечатать наш класс

// class Car_my{
//     // ниже приватное поле (может быть и метод)
//     #id;
//     year;
//     constructor(brand, model)
//     {
//         this.brand = brand;
//         this.model = model;
//         this.#id=123;
//     }
//     // каждый такой метод тольео для одного св-ва
//     set setId(value){
//         this.#id=value;
//     }
//     get getId(){
//         return this.#id;
//     }
//     // приватный метод
//     #cheackYear(year){
//         if(year<=18)
//             return 18;
//     }
// }

// const c1 = new Car_my("Toyota", "Camry");
// console.dir(c1);
// // поле 'id' увмдим, но обратиться к нему не сможем

// c1.setId=45;
// console.dir(c1);

// // 4
// // 4.1 Наследование функций

function SportCar(brand, model, year, speed, color) 
{
    // метод 'apply' - взять аргументы из данного класса
    Car.apply(this, arguments);
    this.speed=speed;
    this.color=color;
    // метод 'toString' тоже унаследован
    // можно его переопределить прямо в классе - первый вариант 
    // но создали свой метод 'Show', в котором переопределяем метод 'toString'
    this.Show=function(){
        return `${this.toString()} ${this.speed} ${this.color}`;
    }
}

// // нужно переопределить функцию 'toString' за пределами класса - второй вариант
// // SportCar.prototype.toString=function() {
// //     return `${this.brand} ${this.model} ${this.year} ${this.speed} ${this.color}`;
// // }

// // третий вариант ??????????????????????
// // this.toString=function()
// // {
// //     return this.toString();
// // }

const sc=new SportCar("Porshe", "Panamera", 2020, 120, 'green');
console.dir(sc.Show());
// // вложенный класс - просто вложить один класс в другой

// 4.2
// Наследование классов

// class Car_my{
//     // ниже приватное поле (может быть и метод)
//     #id;
//     constructor(brand, model, year)
//     {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.#id=123;
//     }
//     // каждый такой метод тольео для одного св-ва
//     set setId(value){
//         this.#id=value;
//     }
//     get getId(){
//         return this.#id;
//     }
//     toString(){
//         return `${this.brand} ${this.model} ${this.year}`;
//     }
//     // для вложенности классов - агрегирование
//     // эти методы будут и у классов-наследников
//     setEngine(engine){
//         this.engine=engine;
//     }
//     getEngine(){
//         return this.engine;
//     }
// }

// class Engine{
//     constructor(volume, fuel, power){
//         this.volume = volume;
//         this.fuel = fuel;
//         this.power = power;
//     }
// }

// class SportCar extends Car_my{
//     constructor(brand, model, year, speed, color){
//         super(brand, model, year);
//         this.speed=speed;
//         this.color=color;
//     }
//     Show(){
//         return `${this.toString()} ${this.speed} ${this.color}`;
//     }
// }

// const c=new Car_my("Porshe", "Panamera", 2020);
// const sc=new SportCar("Nissan", "Teana", 2022, 150, 'red');

// console.dir(c);
// console.dir(sc.Show());

// const en = new Engine(3500, "petrol", 400);
// // добавим двигатель к 'Car_my'

// c.setEngine(en);
// console.dir(c.engine.volume);

// // 5
// // Полиморфизм
// // Переопределение методов родителя под данный класс-наследник3

// // тк мы не переопределили метод 'ToString' здесь метод выведится так
// // как у ближайшего класса родителя (в данном случае как у 'Car_my')
// console.dir(sc.toString());



