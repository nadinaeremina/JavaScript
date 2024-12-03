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
        for (let index = options.length; index >0; index--) {
            
            newItemType.removeChild(newItemType.firstChild);
            
            if(index==0)
            {
                newItemType.remove();
            }
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
});

var selects=[];

function appendOrderItemValues(row, values)
{
    // создаем ячейки и указывааем им место
    for (let index = 0; index < 6; index++) {

        const new_select=document.createElement('select');

        if (index!=1 && index!=4 && index!=5)
        {
            let Cel=row.insertCell(index);
            Cel.appendChild(new_select);
        }

        if (index==0)
        {
            const new_select_type=document.createElement('select');
            //new_select_type.setAttribute('name', 'newItemType1');
            new_select_type.setAttribute('style', "width: 160px;");

            let typeCel1=row.insertCell(index+1);
            typeCel1.appendChild(new_select_type);

            const new_option1=document.createElement('option');
            new_option1.setAttribute('label', 'Холодильники');
            const new_option2=document.createElement('option');
            new_option2.setAttribute('label', 'Микроволновки');
            const new_option3=document.createElement('option');
            new_option3.setAttribute('label', 'Электроплиты');

            if (newItemCateg.value=="Холодильники")
            {
                new_option1.setAttribute('selected', 'selected');

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
                       
                    if(newItemType.value==new_option.innerText)
                    {
                        new_option.setAttribute('selected', 'selected');
                    }

                    //document.querySelector("[name='newItemType1']").appendChild(new_option);
                    new_select_type.appendChild(new_option);
                }
            }
            else if (newItemCateg.value=="Микроволновки")
            {
                new_option2.setAttribute('selected', 'selected');

                // создаем несколько 'option'
                for (let index = 0; index < 4; index++) {
                   
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
        
                    if(newItemType.value==new_option.innerText)
                    {
                        new_option.setAttribute('selected', 'selected');
                    }

                    //document.querySelector("[name='newItemType1']").appendChild(new_option);
                    new_select_type.appendChild(new_option);
                }
            }
            else if (newItemCateg.value=="Электроплиты")
            {
                new_option3.setAttribute('selected', 'selected');

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
        
                    if(newItemType.value==new_option.innerText)
                    {
                        new_option.setAttribute('selected', 'selected');
                    }

                    //document.querySelector("[name='newItemType1']").appendChild(new_option);
                    new_select_type.appendChild(new_option);
                }
            }

            new_select.appendChild(new_option1);
            new_select.appendChild(new_option2);
            new_select.appendChild(new_option3);

            new_select.setAttribute('class', 'redSelect');
            new_select.setAttribute('disabled', 'true');

            new_select_type.setAttribute('class', 'redSelect');
            new_select_type.setAttribute('disabled', 'true');
        }
        else if(index==1)
        {
            continue;
        }
        else if(index==2)
        {
            new_select.setAttribute('style', "width: 120px;");

            const new_option1=document.createElement('option');
            new_option1.setAttribute('label', 'Indezit');
            const new_option2=document.createElement('option');
            new_option2.setAttribute('label', 'Candy');
            const new_option3=document.createElement('option');
            new_option3.setAttribute('label', 'Hyundai');
            const new_option4=document.createElement('option');
            new_option4.setAttribute('label', 'Siemens');
            const new_option5=document.createElement('option');
            new_option5.setAttribute('label', 'Liebherr');

            new_select.appendChild(new_option1);
            new_select.appendChild(new_option2);
            new_select.appendChild(new_option3);
            new_select.appendChild(new_option4);
            new_select.appendChild(new_option5);

            if(newItemManuf.value==new_option1.label)
            {
                new_option1.setAttribute('selected', 'selected');
            }
            else if(newItemManuf.value==new_option2.label)
            {
                new_option2.setAttribute('selected', 'selected');
            }
            else if(newItemManuf.value==new_option3.label)
            {
                new_option3.setAttribute('selected', 'selected');
            }
            else if(newItemManuf.value==new_option4.label)
            {
                new_option4.setAttribute('selected', 'selected');
            }
            else if(newItemManuf.value==new_option5.label)
            {
                new_option5.setAttribute('selected', 'selected');
            }

            new_select.setAttribute('class', 'redSelect');
            new_select.setAttribute('disabled', 'true');
        }
        else if(index==3)
        {
            new_select.setAttribute('style', "width: 100px;");

            const new_option1=document.createElement('option');
            new_option1.setAttribute('label', 'K187SADDO');
            const new_option2=document.createElement('option');
            new_option2.setAttribute('label', 'CT5045FIX');
            const new_option3=document.createElement('option');
            new_option3.setAttribute('label', 'TX 1021');
            const new_option4=document.createElement('option');
            new_option4.setAttribute('label', 'T 1400');
            const new_option5=document.createElement('option');
            new_option5.setAttribute('label', 'T Pesf 1714');

            new_select.appendChild(new_option1);
            new_select.appendChild(new_option2);
            new_select.appendChild(new_option3);
            new_select.appendChild(new_option4);
            new_select.appendChild(new_option5);

            if(newItemModel.value==new_option1.label)
            {
                new_option1.setAttribute('selected', 'selected');
            }
            else if(newItemModel.value==new_option2.label)
            {
                new_option2.setAttribute('selected', 'selected');
            }
            else if(newItemModel.value==new_option3.label)
            {
                new_option3.setAttribute('selected', 'selected');
            }
            else if(newItemModel.value==new_option4.label)
            {
                new_option4.setAttribute('selected', 'selected');
            }
            else if(newItemModel.value==new_option5.label)
            {
                new_option5.setAttribute('selected', 'selected');
            }

            new_select.setAttribute('class', 'redSelect');
            new_select.setAttribute('disabled', 'true');
        }
        else if(index==4)
        {
            const new_input=document.createElement('input');
            new_input.setAttribute('type', 'text');
            new_input.setAttribute('value', newItemQty.value);
            new_input.setAttribute('style', "width: 90px;");
            new_input.setAttribute('readonly', true);
            new_input.setAttribute('class', 'redInput');

            let Cel=row.insertCell(index);
            Cel.appendChild(new_input);
        }
        else if(index==5)
        {
           let actionCell=row.insertCell(index);
           // обращаемся по 'this' - значит обращаемся к самому обьекту - строке ('row')
           actionCell.innerHTML='<input type="button" name="btnDeleteItem"' +
           'value="DELETE" onclick="deleteItem(this)"/>';
           actionCell.innerHTML+='<input type="button" name="btnEditItem" value="Edit" onclick="editItem(this)"/>';
        }
    }

    return row;
}

