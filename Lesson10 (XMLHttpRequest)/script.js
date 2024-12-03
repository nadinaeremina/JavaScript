// Сайт - открытый API (фильмы)
// https://omdbapi.com/
// ключ: 365d77a0

// так выглядит запрос: http://www.omdbapi.com/?t=Joker&y=2019
// от этой строки можно взять любое св-во: год выпуска, год релиза, режиссер, актеры и тд
// вставляем ключ в конце после амперсанда следующим образом:
// https://www.omdbapi.com/?t=Joker&y=2019&apikey=365d77a0

// Ресурс:
// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState

// readystatechange-когда изменяется статус 'readystate'

// создаем обьект
const getMovieRequest=new XMLHttpRequest();
//console.dir(getMovieRequest);

// подписываемся на событие
// 1
// getMovieRequest.addEventListener("readystatechange", ()=>{

//     console.log(getMovieRequest.readyState);
//     console.log(getMovieRequest.status);
// });

// getMovieRequest.open("GET", "http://www.omdbapi.com/?t=joker&y=2019&apikey=365d77a0");

// 2
// getMovieRequest.open("GET", "http://www.omdbapi.com/?t=joker&y=2019&apikey=365d77a0");

// getMovieRequest.onreadystatechange=()=>{

//     // добавляем в существующее событие проверку
//     if (getMovieRequest.readyState==4 && getMovieRequest.status==200)
//     {
//         console.dir(getMovieRequest.responseText);
//     }
// };

// getMovieRequest.send();

// 3

// getMovieRequest.open("GET", "http://www.omdbapi.com/?t=joker&y=2019&apikey=365d77a0");

// getMovieRequest.onreadystatechange=()=>{

//     switch(getMovieRequest.readyState) {
//         case XMLHttpRequest.HEADERS_RECEIVED:
//             {
//                 console.dir("Headers_Received");
//             }
//             break;

//         case XMLHttpRequest.LOADING:
//             {
//                 console.dir("Loading");
//             }    
//             break;

//         case XMLHttpRequest.OPENED:
//             {
//                 console.dir("Opened");
//             }
//             break;

//         case XMLHttpRequest.DONE:
//             {
//                 console.dir("Done");
//             }
//             break;

//         default:
//             break;
//     }
// };

// getMovieRequest.send();

// 'Opened' не успевает отобразиться (ассинхронный код)

// 4

//  getMovieRequest.open("GET", "http://www.omdbapi.com/?t=joker&y=2019&apikey=365d77a0");

//  getMovieRequest.onreadystatechange=()=>{

//     if(getMovieRequest.readyState==XMLHttpRequest.DONE)
//     {
//         switch (getMovieRequest.status) {
//             case 200:
//                 {
//                     // get-запрос передает нам get-строку-мы ее распарсиваем из json  в object
//                     const movieObj=JSON.parse(getMovieRequest.responseText);
//                     console.dir(movieObj);
//                 }
//                 break;

//             case 404:
//                 {
//                     console.dir("eror");
//                 }
//                 break;

//             default:
//                 break;
//         }
//     }
//  }

//  // отправляем запрос
//  getMovieRequest.send();

// 5
let pic=document.getElementById("picture");

getMovieRequest.open("GET", "http://www.omdbapi.com/?t=joker&y=2019&apikey=365d77a0");

 getMovieRequest.onreadystatechange=()=>{

    if(getMovieRequest.readyState==XMLHttpRequest.DONE)
    {
        switch (getMovieRequest.status) {
            case 200:
                {
                    const movieObj=JSON.parse(getMovieRequest.responseText);
                    pic.src=movieObj.Poster;
                }
                break;

            case 400:
                {
                    console.dir("error");
                }
                break;

            default:
                break;
        }
    }
 }

 getMovieRequest.send();

// 6 // Function
// function getMovie()
// {
//     let pic=document.getElementById("picture");
    
//     getMovieRequest.open("GET", "http://www.omdbapi.com/?t=joker&y=2019&apikey=365d77a0");
    
//     getMovieRequest.onreadystatechange=()=>{
    
