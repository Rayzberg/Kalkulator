"use strict";
let body =document.getElementsByTagName('body')[0];
let layout = createLayout ();

for (let i = 0; i < 9; ++i) {
    let button = createButton(i+1);
    if (i< 3) {
        layout.slots[i+6].appendChild(button);
    }
    else if (i>5) {
        layout.slots [i-6].appendChild(button);
    }
    else {
        layout.slots[i].appendChild(button);
    }
    }
body.appendChild(layout.main)
function createButton(value ) {
    let button = document.createElement('div');
    button.style.width ='100%';
    button.style.height ='100%';
    button.style.backgroundColor ='green';
    button.innerHTML = value;
    return button;
}

function createLayout() {
    let layout = {
        main: document.createElement("div"),
        slots: []

    };
    layout.main.style.height = "500px";
    layout.main.style.width = "500px";
    for(let i = 0; i < 9; ++i){
        let slot = document.createElement("div");
        slot.style.width = "33%";
        slot.style.height = "33%";
        slot.style.float = "left";
        slot.style.padding = "10px";
        slot.style.boxSizing = "border-box";
        layout.main.appendChild(slot);
        layout.slots.push(slot);
    }
    return layout;

}


// ТЕОРИЯ
let peremen;
peremen = false;
if (peremen = false)
    console.log ("sergey");
let index = 2;
peremen = [1,23,52];
console.log(peremen [index]);
let key = "main";
peremen = {main: "anton",
    full: "gandon"
}
console.log (peremen [key]);


function f1(x,y){
    return x+y;
}
console.log (f1(5,8));

let f2 = function (x,y){
    return x*y;
}

