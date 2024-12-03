// function gotoURL() {
//     location.href="https://google.com";
// }

// 1 
// document.querySelector("#id_bg").addEventListener("click", gotoURL);

// 2
// document.querySelector("#id_bg").addEventListener("click", ()=>
// {
//    console.dir(event);
//    // location.href="https://google.com";
// });

// ищем форму
const logForm=document.forms[0];
//console.dir(logForm);

function Validation(form)
{
    const login = document.querySelector("input[name='login']").value;
    const pasword = document.querySelector("input[name='password']").value;

    console.dir(login);
    console.dir(password);
}

// можно создать здесь ф-цию по валидации
function my_Validation(form)
{
    // проверка введения данных(возраст, имя и тд)
    console.dir(form);
    return false;
}

logForm.addEventListener("submit", function(e)
{
    // обработчик по умолчанию - здесь его отключили, без этой строчки есть
   e.preventDefault();// здесь нет отправки // мы его остановили
   // в network-process-payload-там будут наши данные по паролю и логину
   
   // перед отправкой пройти валидацию

   // 1
   //    if(my_Validation(this))
   //    {
   //        this.submit(); 
   //        // запускаем отправку формы
   //    }
   // 2

        if(Validation(this))
        {
            this.submit();
        }
        else{
         alert("Error form!");
        }
})

//////////////////////////// пример

var validationsamary="";

function Validate(form)
{
   let result=true;
   validationsamary="";

   const login=document.querySelector("input[name='login']").value;
   const password=document.querySelector("input[name='password']").value;

   if(!login)
   {
        result = false;  
        validationsamary+=" логин пуст! \n";
   }
   if(!password)
   {
       result= false;
       validationsamary+=" пароль пуст! \n";
   }
   return result;
}

loginForm.addEventListener("submit", function(e)
{
   e.preventDefault();
   
   if(Validate(this))
   {
       this.submit();
   }
   else{
       alert(validationsamary);
   }
});



