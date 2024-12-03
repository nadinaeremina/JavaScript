// JQuery-библиотека функций, написанная на JS, облегчает манипуляции с DOM-элементами и обработку событий,
// использование анимаций, загрузка данных на онове Ajax
// JQuery-кроссбраузерная, дает возм-ть делать анимац эффекты без использования CSS-свойств

// Для установки-нужно скачать файл с сайта: https://code.jquery.com/ и сохранить в проект

// CDN для загрузки JQuery:
// ■■ jQuery CDN;
// ■■ Google CDN;
// ■■ Microsoft CDN;
// ■■ CDNJS CDN;
// ■■ jsDelivr CDN.

// Для использования JQuery пользуемся '$' вначале всегда

// полный сборник функционала
// https://api.jquery.com/ 

///////////////////////////////////////// 1 /////////////////////////////////////
// обращение по тегу-все 'li'
const li=$('li'); 
// const li=jQuery('li');

// обращение по 'name'
const btnMakeRed=$("[name='btnMakeRed']");
const btnMakeBlack=$("[name='btnMakeBlack']");
const btnHide=$(".btnHide");
const btnShow=$(".btnShow");
// '$' - заменяет название 'jQuery'

btnMakeRed.click(()=>{
    li.addClass("red-font")
});

btnMakeBlack.click(()=>{
    li.removeClass("red-font")
});

btnHide.click(()=>{
    li.hide();
});

btnShow.click(()=>{
    li.show();
});

//////////////////////////////////////// 2 //////////////////////////////////////
const squares=$(".square");
squares.odd().addClass("red-bg");
//squares.last().addClass("red-bg");

///////////////////////////////////////// 3 (Get) /////////////////////////////////////
const checkbox=$("[name='cbxTest']");

// получим 'value', если такой атрибут существует
console.dir(checkbox.attr("checked")); 
console.dir(checkbox.attr("name")); 
console.dir(checkbox.attr("type")); 

// получим 'true'
console.dir(checkbox.attr("checked")=="checked"); 

////////////////////////////////////////// 4 (Set) ////////////////////////////////////////
// $('#btnCheckIt').click(()=>{
//     $('.cbxTest').attr('checked', 'checked')
// });

// только для четных
$('#btnCheckIt').click(()=>{
    $('.cbxTest').odd().attr('checked', 'checked')
});

///////////////////////////////////////// 5 Append() /////////////////////////////////////////
// Ресурс: https://api.jquery.com/append/

// 1
// const btnAddElement=$('#btnAddElement');
// const elements=$('#elements');
// btnAddElement.click(()=>{elements.append('<option>Second Option</option>')});

// 2
// const btnAddElement=$('#btnAddElement');
// const elements=$('#elements');

// btnAddElement.click(()=>{
//     const new_option=document.createElement('option');
//     new_option.innerText="some option";
//     new_option.value="2";
//     elements.append(new_option);
// });

// 3
var optionNumber=1;
const btnAddElement=$('#btnAddElement');
const elements=$('#elements');

btnAddElement.click(()=>{
    const new_option=document.createElement('option');
    new_option.innerText=`some option ${optionNumber}`;
    new_option.value=optionNumber++;;
    elements.append(new_option);
});

// при смене элемента в 'option' - вызывается данное событие 
elements.change(()=> alert("!!!!"));

///////////////////////////////////////////// 6 (Remove) /////////////////////////////////////////////
const btnClear=$('#btnClear');

// удаляем все 'option', вложенные в 'elements'
btnClear.click(()=>{
    $('#elements > option').remove();
    optionNumber=1;
});

// чтобы удалить чекнутые элемениы - нужно сначала снять 'checked' - надо найти его сначала, потом снять
