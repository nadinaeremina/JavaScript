// 1 ////////////////////////////
let loginForm=document.forms[0];
// // // console.dir(loginForm);

// loginForm.addEventListener("reset", (e)=>{

//     // прервать автоматическую отправку данных с формы
//     e.preventDefault();

//     if(confirm("Вы уверены, что нужно сбросить данные с формы?"))
//     {
//         loginForm.reset(); // сбросит наш 'input', который в форме
//         //location.reload(); // сбросит все
//     }
//     else{
//         alert("Ок! Ничего не меняем.")
//     }  
// })

// console.dir(loginForm);

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset 

//location.reload(); // страница перезагрузится

// 2 //////////////////////////////
// loginForm.addEventListener('mouseenter', ()=>{
//     loginForm.style.background="aqua";
//     //alert("Мышь пришла");
// })

// loginForm.addEventListener('mouseleave', ()=>{
//     loginForm.style.background="";
//     //alert("Мышь ушла");
// })

// 3 /////////////////////////////////
// loginForm=document.querySelector("input[type='text']");
// const paswControl=document.querySelector("input[type='password']");

// paswControl.addEventListener("blur", ()=>{
//     if(!this.value)
//     {
//         alert("Забыли указать пароль!");
//         paswControl.style.backgroundColor="red";
//     }
// })

// // 4 /////////////////////////////////////
// 'onkeydown', 'onkeyup'

const pinControl=document.querySelector("input[name='pin']");
pinControl.addEventListener("keydown", (e)=> {
    let key=parseInt(e.key);
    let checkExp=/[09A-F]/;
    // if (!checkExp.test(e.key))
    // {
    //     e.preventDefault();
    // }
    // if (isNaN(e.key))
    // {
    //     e.preventDefault();
    // }
    // if (e.key!=0 && e.key!=1)
    // {
    //     e.preventDefault();
    // }
    if (!checkExp.test(e.key.toUpperCase()))
    {
        e.preventDefault();
    }
    pinControl.value=pinControl.value.toUpperCase();
});

loginForm.addEventListener("keyup", (e)=>
{
    loginForm.value=loginForm.value.toUpperCase();
});