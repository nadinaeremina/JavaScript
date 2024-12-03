// Menu
let user_choose;
let year, month, day;
do {
    user_choose=prompt("Выберите интересующий пункт: \n\n" +
        "1) Вывести дату \n2) Проверить високосный год \n3) Рассчитать сумму к оплате \n" +
        "4) Выяснить, сможет ли окружность поместиться в квадрат \n\n Для выхода из меню нажмите 0");
    switch (user_choose) {
        case "1": let day=+prompt("Введите день:");
                  let month=+prompt("Введите месяц:");
                  let year=+prompt("Введите год:");
              
                  const my_date=new Date(year,month,day);

                  alert(Task1(my_date));
            break;
        case "2": Task2();
            break;    
        case "3": Task3();
            break;
        case "4": Task4();
            break;  
        case "0":  alert("Всего доброго!");
            break; 
        default:
            alert("Некорректный выбор!");
            break;
    }
} while (user_choose!=="0" && user_choose!=="1");
1
// 1
function Task1(any_date)
{
    let year=any_date.getFullYear()%100;
    let month=any_date.getMonth();
    let day=any_date.getDate();

    if(day<10)
    {
        day='0'+day;
    }
    if(month<10)1
    {
        month='0'+month;
    }
    if(year<10)
    {
        year='0'+year;
    }

    return `${day}.${month}.${year}`;
}

// 2

function Task2()
{
    let flag = false;
    let year;
    do {
        year = +prompt("Введите год:");
        if (year > 0)
        {
            if(year%4==0 && year%100!=0)
            {
                alert("Год високосный!");
            }
            else{
                alert("Год не високосный!");
            }
            flag = true;
        }
        else{
            alert("Некорректный ввод!");
            flag = false;
        }
    } while (!flag);
}

// 3
function Task3()
{
    let flag = false;

    let sum;
    do {
        sum = +prompt("Введите сумму:");
        if (sum >= 0)
        {
            if (sum>1000 && sum < 5000)
            {
                sum=sum-(sum/100*5);
            }
            else if (sum>=5000 && sum < 10000){
                sum=sum-(sum/100*10);
            }
            else if (sum>=10000){
                sum=sum-(sum/100*15);
            }
            alert(`Сумма к оплате с учетом скидки: ${sum}`);
            flag = true;
        }
        else{
            alert("Некорректный ввод!");
            flag = false;
        }
    } while (!flag);
}

// 4
function Task4()
{
    let length_circle;
    let diametr_circle;
    let per_square;
    let length_side_square;

    const pi=3.14;

    do {
        length_circle = +prompt("Введите длину окружности:");
        per_square = +prompt("Введите периметр квадрата:");
        if (length_circle > 0)
        {
            if (per_square > 0)
            {
                diametr_circle=length_circle/pi;
                length_side_square=per_square/4;
                if (diametr_circle<=length_side_square)
                {
                    alert("Окружность поместится в квадрате!");
                }
                else{
                    alert("Окружность не поместится в квадрате!");
                }
                flag = true;
            }
            else{
                alert("Некорректный периметр квадрата!");
                flag = false;
            }
        }
        else{
            alert("Некорректная площадь окружности!");
            flag = false;
        }
    } while (!flag);
}
