const slider = document.querySelector("#slider");
const price = document.querySelector(".price");
const numViews = document.querySelector(".num_views");
const toggleSwitch = document.querySelector("#checkbox");
const monthly = document.querySelector(".monthly");

const valueMonth = [8, 12, 16, 24, 36];
const valuesYear = [72, 108, 144, 216, 324];
const views = [10, 50, 100, 500, 1];
let color;
let max = slider.getAttribute("max");// we get an attribute max from the input range, with this variable I can calculate linear-gradient percentage in changeBarColor function, example: slideNum = 2,this is value = "2 (index range), max value = "4", you have 5 values (0,1,2,3,4 => 8(0),12(1), 16(2),24(3),36(4); slideNUm =(2 *100)/max(4),

let slideNum = slider.value;
console.log(slideNum);
// window.addEventListener("load", changeBarColor);

toggleSwitch.addEventListener("change", toggle);

// function that checks if toggle switch is ON or OFF
function toggle() {
    if (toggleSwitch.checked) {
        monthly.innerHTML = "/ year";
        price.innerHTML = `$${valuesYear[slideNum]}.00`;
    } else if (!toggleSwitch.checked) {
        monthly.innerHTML = "/ month";
        price.innerHTML = `$${valueMonth[slideNum]}.00`;
    }
}

// The oninput property of the GlobalEventHandlers mixin is an event handler that processes input events on the <input>, <select>, and <textarea> elements.THIS IS GLOBAL EVENT ,addEventListener is event target that will be called whenever the specified event is delivered to the target. ONINPUT fires when the window loads.
slider.oninput = function () {
    price.innerHTML = `$${valueMonth[this.value]}.00`;
    numViews.innerHTML = `${views[this.value]}k`;
    if (views[this.value] === 1) {
        numViews.innerHTML = `${views[this.value]}m`;
    }
    changeBarColor();
}

slider.oninput();

// The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
// The input event fires when the value of an <input>, <select>, or <textarea> element has been changed,
slider.addEventListener("input", function () {
    slideNum = slider.value;
    price.innerHTML = `$${valueMonth[this.value]}.00`;
    toggle();//use this toggle function when we move a slider and turn ON/OFF a toggle switcher
    changeBarColor();
})

slider.addEventListener("mousemove", changeBarColor);

function changeBarColor() {
    color = `linear-gradient(90deg,  rgb(165, 243, 235) ${Number(slideNum) * 100 / Number(max)}%, rgb(234, 238, 251) ${Number(slideNum) * 100 / Number(max)}%)`;
    slider.style.background = color;
}



