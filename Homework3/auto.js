class Car{
    constructor(brand, model, year, average_speed)
    {
        this.brand = brand;
        this.model = model;
        this.year=year;
        this.average_speed=average_speed;
    }
    Show(){
        return `${this.brand} ${this.model} год выпуска: ${this.year} , средняя скорость: ${average_speed} км/ч`;
    }
    Count(distance){
        let sec=distance/this.average_speed*60*60;
        let min;
        let hour;

        if (sec>=60)
        {
            min=Math.floor(sec/60);
            sec=sec%60;

            if (min>=60)
            {
                hour=Math.floor(min/60);
                min=min%60;
            }
        }

        if(hour)
        {
            return `Время, которое понадобится: ${hour} часов, ${min} минут, ${sec} секунд.`;
        }
        else if(!hour && min)
        {
            return `Время, которое понадобится: ${min} минут, ${sec} секунд.`;
        }
        else if(!hour && !min)
        {
            return `Время, которое понадобится:${sec} секунд.`;
        }
      
    };
}

let brand=prompt("Введите название производителя:");
let model=prompt("Введите модель:");
let year;
let average_speed;
let distance;

do {
    year=prompt("Введите год выпуска:");

    if (year>1900 && year<2025)
    {
        break;
    }
    else{
        alert("Некорректный ввод!");
    }
} while (true);
 
do {
    average_speed=prompt("Введите среднюю скорость:");

    if (average_speed>10)
    {
        break;
    }
    else{
        alert("Некорректный ввод!");
    }
} while (true);

do {
    distance=prompt("Введите растояние:");

    if (distance>0)
    {
        break;
    }
    else{
        alert("Некорректный ввод!");
    }
} while (true);

let choose;
let car = new Car(brand,model,year,average_speed);

do {
    choose=prompt("Выберите фуекцию: \n\n1) Вывести на экран информацию об автомобиле\n"+
    "2)Подсчитать необходимое время для преодоления переданного расстояния \n\nВернуться на главную: 0.");

    switch (choose) {
        case "1": alert(car.Show());
            break;
        case "2": alert(car.Count(distance));
            break;
        case "0": window.location.href="index.html";
            break;
        default: alert("Неправильный ввод!");
            break;
    }
} while (choose!='0');