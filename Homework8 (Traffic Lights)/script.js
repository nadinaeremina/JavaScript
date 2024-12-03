const colors=document.querySelectorAll('.color');
let count = 0;

const but=document.querySelector('#btn');
but.addEventListener('click', (e)=>{

    setInterval(()=>
    {
        if (count == 0)
        {
            colors[count].setAttribute('class', 'color red');
            colors[2].setAttribute('class', 'color');
        }
        else if (count==1)
        {
            colors[count].setAttribute('class', 'color yellow');
            colors[count-1].setAttribute('class', 'color');
        }
        else if (count==2)
        {
            colors[count].setAttribute('class', 'color green');
            colors[count-1].setAttribute('class', 'color');
            count=-1;
        }

        count++;

    }, 2000)
});