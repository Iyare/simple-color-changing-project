const button = document.querySelector('#changeColorbtn');
const body= document.body;
const h1 = document.querySelector('h1');

function makeRandomColor (){
    return Math.floor((Math.random () * 255) + 1 )
}

function changeColor (){
    return `rgb(${makeRandomColor()},${makeRandomColor()},${makeRandomColor()})`
}

function updateBgColor (){
    const newColor = changeColor();
    body.style.backgroundColor = newColor;  
    h1.innerHTML = newColor;
}

button.addEventListener("click", updateBgColor);
