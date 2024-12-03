// Navigator
console.dir(navigator);

let div_navigator=document.createElement('div');
div_navigator.innerText="Navigator:";
div_navigator.className="div_navigator";

document.body.appendChild(div_navigator);

let nav_list=document.createElement('ul');
nav_list.className="nav_list";

let nav_li1=document.createElement('li');
let nav_li2=document.createElement('li');
let nav_li3=document.createElement('li');
let nav_li4=document.createElement('li');
let nav_li5=document.createElement('li');
let nav_li6=document.createElement('li');
let nav_li7=document.createElement('li');
let nav_li8=document.createElement('li');
let nav_li9=document.createElement('li');
let nav_li10=document.createElement('li');

nav_li1.innerText=navigator.appCodeName;
nav_li2.innerText=navigator.appName;
nav_li3.innerText=navigator.appVersion;
nav_li4.innerText=navigator.cookieEnabled;
nav_li5.innerText=navigator.geolocation;
nav_li6.innerText=navigator.language;
nav_li7.innerText=navigator.onLine;
nav_li8.innerText=navigator.platform;
nav_li9.innerText=navigator.product;
nav_li10.innerText=navigator.userAgent;

document.querySelector(".div_navigator").appendChild(nav_list);
document.querySelector('.nav_list').append(nav_li1, nav_li2, nav_li3, nav_li4, nav_li5, nav_li6, nav_li7, nav_li8, nav_li9, nav_li10);

// Screen
console.dir(screen);

let div_screen=document.createElement('div');
div_screen.innerText="Screen:";
div_screen.className="div_screen";

document.body.appendChild(div_screen);

let screen_list=document.createElement('ul');
screen_list.className="screen_list";

let screen_li1=document.createElement('li');
let screen_li2=document.createElement('li');
let screen_li3=document.createElement('li');
let screen_li4=document.createElement('li');
let screen_li5=document.createElement('li');

screen_li1.innerText=screen.width;
screen_li2.innerText=screen.height;
screen_li3.innerText=screen.availWidth;
screen_li4.innerText=screen.colorDepth;
screen_li5.innerText=screen.pixelDepth;

document.querySelector(".div_screen").appendChild(screen_list);
document.querySelector('.screen_list').append(screen_li1, screen_li2, screen_li3, screen_li4, screen_li5);

// History
console.dir(history);

let div_history=document.createElement('div');
div_history.innerText="History:";
div_history.className="div_history";

document.body.appendChild(div_history);

let history_list=document.createElement('ul');
history_list.className="history_list";

let history_li1=document.createElement('li');
let history_li2=document.createElement('li');
let history_li3=document.createElement('li');
let history_li4=document.createElement('li');
let history_li5=document.createElement('li');

history_li1.innerText=history.length;
history_li2.innerText=history.current;
history_li3.innerText=history.next;
history_li4.innerText=history.previous;
history_li5.innerText=history.state;

document.querySelector(".div_history").appendChild(history_list);
document.querySelector('.history_list').append(history_li1,history_li2,history_li3,history_li4,history_li5);

// Location
console.dir(location);

let div_location=document.createElement('div');
div_location.innerText="Location:";
div_location.className="div_location";

document.body.appendChild(div_location);

let location_list=document.createElement('ul');
location_list.className="location_list";

let location_li1=document.createElement('li');
let location_li2=document.createElement('li');
let location_li3=document.createElement('li');

location_li1.innerText=location.host;
location_li2.innerText=location.port;
location_li3.innerText=location.protocol;

document.querySelector(".div_location").appendChild(location_list);
document.querySelector('.location_list').append(location_li1,location_li2,location_li3);


