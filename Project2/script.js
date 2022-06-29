function clickHandler(){
let randomColor=generatedRandomColor();

document.getElementById('container').style.backgroundColor=`#${randomColor}`
}

function generatedRandomColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
return randomColor;
}

/* bo away dway chand chrkaayak otomatiky xoy rang bgoret */
setInterval(clickHandler, 200);