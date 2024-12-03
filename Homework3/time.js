// let select=document.getElementById("my_select");
// let option=document.querySelector("option");
// select.addEventListener("change", function() {
//     alert(option.value);
// })

let date=new Date();

let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();

let min_word='';
let sec_word='';

let button=document.getElementById('show_time');
button.addEventListener('click', function() {

    min_word='';
    sec_word='';

    if (minutes<10)
    {
        min_word='0';
    }
    if (seconds<10)
    {
        sec_word='0';
    }

    alert(hours+":"+min_word+minutes+":"+sec_word+seconds);
})

let div_sec=document.getElementById('sec');
let btn_sec=div_sec.querySelector('button');

btn_sec.addEventListener('click', function()
{
    if (div_sec.querySelector('input').value)
    {
        seconds=seconds+div_sec.querySelector('input').value/1;

        if (seconds>=60)
        {
            minutes+=Math.floor(seconds/60);
            seconds%=60;
        }
    }
})

let div_min=document.getElementById('min');
let btn_min=div_min.querySelector('button');

btn_min.addEventListener('click', function()
{
    if (div_min.querySelector('input').value)
    {
        minutes=minutes+div_min.querySelector('input').value/1;

        if(minutes>=60)
        {
            hours+=Math.floor(minutes/60);
            minutes%=60;
        }
    }
})

let div_hour=document.getElementById('hour');
let btn_hour=div_hour.querySelector('button');

btn_hour.addEventListener('click', function()
{
    if (div_hour.querySelector('input').value)
    {
        hours+=div_hour.querySelector('input').value/1;
    }
})

let btn_exit=document.getElementById('exit');

btn_exit.addEventListener('click', function() {
    window.location.href="index.html";
})