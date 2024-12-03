// Menu
let user_choose;
do {
    user_choose=prompt("Выберите интересующий пункт: \n\n" +
        "1) Вывести приветствие \n2) Вычисление возраста \n3) Вычисление периметра квадрата \n" +
        "4) Вычисление площади окружности \n5) Вычисление скорости \n6) Конвертация долларов в евро \n" +
        "7) Вычисление количества файлов \n8)Подсчет количества шоколадок и сдачи \n9) Переворот числа \n" +
        "10) Выявление четного числа \n\n Для выхода из меню нажмите 0");
    switch (user_choose) {
        case "1": Task1();
            break;
        case "2": Task2();
            break;    
        case "3": Task3();
            break;
        case "4": Task4();
            break;  
        case "5": Task5();
            break;
        case "6": Task6();
            break;    
        case "7": Task7();
            break;
        case "8": Task8();
            break;  
        case "9": Task9();
            break;
        case "10": Task10();
            break;  
        case "0":  alert("Всего доброго!");
            break; 
        default:
            alert("Некорректный выбор!");
            break;
    }
} while (user_choose!=="0");

// 1 Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

function Task1()
{
    let user_name;
    user_name = prompt("Введите ваше имя:");
    alert(`Ваше имя: ${user_name}`);
}

var flag;

// 2 Запросите у пользователя год его рождения, посчитайте, сколько ему лет 
// и выведите результат. Текущий год укажите в коде как константу.

function Task2()
{
    let today = new Date();
    const current_year = today.getFullYear();
    let user_years;
    do {
        let user_birth = +prompt("Введите год вашего рождения:");
        if (user_birth>1900)
        {
            user_years = current_year-user_birth;
            flag=true;
            alert(`Ваш возраст: ${user_years}`);
        }
        else{
            alert(`Неправильный ввод! Попробуйте еще раз!`);
            flag=false;
        }
    } while (!flag);
}

// 3 Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 

function Task3()
{
    let perimetr;
let length;
do {
    length = +prompt("Введите длину стороны квадрата:");
    if (length>0)
    {
        perimetr = length*4;
        alert(`Периметр квадрата: ${perimetr}`);
        flag=true;
    }
    else{
        alert(`Неправильный ввод! Попробуйте еще раз!`);
        flag=false;
    }
} while (!flag);
}


// 4 Запросите у пользователя радиус окружности и выведите площадь такой окружности.

function Task4()
{
    let square;
let radius;
const pi=3.14;
do {
    radius = +prompt("Введите радиус окружности:");
    if (radius>0)
    {
        square = pi*radius*2;
        alert(`Площадь окружности: ${square}`);
        flag=true;
    }
    else{
        alert(`Неправильный ввод! Попробуйте еще раз!`);
        flag=false;
    }
} while (!flag);
}

// 5 Запросите у пользователя расстояние в км между двумя городами и за сколько часов
// он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

function Task5()
{
    let distance; 
    let hours; 
    let speed; 
    do {
        distance = +prompt("Введите расстояние между городами в километрах:");
        hours = +prompt("За сколько часов вы хотите добраться?");
        if (distance>0)
        {
            if (hours>0)
            {
                speed = distance/hours;
                alert(`Вам необходимо двигаться со скоростью: ${speed} км/ч`);
                flag=true;
            }
            else{
                alert(`Неправильный ввод часов! Попробуйте еще раз!`);
                flag=false;
            }
        }
        else{
            alert(`Неправильный ввод расстояния! Попробуйте еще раз!`);
            flag=false;
        }
    } while (!flag);
}

// 6 Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро.
// Курс валюты храните в константе.

function Task6(){
    let dollars; 
    const course = 1.07;
    let euro; 
    do {
        dollars = +prompt("Введите сумму в долларах:");
        if (dollars>0)
        {
            euro = Math.floor(dollars/course);
            alert(`Сумма в евро: ${euro}`);
            flag=true;
        }
        else{
            alert(`Неправильный ввод! Попробуйте еще раз!`);
            flag=false;
        }
    } while (!flag);
}

// 7 Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько 
// файлов размером в 820 Мб помещается на флешку.

function Task7(){
    let volume;
    let file = 0.82;
    let kol_files;
    do {
        volume = +prompt("Введите обьем флешки:");
        if (volume>0)
        {
            kol_files = volume/file;
            alert(`На флешку поместится ${Math.floor(kol_files)} файлов`);
            flag=true;
        }
        else{
            alert(typeof(volume));
            alert(`Неправильный ввод! Попробуйте еще раз!`);
            flag=false;
        }
    } while (!flag);
}

// 8 Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
// Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется. 

function Task8()
{
    let sum; 
    let price; 
    let kol;
    let change;
    do {
        sum = +prompt("Введите сумму денег:");
        price = +prompt("Введите стоимость шоколадки:");
        if (sum>0)
        {
            if (price>0)
            {
                kol = Math.floor(sum/price);
                change = sum%price;
                alert(`На эти деньги можно купить ${kol} шоколадок. Сдача составит: ${change}`);
                flag=true;
            }
            else{
                alert(`Неправильный ввод стоимости! Попробуйте еще раз!`);
                flag=false;
            }
        }
        else{      
            alert(`Неправильный ввод суммы! Попробуйте еще раз!`);
            flag=false;
        }
    } while (!flag);
}

// 9 Запросите у пользователя трехзначное число и выведите его задом наперед. 
// Для решения задачи вам понадобится оператор % (остаток от деления).

function Task9()
{
    let hundred;
    let surplus;
    let surplus2;
    let ten;
    let new_number;
    do {
        let number = +prompt("Введите любое трехзначное число:");
            if (number>99 && number <1000)
            {
                hundred = Math.floor(number/100);
                surplus = number%100;
                ten = Math.floor(surplus/10);
                surplus2 = surplus%10;
                new_number = surplus2*100+ten*10+hundred;
                alert(`Перевернутое число: ${new_number}`);
                flag = true;
            }
            else{
                alert(typeof(number));
                alert(`Вы ввели не трехзначное число!`);
                flag=false;
            }
    } while (!flag);
}

// 10 Запросите у пользователя целое число и выведите в ответ, четное число или нет. 
// В задании используйте логические операторы.
// В задании не надо использовать if или switch.

function Task10()
{
    let my_number; 
    let answer;
    my_number = prompt("Введите любое число:");
    answer=my_number%2==0;
    alert(`Ваше число является четным: ${answer}`);
}