// получаем доступ к табличке
const orderTable=document.getElementById('id_orderTable');

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

function editItem(button)
{
    var redtr=button.parentNode.parentNode;
    selects = Array.from(redtr.querySelectorAll('.redSelect'));

    for (let index = 1; index < selects.length; index++) {
       
        selects[index].removeAttribute('disabled');

        if (index==1)
        {
            selects[index].setAttribute('style', 'width: 160px; background-color: #eba4a4');
        }
        else if (index==2)
        {
            selects[index].setAttribute('style', 'width: 120px; background-color: #eba4a4');
        }
        else if (index==3)
        {
            selects[index].setAttribute('style', 'width: 100px; background-color: #eba4a4');
        }
        else if (index==4)
        {
            selects[index].setAttribute('style', 'width: 90px; background-color: #eba4a4');
        }
    }

    var input=redtr.querySelector('.redInput');
    input.setAttribute('style', 'width: 90px; background-color: #eba4a4');
    input.removeAttribute('readonly');

    redtr.querySelector('[name="btnEditItem"]').remove();
    redtr.cells[5].innerHTML+="<input type='button' name='btnSaveItem' value='Save' onclick='saveItem(this)'/>";
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
    // достаем таблицу
    const rowParent=button.parentNode.parentNode.parentNode;
    // из таблицы удаляем ребенка
    rowParent.removeChild(button.parentNode.parentNode);
}

function saveItem(button) {
    var redtr = button.parentNode.parentNode
    
    for (let index = 1; index < selects.length; index++) {
       
        selects[index].setAttribute('disabled', true);

        if (index==1)
        {
            selects[index].setAttribute('style', 'width: 160px; background-color: transparent');
        }
        else if (index==2)
        {
            selects[index].setAttribute('style', 'width: 120px; background-color: transparent');
        }
        else if (index==3)
        {
            selects[index].setAttribute('style', 'width: 100px; background-color: transparent');
        }
        else if (index==4)
        {
            selects[index].setAttribute('style', 'width: 90px; background-color: transparent');
        }
    }

    var input=redtr.querySelector('.redInput');
    input.setAttribute('style', 'width: 90px; background-color: transparent');
    input.setAttribute('readonly', true);

    button.remove();
    redtr.cells[5].innerHTML+="<input type='button' name='btnEditItem' value='Edit' onclick='editItem(this)'/>";
}

btn_add.addEventListener('click', addItemToOrder);