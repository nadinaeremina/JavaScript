//mousedown
//dragstart - начало движения
//drag
//dragend
//mouseup

const ball=document.querySelector('.ball');

ball.addEventListener("mousedown", onBallTouched);

// function onBallTouched() {
//     подписываемся на событие 'dragstart'
//     ball.addEventListener("dragstart", (e)=>
//     {
//         console.dir(e);
//     });
//     ball.addEventListener("dragend", (e)=> 
//     {
//         console.dir(e);
//     });
// }

// console.dir(ball);

// через 'style', тк 'position: absolute';
// ball.style.left="100px";
// ball.style.top="150px";

ball.x=100;
ball.y=150;

let left=0;
let right=0;

function onBallTouched() {
    // навешиваем сразу три события
    ball.addEventListener("dragstart", processBallMove);
    ball.addEventListener("drag", processBallMove);
    ball.addEventListener("dragend", processBallMove);
}

function processBallMove(e)
{
    if(e.clientX<730 && e.clientX>30 && e.clientY<540 && e.clientY>45)
    {
        // '-25px'-смещение в центр мячика
        ball.style.left=e.clientX-25+'px';
        ball.style.top=e.clientY-25+'px';
    }
    else
    {
        if(e.clientX>=730)
        {
            ball.style.left='720px';
            ball.style.top=e.clientY-25+'px';
        }
        if(e.clientX<=30)
        {
            ball.style.left='10px';
            ball.style.top=e.clientY-25+'px';
        }
        if(e.clientY>=540)
        {
            ball.style.top='520px';
            ball.style.left=e.clientX-25+'px';
        }
        if(e.clientY<=45)
        {
            ball.style.top='15px';
            ball.style.left=e.clientX-25+'px';
        }
    }

    if(e.clientX<160 && e.clientY>90 && e.clientY<500)
    {
        refund("left");
        onBallReleased()
    }
    else if(e.clientX>620 && e.clientY>90 && e.clientY<500)
    {
        refund("right");
        onBallReleased()
    }
}

ball.addEventListener("mouseup", onBallReleased);

// отписываемся
function onBallReleased() {
    ball.removeEventListener("dragstart", processBallMove);
    ball.removeEventListener("drag", processBallMove);
    ball.removeEventListener("dragend", processBallMove);
}

function refund(direction)
{
    ball.style.left="362px";
    ball.style.top="268px";

    if(direction=="left")
    {
        left++;
        document.querySelector('#left_score').innerText=left;
    }
    if(direction=="right")
    {
        right++;
        document.querySelector('#right_score').innerText=right;
    }
}
