// получаем доступ к 'input'
const newItemCateg=document.querySelector("[name='newItemCategory']");
const newItemType=document.querySelector("[name='newItemType']");
const newItemManuf=document.querySelector("[name='newItemManuf']");
const newItemModel=document.querySelector("[name='newItemModel']");
const newItemQty=document.querySelector("[name='newItemQty']");
const btn_add=document.querySelector("[name='addItemToOrder']");

// событие, связанное с выбором категории
newItemCateg.addEventListener('change', (e)=>{
    let cat=e.target.value;
    let options=document.querySelector("[name='newItemType']").querySelectorAll('option');

    if (options.length!=0)
    {
        for (let index = 0; index < options.length; index++) {
            newItemType.removeChild(newItemType.firstChild);
        }
    }

    if(cat=="Холодильники")
    {
        // создаем несколько 'option'
        for (let index = 0; index < 3; index++) {
            let new_option=document.createElement('option');
            if(index==0)
            {
                new_option.innerText="компрессионные";
            }
            else if(index==1)
            {
                new_option.innerText="термоэлектрические";
            }
            else if(index==2)
            {
                new_option.innerText="абсорбционные";
            }

            document.querySelector("[name='newItemType']").appendChild(new_option);
        }
    }
    else if(cat=="Микроволновки")
    {
        // создаем несколько 'option'
        for (let index = 0; index < 3; index++) {
            let new_option=document.createElement('option');
            if(index==0)
            {
                new_option.innerText="соло";
            }
            else if(index==1)
            {
                new_option.innerText="с грилем";
            }
            else if(index==2)
            {
                new_option.innerText="с конвекцией";
            }

            document.querySelector("[name='newItemType']").appendChild(new_option);
        }
    }
    else if(cat=="Электроплиты")
    {
        // создаем несколько 'option'
        for (let index = 0; index < 3; index++) {
            let new_option=document.createElement('option');
            if(index==0)
            {
                new_option.innerText="камерные";
            }
            else if(index==1)
            {
                new_option.innerText="муфельные";
            }
            else if(index==2)
            {
                new_option.innerText="трубчатые";
            }
    
            document.querySelector("[name='newItemType']").appendChild(new_option);
        }
    }
})

// получаем доступ к табличке
const orderTable=document.getElementById('id_orderTable');
var isEditMode=false;
let inputs=[];

function prepareValues()
{
    // создаем пустой обьект в виде элементов массива в будущем
    let values={};

    // накидываем поля обьекту
    values.category=newItemCateg.value;
    values.type=newItemType.value;
    values.manuf=newItemManuf.value;
    values.model=newItemModel.value;
    values.qty=newItemQty.value;

    return values;
}

// создаем ф-цию по добавлению наших значений в новую табличку
// передаем строку и массив значений

1
function appendOrderItemValues(row, values)
{
    // создаем ячейки и указывааем им место
    let categoryCel=row.insertCell(0);
    categoryCel.innerHTML=`<input type="text" style="width: 100px;" name="categoryCell" readOnly=true value=${values.category}/>`;

    let typeCel=row.insertCell(1);
    typeCel.innerHTML=`<input type="text" style="width: 130px;" name="typeCell" readOnly=true value=${values.type}/>`;

    let manufCel=row.insertCell(2);
    manufCel.innerHTML=`<input type="text" name="manufCell" readOnly=true value=${values.manuf}/>`;

    let modelCel=row.insertCell(3);
    modelCel.innerHTML=`<input type="text" style="width: 90px;" name="modelCell" readOnly=true value=${values.model}/>`;

    let qtyCel=row.insertCell(4);
    qtyCel.innerHTML=`<input type="number" min="1" name="qtyCell" readOnly=true value="${values.qty}"/>`;

    let actionCell=row.insertCell(5);
    // обращаемся по 'this' - значит обращаемся к самому обьекту - строке ('row')
    actionCell.innerHTML='<input type="button" name="btnDeleteItem"' +
    'value="DELETE" onclick="deleteItem(this)"/>';
    actionCell.innerHTML+='<input type="button" name="btnRndItem" value="Edit" onclick="editItem(this)"/>';

    return row;
}

// ф-ция, соед. в себе 2 предыдущих ф-ции, связанная непосредственно с добавлением
function addItemToOrder()
{
    let values=prepareValues();
    let newRow=orderTable.insertRow();
    appendOrderItemValues(newRow, values);
}

// ф-ция для удаления строки
function deleteItem(button)
{
    // 1
    // orderTable.querySelector('thead').removeChild(button.parentNode.parentNode);

    // 2 
    // достаем таблицу
    const rowParent=button.parentNode.parentNode.parentNode;
    // из таблицы удаляем ребенка
    rowParent.removeChild(button.parentNode.parentNode);
}

btn_add.addEventListener('click', addItemToOrder);