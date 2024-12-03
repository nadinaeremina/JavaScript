// создаем обьект
const getMovieRequest=new XMLHttpRequest();

let pic=document.getElementById("picture");
let actors=document.getElementById("actors");
let awards=document.getElementById("awards");
let office=document.getElementById("office");
let country=document.getElementById("country");
let director=document.getElementById("director");
let genre=document.getElementById("genre");
let rating=document.getElementById("rating");
let votes=document.getElementById("votes");
let language=document.getElementById("language");
let metascore=document.getElementById("metascore");

getMovieRequest.open("GET", "http://www.omdbapi.com/?t=joker&y=2019&apikey=365d77a0");

 getMovieRequest.onreadystatechange=()=>{

    if(getMovieRequest.readyState==XMLHttpRequest.DONE)
    {
        switch (getMovieRequest.status) {
            case 200:
                {
                    const movieObj=JSON.parse(getMovieRequest.responseText);
                    pic.src=movieObj.Poster;
                    actors.innerText=movieObj.Actors;
                    awards.innerText=movieObj.Awards;
                    office.innerText=movieObj.BoxOffice;
                    country.innerText=movieObj.Country;
                    director.innerText=movieObj.Director;
                    genre.innerText=movieObj.Genre;
                    rating.innerText=movieObj.Rating;
                    votes.innerText=movieObj.imdbVotes;
                    language.innerText=movieObj.Language;
                    metascore.innerText=movieObj.Metascore;
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