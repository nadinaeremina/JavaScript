// функция, принимающая кол-во милисекунд и возвращающая часы и минуты
function convertToTime(ms){

    let seconds=Math.floor(ms/1000);
    let minutes=Math.floor(seconds/60);
    let hours=Math.floor(minutes/60);

    return `${hours%24}:${minutes%60}`;
}

// функция, принимающая дата и возвращающая время в формате - 'pm'/'am'
function getHours_and_Minutes(date){

    let mas=date.split(' ');
    let result=mas[1].slice(0,-6);

    if(result.charAt(0)=='0' && result.charAt(1)=='0')
    {
        return "12pm";
    }
    else if (result.charAt(0)=='0')
    {
        return `${result.at(1)} am`;
    }
    else if(result.charAt(0)=='1' && result.charAt(1)<=2)
    {
        return `${result} am`;
    }
    else
    {
        result-=12;
        return `${result} pm`;
    }
}

// функция для демонстрации погодных условий в виде иконки
function knowWeather(desc){
    
    if(desc=="Clear")
    {
        return "images/icons/01d@2x.png";
    }
    else if(desc=="Clouds")
    {
         return "images/icons/02d@2x.png";
    }
    else if(desc=="Drizzle")
    {
         return "images/icons/09d@2x.png";
    }
    else if(desc=="Rain")
    {
         return "images/icons/10d@2x.png";
    }
    else if(desc=="Thunderstorm")
    {
         return "images/icons/11d@2x.png";
    }
    else if(desc=="Snow")
    {
         return"images/icons/13d@2x.png";
    }
}

// фнкция для получения дня недели
function getDay_of_Week(count){

    let today=new Date();
    var mas_days=['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
 
    if (today.getDay()+count==7)
    {
       return mas_days[0];
    }
    else 
    {
       return mas_days[today.getDay()+count];
    }
}
 
// функция для получения дня и месяца
function getMonth_and_Day(count){

    let today=new Date();
    var mas_month=['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
 
    if (today.getDate()+count==32)
    {
       return `${mas_month[today.getMonth()]} 01`;
    }
    else 
    {
       if(today.getDate()+count < 10)
       {
           return `${mas_month[today.getMonth()]} 0${today.getDate()+count}`;
       }
       
       return `${mas_month[today.getMonth()]} ${today.getDate()+count}`;
    }
}

// функция на наличие существования определенного элемента
function check_is(){

    const second_div=$('#second_div');

    if (second_div)
    {
        second_div.remove();
    }
}