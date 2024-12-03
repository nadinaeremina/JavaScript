// title

let head=document.getElementsByTagName('head');

let title=document.createElement('title');
title.innerText="Page Title";

document.head.appendChild(title);

// h2

let body=document.getElementsByTagName('body');

let h2=document.createElement('h2');
h2.innerText="Page Header";

document.body.appendChild(h2);

// p

let p=document.createElement('p');
p.innerText="Text";

// div

let div=document.createElement('div');
//document.div.append(h3,p);

document.body.appendChild(div);

// h3

let h3=document.createElement('h3');
h3.innerText="Block Header";

//

document.querySelector('div').appendChild(h3);
document.querySelector('div').appendChild(p);
