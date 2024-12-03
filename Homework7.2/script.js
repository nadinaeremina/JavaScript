let but=document.querySelector('#btn_ok');
let input_logo=document.querySelector('#login');
let input_password=document.querySelector('#password');

const mas_logo=[
    {
        login: 'Nadya',
        password: '123'
    },
    {
        login: 'Tanya',
        password: '124'
    },
    {
        login: 'Irina',
        password: '125'
    }
];

function gotoURL() {
    location.href="welcome.html";
}

let flag = false;

but.addEventListener('click', (e)=>{

    if(input_logo.value.length>0)
    {
        if (input_password.value.length>0)
        {
            for (let index = 0; index < mas_logo.length; index++) {
    
                if (mas_logo[index].login==input_logo.value)
                {
    
                    flag=true;
    
                    if (mas_logo[index].password==input_password.value)
                    {
                        alert("Вы вошли!");
                        gotoURL();
                        break;
                    }
                    else
                    {
                        alert("Неверный пароль!");
                        input_password.value='';
                        break;
                    }
                }
            }
    
            if(!flag)
            {
                alert("Такой пользователь не зарегистрирован!");
                input_logo.value='';
                input_password.value='';
            }
        }
        else{
            alert("Введите пароль!");
        }
    }
    else
    {
        alert("Введите логин!");
    }
});