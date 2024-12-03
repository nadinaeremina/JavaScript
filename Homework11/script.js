let btn_ok=document.querySelector('#btn_ok');
let user_name=document.querySelector('#name');
let user_lastname=document.querySelector('#lastname');
let user_middlename=document.querySelector('#middlename');

var user={};

btn_ok.addEventListener('click', ()=>{
    main_Func();
});

function main_Func(){

    user.name=user_name.value;
    user.lastname=user_lastname.value;
    user.middlename=user_middlename.value;

    getUserLastname(user)
    .then(firstUC)
    .then(stringToArray)
    .then(showReversArray)
    .catch(showError)
}

function getUserLastname(user_data)
{
    return new Promise((resolve, reject)=>
    {
        if(!user_data.name && !user_data.lastname && !user_data.middlename)
        {
            reject(new Error("Argument not specified!"));
        }
        else 
        {
            resolve(user_data);
        }
    })
}

function firstUC(user_data)
{
    return new Promise((resolve, reject)=>{
        if(!user_data.name || !user_data.lastname || !user_data.middlename)
        {
            reject(new Error("no data to UC!"));
        }
        else 
        {
            user_data=(user_data.name).charAt(0)+(user_data.lastname).charAt(0)+(user_data.middlename).charAt(0);
            resolve(user_data);
        }
    })
}

function stringToArray(user_data)
{
    return new Promise((resolve, reject)=>{
        if(user_data.length>3)
        {
            reject(new Error("to much data to StringArray!"));
        }
        else 
        {
            let char_mas=[];
            char_mas=Array.from(user_data);
            resolve(char_mas);
        }
    })
}

function showReversArray(char_mas)
{
    alert(`Результат: ${char_mas.reverse()}`);
}

function showError(error)
{
     console.error(error.message);
}