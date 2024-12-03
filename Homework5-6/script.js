let loginForm=document.forms[0];
let count_li=0;

loginForm.addEventListener("reset", (e)=>{

    // прервать автоматическую отправку данных с формы
    e.preventDefault();

    if(confirm("Вы уверены, что нужно сбросить все данные?"))
    {
        location.reload(); 
    }
    else{
        alert("Ок! Ничего не меняем.")
    }  
})

var validationsamary=[];

var name;
var lastname;
var email;
var date;
var gender;
var salary;
var count;
var now_date;
var date_bd;

var vacancy=[];

function Validate(form)
{
    count = 0;
    count_li=0;
    let result=true;
    validationsamary.length=0;
 
    name=document.querySelector("input[name='name']").value;
    lastname=document.querySelector("input[name='lastname']").value;
    email=document.querySelector("input[name='email']").value;
    date=document.querySelector("input[name='date_bd']").value;
    gender=document.querySelectorAll("input[name='gender']");
 
    now_date=new Date();
    date_bd=new Date(date);
 
    let differance=(now_date-date_bd)/24/60/60/1000/365;

    const mas_teh=document.querySelectorAll('.list_teh');

    for (let index = 0; index < mas_teh.length; index++) {
        if(mas_teh[index].checked==true)
        {
            count++;
        }
    }

    if(!name)
    {
         result = false;  
         validationsamary.push("Имя не заполнено! \n");
         count_li++;
    }
    if(!lastname)
    {
        result= false;
        validationsamary.push("Фамилия не заполнена! \n");
        count_li++;
    }
    if(!email)
    {
        result= false;
        validationsamary.push("Электронная почта не заполнена! \n");
        count_li++;
    }
    if(differance<18)
    {
        result= false;
        validationsamary.push("Возраст не можт быть меньше 18! \n");
        count_li++;
    }
    if(!date)
    {
        result= false;
        validationsamary.push("Возраст не можт быть меньше 18! \n");
        count_li++;
    }
    if(gender[0].checked==false && gender[1].checked==false)
    {
        result= false;
        validationsamary.push("Укажите ваш пол! \n");
        count_li++;
    }
    if(count<3)
    {
        result= false;
        validationsamary.push("Выберите больше технологий! \n");
        count_li++;
    }

   return result;
}

loginForm.addEventListener("submit", function(e)
{
   e.preventDefault();
   
   if(Validate(this))
   {
    validationsamary=[];
    document.querySelector('#error').innerHTML='';

    if (count<=4)
    {
        salary=50000;
    }
    else if(count<=6)
    {
        salary=75000;
    }
    else if(count==7)
    {
        salary=100000;
    }

    vacancy=[];
    document.querySelector('#offers').innerHTML='';

    new_h2=document.createElement('h2');
    new_h2.align="center";

    if(document.querySelector('#m').checked==true)
    {
        vacancy.push("Data Scientist");
        vacancy.push("Software developer");
        vacancy.push("Unity developer");
        vacancy.push("Backend developer");

        new_h2.innerText="Уважаемый, ";
    }
    else{
        vacancy.push("Frontend developer");
        vacancy.push("React-Native developer");
        vacancy.push("PHP developer developer");

        new_h2.innerText="Уважаемая, ";
    }

    new_h2.innerText+=`${lastname} ${name}!`;

    new_p1=document.createElement('p');
    new_p1.innerText="В связи с вашим полом мы предлагаем вам следующие вакансии:";

    new_ul=document.createElement('ul');
    new_ul.className="offers_ul";

    new_p2=document.createElement('p');
    new_p2.innerText=`В связи с вашими навыками мы предлагаем вам следующую плату: ${salary} рублей/месяц`;

    new_p3=document.createElement('p');
    if (now_date.getMonth()==date_bd.getMonth())
    {
        if (now_date.getDate() == date_bd.getDate())
        {
            new_p3.innerText="С днем рождения!";
        }
        else if(now_date.getDate()>date_bd.getDate())
        {
            let kol=now_date.getDate()-date_bd.getDate();
            new_p3.innerText=`Ваш день рождения через ${kol} дней!`;
        }
    }

    document.querySelector('#offers').append(new_h2, new_p1, new_ul, new_p2, new_p3);

    for (let index = 0; index < vacancy.length; index++) {
        new_li=document.createElement('li');
        new_li.innerText=vacancy[index];
        document.querySelector('.offers_ul').appendChild(new_li);
    }

    //this.submit();
   }
   else{
    vacancy=[];
    document.querySelector('#offers').innerHTML='';
    document.querySelector('#error').innerHTML='';

    let new_ul=document.createElement('ul');
    new_ul.className="my_ul";
    document.querySelector('#error').appendChild(new_ul);
    
    for (let index = 0; index < count_li; index++) {
        let new_li=document.createElement('li');
        new_li.innerText=validationsamary[index];
        document.querySelector('ul').appendChild(new_li);
    }
   }
});