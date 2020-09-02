"use strict";

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const button = document.querySelector("button");

button.addEventListener("click", LogInput);

window.addEventListener("keydown", ({ key }) => {
    if (key === "Enter") {
        LogInput();
    }
})

let a = 0;
let reset = false;
const sound = document.querySelector("audio");

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function LogInput() {


    let number = getRandomArbitrary(15, 85);
    console.log(number);

    if (reset == true) {

        a = 0;
        output.value = "";
        console.log(a);
        reset = false;

        setTimeout(LogInput, number);

    } else {

        if (a < input.value.length) {

            sound.currentTime = 0;
            sound.play();

            output.value += input.value.charAt(a);
            ++a;
            reset = false;

            setTimeout(LogInput, number);
        }

        else {
            console.log("deuxieme boucle");
            reset = true;
        }
    }
}

