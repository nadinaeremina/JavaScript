const countrySelect=document.querySelector("[name='country']");
//console.dir(countrySelecr);

countrySelect.addEventListener('change', (e)=>{
    console.dir(e);
})

// можно увидеть в 'value' выбранного 'option' полученное значение - '<option value="1">...</option>'
// можно увидеть в 'OuterHTML' выбранную страну - '<option value="1">Albania</option>\n   '
// можно увидеть в 'OuterText' выбранную страну - 'Albania'
