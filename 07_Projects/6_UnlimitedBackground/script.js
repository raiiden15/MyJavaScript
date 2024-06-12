let intervalId;

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor);

const startChangingColor = function () {
    changeColor();
}

const stopChangingColor = function () {
    stopColor();
}

const changeColor = function () {
    if(!intervalId) {
        intervalId = setInterval(function() {
            document.querySelector('body').style.backgroundColor = randomColor();
        }, 1000);
    } 
}

const stopColor = function () {
    clearInterval(intervalId)
    intervalId = null; // Ye code ko professional banata h, by dereferencing its value, but thoda modification kia upr check krke changeColor method me!  
}


const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
// console.log(randomColor());
// console.log(Math.floor(Math.random() * 16)); //we can have 0, since color code can have 0;

// 427FB9, Beautiful Color This is CRAZYYYY.