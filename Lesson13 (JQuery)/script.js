// 1

// const apicallResult=$("#apiCallResults");
// const movieURL="http://www.omdbapi.com/?t=Joker&y=2019&apikey=365d77a0";

// // Get_movie

// // Ссылка:
// // https://api.jquery.com/jquery.get/

// $.get(movieURL, (data)=>{
//     console.dir(data);
// });

// // Post_movie - JSobject

// // https://api.jquery.com/jquery.ajax/

// $.post(movieURL,{name:"MyMovie", year: "2020", genre:"Documentary"}, (data)=>{
//     //shoe result(data)
// });

// // Post_movie - FormData

// $.post(movieUR, $("#addMovieForm").serialize(), (data)=>{
//     //shoe result(data)
// })
 
// // 4 PUT - запрос

// $.ajax({
//     type: "PUT",
//     url: movieURL,
//     data: $("#addMovieForm").serialize(),
//     success: (data)=>{console.log(data)},
//     dataType: "json"
//  });

// 2
////////////////////////////////////////////////// Пример с БД /////////////////////////////////////////////

const apiCallResult=$("#apiCallResults");
const apiURL="http://localhost:55772/api/Users";

// 'GET'
// $.get(apiURL, (data)=> {
//     //console.dir(data);
//     var responseText=JSON.stringify(data);
//     displayResult(responseText);
// })

// 'POST'
const newUser={
    UserID: 0,
    FirstName: "Nadi",
    LastName: "Eremina",
    MiddleName: "Alex",
    Password: "123",
    BirthDate: "2024-11-28",
    Picture: null,
    Registered: "2024-11-28T17:47:10.5614984+05:00"
}

// $.post(apiURL, newUser, (data)=> {
//     displayResult(data);
// })

function displayResult(data) {
    var responseText=JSON.stringify(data);
    apiCallResult.text(responseText);
}

// 'PUT'

const editUser={
    UserID: 4,
    FirstName: "Nadiyuyy",
    LastName: "Ereminayyyyy",
    MiddleName: "Alexyyy",
    Password: "123456",
    BirthDate: "2024-11-28",
    Picture: null,
    Registered: "2024-11-28T17:47:10.5614984+05:00"
}

$.ajax({
    type: "PUT",
    url: apiURL,
    data: editUser,
    success: (data)=>{displayResult(data)},
    dataType: "json"
 });

// 'DELETE'

// 1
// $.ajax({
//    type: "DELETE",
//    url: apiURL+"/"+editUser.UserID,
//    success: (data)=>{console.dir(data)},
// });

// 2
//  function DELETE_User(User_ID)
//  {
//     if (n==1)
//     {
//         $.ajax({
//             type: "DELETE",
//             url: apiURL+"/"+User_ID,
//             success: (data)=>{console.dir(data)},
//          });
//     }
//  }

// Get User_id
$.get(apiURL+"/"+'2', (data)=> {
    displayResult(data);
})

// Ресурс:
// https://sv443.net/jokeapi/v2/languages/en

// https://sv443.net/jokeapi/v2/

 