//         if(getMovieRequest.readyState==XMLHttpRequest.DONE)
//         {
//             switch (getMovieRequest.status) {
//                 case 200:
//                     {
//                         const movieObj=JSON.parse(getMovieRequest.responseText);
//                         pic.src=movieObj.Poster;
//                     }
//                     break;
    
//                 case 400:
//                     {
//                         console.dir("eror");
//                     }
//                     break;
    
//                 default:
//                     break;
//             }
//         }
//     }
    
//     getMovieRequest.send();
// }

// const movie=getMovie(); // пар-ры, кот можно передавать : year, title + str (конкатенировать строку)
// console.dir(movie);

// 7 // Отправка формы FormData()

// function postMove(){

//     // создаем новый обьект (типа post)
//     const createMovieRequest=new XMLHttpRequest();

//     // передаем название фильма, год и жанр
//     const formValues="name=MyMovie&year=2024&genre=documentary";

//     // передаем адрес на создание нового обьекта (несуществующий)
//     createMovieRequest.open("POST", "http://my.company.com/api/movie"); 

//     // задаем специальные настройки (обязат настройка, если мы кудато отправляем форму)
//     createMovieRequest.setRequestHeader("Content.type", "application/x-www-form-urlencoded");
//     // 'Content.type'-тип запроса (интернет форма, закодированная для обычной кодировки данных)

//     createMovieRequest.onreadystatechange=()=>{

//         if (createMovieRequest.readyState==XMLHttpRequest.DONE)
//         {
//             switch (createMovieRequest.status) {
//                 case 200:
//                     {
//                         return createMovieRequest.responseText;
//                     }
//                     break;
//                 case 400: 
//                     {
//                         return "Error";
//                     }
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }

//     createMovieRequest.send(formValues);
// }

// 8.1 // FormData()

// function postMove(){

//     // создаем новый обьект (типа post)
//     const createMovieRequest=new XMLHttpRequest();

//     const formValues=new FormData();

//     // добавляем поля и значения
//     formValues.append("name", "MyMovie");
//     formValues.append("year", "2024");
//     formValues.append("genre", "documentary");

//     // передаем адрес на создание нового обьекта (несуществующий)
//     createMovieRequest.open("POST", "http://my.company.com/api/movie"); 

//     // задаем специальные настройки (обязат настройка, если мы кудато отправляем форму)
//     createMovieRequest.setRequestHeader("Content.type", "application/x-www-form-urlencoded");
//     // 'Content.type'-тип запроса (интернет форма, закодированная для обычной кодировки данных)

//     createMovieRequest.onreadystatechange=()=>{

//         if (createMovieRequest.readyState==XMLHttpRequest.DONE)
//         {
//             switch (createMovieRequest.status) {
//                 case 200:
//                     {
//                         return createMovieRequest.responseText;
//                     }
//                     break;
//                 case 400: 
//                     {
//                         return "Error";
//                     }
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }

//     createMovieRequest.send(formValues);
// }

// Ресурсы: 
// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

// 8.2 // FormData()

// function postMove(){

//     // создаем новый обьект (типа post)
//     const createMovieRequest=new XMLHttpRequest();

//     const formValues=new FormData();

//     // добавляем поля и значения
//     formValues.append("name", "MyMovie");
//     formValues.append("year", "2024");
//     formValues.append("genre", "documentary");

//     // передаем адрес на создание нового обьекта (несуществующий)
//     createMovieRequest.open("POST", "http://my.company.com/api/movie"); 

//     // задаем специальные настройки (обязат настройка, если мы кудато отправляем форму)
//     createMovieRequest.setRequestHeader("Content.type", "application/x-www-form-urlencoded");
//     // 'Content.type'-тип запроса (интернет форма, закодированная для обычной кодировки данных)

//     createMovieRequest.onload=()=>{

//         // проверка статуса
//         if (createMovieRequest.status)
//         {
//             switch (createMovieRequest.status) {
//                 case 200:
//                     {
//                         // при успешном выгружаем наши данные
//                         return createMovieRequest.responseText;
//                     }
//                     break;
//                 case 400: 
//                     {
//                         return "Error";
//                     }
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }

//     createMovieRequest.send(formValues);
// }