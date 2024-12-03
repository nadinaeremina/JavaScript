const forest=document.querySelector('#forest');
const mushrooms=document.querySelectorAll('.mushrooms');
const kol_mush=document.querySelector('#kol_mush');
const kol_click=document.querySelector('#kol_click');

let maxX=900;
let maxY=620;
let minY=350;

let count_click=0;
let count_mush=0;

forest.addEventListener('click', (e)=>{
   count_click++;
   kol_click.innerText=count_click;
})

Start();

function Start(){

    for (const element of mushrooms) {
    
        element.addEventListener("mousedown", (e)=>{

            e.target.addEventListener("dragstart", omMoveMush);
            e.target.addEventListener("drag", omMoveMush);
            e.target.addEventListener("dragend", omMoveMush);
        });

        element.style.opacity=0.4;
        element.style.left=Math.floor(Math.random() * (maxX-0+1)) + 0+"px"; 
        element.style.top=Math.floor(Math.random() * (maxY-minY+1)) + minY+"px";
    }
}

function omMoveMush(e)
{
    const current_mush = e.target;

    current_mush.style.left=e.clientX-30+'px';
    current_mush.style.top=e.clientY-30+'px';
    current_mush.style.opacity=1;

    if (e.clientX<30)
    {
        current_mush.style.left="10px";
    }
    if (e.clientX>950)
    {
        current_mush.style.left="950px";
    }   
    if (e.clientY>620)
    {
        current_mush.style.top="620px";
    }
    if (e.clientY<30)
    {
        current_mush.style.top="10px";
    }

    if(e.clientX<150 && e.clientX>1 && e.clientY<100 && e.clientY>1)
    {
        count_mush++;
        kol_mush.innerText=count_mush;
        onBallReleased(current_mush);
        current_mush.style.opacity=0;

        if (count_mush==5)
        {
            setTimeout(Start, 2000);

            setTimeout(()=>{
               
                count_mush=0;
                count_click=0;
    
                kol_click.innerText=count_click;
                kol_mush.innerText=count_mush;
            }, 2000)
        }
    }
}

//отписываемся
function onBallReleased(mushroom){
    mushroom.removeEventListener("dragstart", omMoveMush);
    mushroom.removeEventListener("drag", omMoveMush);
    mushroom.removeEventListener("dragend", omMoveMush);
}