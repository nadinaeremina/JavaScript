// покажет, из чего состоит 'body'
// console.dir(document.body);

const divA = document.getElementById("id_a");
console.dir(divA);
divA.outerText="tfdhygtr";
console.dir(divA);

const divC=document.getElementById("id_c");
console.dir(divC);

const newElem=document.createElement("li");
newElem.innerText="1.4";
document.querySelector("#ul1").appendChild(newElem);

