// Ссылки:
// https://www.w3schools.com/js/js_promise.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// 'promise' - отдельный класс, который нужен в ассинхронном коде, он связывает нас между кодом и потребителем
// для чтения файлов, для работы с БД, для работы с сетью, для отправки запросов по API и тд
// чтобы не было такого, что результат не успевает обрабатываться
// обьект 'promise' возвращается функцией-отложенный результат (обещание получить результат)
// catch, finnaly, try, then
// 'Resolve' - все ок
// 'Reject' - ошибка
// 'open', 'onload', 'onerror'

// у Promise есть три состояния:
// ожидание - результат не определен, ждем, когда вып-ся какой-либо функционал
// выполнение - обьект вып-ся, рез-ом будет являться его значение вып-ия по Resolve
// отклонение - рез-т яв-ся ошибкой - об-т по regect - это наш Error

// Источники:
// https://www.schoolsw3.com/js/tryit.php?filename=tryjs_promise1

////////////////////////////////////////////// 1 ///////////////////////////////////////////////////

// не будет работать, тк нет доступа к серверу
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//   let req = new XMLHttpRequest();
//   req.open('GET', "mycar.html");
//   req.onload = function() {
//     if (req.status == 200) {
//       myResolve(req.response);
//     } else {
//       myReject("File not Found");
//     }
//   };
//   req.send();
// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );


/////////////////////////////////////////////// 2 ///////////////////////////////////////////////
// в 'promise' создаем ф-цию

// функция получает 'value' - это либо то, что мы передаем в 'myResolve', либо то, что мы передаем в 'myReject'
// let myPromise=new Promise(function (myResolve, myReject) {
//    let x = 0;

//    if (x==0)
//     {
//         myResolve("Все отлично!");
//     } 
//     else
//     {
//         myReject("Error");
//     }
// });

// // вызываем об-т 'promise'
// myPromise.then(
//     function(value) {myDisplay(value);},
//     function(error) {myDisplay(error);}
// )

// function myDisplay(params)
// {
//     document.getElementById("demo").innerHTML=params;
// }

///////////////////////////////////////// 3 getMovie(promise) //////////////////////////////////////////
const jokerUrl="http://www.omdbapi.com/?t=joker&y=2019&apikey=365d77a0";

function getMovie(jokerUrl)
{
    const errorMsg="Error loading movie data!";
    return new Promise((resolve, reject)=>
    {
        const getMovieRequest=new XMLHttpRequest();
        getMovieRequest.open("GET", jokerUrl);
        // 'onload' - в 'resolve'
        getMovieRequest.onload=()=>{
            if (getMovieRequest.status==200)
            {
                // парсим строку в обьект
                const movieobject=JSON.parse(getMovieRequest.responseText);
                resolve(movieobject);
                document.getElementById("demo").innerHTML=getMovieRequest.responseText;
            }
            else{
                reject(new Error(errorMsg)) // throw new Exception("text");
            }
        }
        // это - 'reject'
        getMovieRequest.onerror=()=>{
            reject(new Error(errorMsg));
        }

        getMovieRequest.send();
    });
}

// promise - задерживает выдачу на консоль, пока наши данные не получены
// вызов 'getMovie'
getMovie(jokerUrl)
.then((movie)=>{
    console.dir(movie);
})
.catch((error)=>{
    console.error(error.message);
// });

////////////////////////////////////////////// 4 //////////////////////////////////////////////////

// Ресурс: 
// https://learn.javascript.ru/task/promise-settimeout

// settimeout-задержка работы функции

// 4.1

// function setDelay(timeOut){
//     const errorMsg = "Timeout is too big";
//     return new Promise((resolve, reject)=>{
//     if(timeOut <= 5000){
//     resolve(setTimeout(function(){ alert("Таймаут прошел"); }, timeOut));
//     }
//     else{
//     reject(new Error(errorMsg));
//     }
//     });
//     }

// const okMsg="Timeout is ok";
// setDelay(2000)
// .then((okMsg)=>{
//     console.dir(okMsg);
// })
// .catch((error)=>{
//     console.error(error.errorMsg);
// })

// 4.2

// function setDelay(timeOut)
// {
//     const erroMsg = "слишком длинный интервал задержки!";
 
//     return new Promise((resolve, reject) =>{
//         if(timeOut <= 5000)
//         {
//             setTimeout(5000);
//             resolve("OK");
//         }
//         else
//         {
//             reject(new Error(erroMsg));
//         }
//     });
// }
 
// setDelay(8000)
// .then((okMsg) => {
//     console.dir(okMsg);
// })
// .catch((error) =>{
//     console.error(error.message);
// });

/////////////////////////////////////////// 5 ///////////////////////////////////////////////////
// const jokerUrl="http://www.omdbapi.com/?t=joker&y=2019&apikey=365d77a0";

// function getMovie(jokerUrl)
// {
//     const errorMsg="Error loading movie data!";
//     return new Promise((resolve, reject)=>
//     {
//         const getMovieRequest=new XMLHttpRequest();
//         getMovieRequest.open("GET", jokerUrl);
//         // 'onload' - в 'resolve'
//         getMovieRequest.onload=()=>{
//             if (getMovieRequest.status==200)
//             {
//                 resolve(getMovieRequest.responseText);
//             }
//             else{
//                 reject(new Error(errorMsg)) // throw new Exception("text");
//             }
//         }
//         // это - 'reject'
//         getMovieRequest.onerror=()=>{
//             reject(new Error(errorMsg));
//         }

//         getMovieRequest.send();
//     });
// }

// // если все хорошо - вызовется эта ф-ция
// // сюда попадет 'getMovieRequest.responseText'
// function parseMovie(movieJSON)
// {
//     return new Promise((resolve, reject)=>{
//         // если он пустой
//         if(!movieJSON)
//         {
//             reject(new Error("no data to parse!"));
//         }
//         else 
//         {
//             // парсим строку
//             resolve(JSON.parse(movieJSON));
//         }
//     })
// }

// function showMovie(movieobject)
// {
//     console.dir(movieobject);
// }

// function showError(error)
// {
//     console.error(error.message);
// }

// // promise - задерживает выдачу на консоль, пока наши данные не получены
// // вызов 'getMovie'

// // 5.1
// getMovie(jokerUrl)
// .then(parseMovie)
// .then(showMovie)
// .catch(showError)

// function logMovie(movieObj)
// {
//    return new Promise((resolve, reject)=>{
       
//     if(movieObj==null){
//         reject();
//     }
       
//     console.log(movieObj.Title);
//     resolve(movieObj);
//    });
// }
 
// function showTitle(movieObj)
// {
//    console.log(movieObj.Title);
// }
 
// // 5.2
// getMovie(jokerUrl)
// .then(parseMovie)
// .then(logMovie)
// .then(showTitle)
// .catch(showError)