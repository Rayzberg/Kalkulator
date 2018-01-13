"use strict";
let body =document.getElementsByTagName('body')[0];
let button=document.createElement('div');

button.style.float ='left';
button.style.width ='400px';
button.style.height ='100px';
button.style.backgroundColor ='green';
body.appendChild(button);

let button2=document.createElement('div');
button2.style.margin ='50px';
button2.style.float ='left';
button2.style.width ='100px';
button2.style.height ='50px';
button2.style.backgroundColor ='blue';
body.appendChild(button2);

let button23=document.createElement('div');
//button23.style.float ='left';
button23.style.marginTop ='110px'; // Почему эта хрень применяется к верхним кнопкам а не только к последней?? и
                                    // и куда девается последняя?? хотел просто опустить её вниз под теми двумя
//отменил привязку к левой стороне, и хотел вытащить её из од первогоб лока отступом сверху, а опустились все
button23.style.width ='100px';
button23.style.height ='50px';
button23.style.backgroundColor ='black';
body.appendChild(button23);