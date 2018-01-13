"use strict";
let body =document.getElementsByTagName('body')[0];
let layout = createLayout ();

for (let i = 0; i < 9; ++i) {
    let button = createButton();
    layout.slots[i].appendChild(button);
}
body.appendChild(layout.main)
function createButton() {
    let button = document.createElement('div');
    button.style.width ='100%';
    button.style.height ='100%';
    button.style.backgroundColor ='green';

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
