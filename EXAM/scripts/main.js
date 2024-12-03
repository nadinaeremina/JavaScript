// получаем элементы с помощью jQuery
const input=$('#input_city');
const my_button=$('#btn_show');
const btn_today=$('.btn-outline-success');
const btn_5_day=$('.btn-outline-secondary');

// переменная, которая хранит в себе название города
let city;

// в документе присутствуют 3 кнопки
// кнопка 'Поиск'
my_button.click(()=>{
    todayFunc();
});

// кнопка 'Today'
btn_today.click(()=>{
    todayFunc();
});

// кнопка '5-day-forecast'
btn_5_day.click(()=>{
    five_day_Func();
});

// функция для получения данных о погоде на несколько дней 
function five_day_Func(){

    city=$.trim(input.val());

    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ab0244e4b53f108d918e1badc7a92668`;
    
    getWeather(url)
    .then(parseWeather)
    .then(show_five_day_Weather)
    .catch(showError)
}

// функция для получения данных о погоде на текущее время
function todayFunc(){

    city=$.trim(input.val());
  
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab0244e4b53f108d918e1badc7a92668`;
    
    getWeather(url)
    .then(parseWeather)
    .then(showWeather)
    .catch(showError)

    today_allday_Func();
}

function today_allday_Func(){

    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ab0244e4b53f108d918e1badc7a92668`;
  
    getWeather(url)
    .then(parseWeather)
    .then(show_allWeather)
    .catch(showError)
}