const changeBtn = document.querySelector('#changeColorbtn');
const body= document.querySelector('body');
const h1 = document.querySelector('h1');

function random (){
    return Math.floor((Math.random () * 256) + 1 )
}

function changeColor (){
    return `rgb(${random()},${random()},${random()})`
}

function updateBgColor (){
    const newColor = changeColor();
    body.style.backgroundColor = newColor;  
    h1.innerHTML = newColor;
}

changeBtn.addEventListener("click", updateBgColor);
