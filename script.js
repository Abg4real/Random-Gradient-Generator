let elements = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let angleSign = ['+', '-'];

let main = document.getElementById('main');
let gradient = document.getElementById('gradient');

let changeColor3 = () => {
    let newColor1 = elements[Math.floor(Math.random() * 16)];
    let newColor2 = elements[Math.floor(Math.random() * 16)];
    let newColor3 = elements[Math.floor(Math.random() * 16)];
    let angle = angleSign[Math.floor(Math.random() * 2)];
    for (let i = 0; i < 5; i++) {
        newColor1 += (elements[Math.floor(Math.random() * 16)]);
        newColor2 += (elements[Math.floor(Math.random() * 16)]);
        newColor3 += (elements[Math.floor(Math.random() * 16)]);
    }
    angle += Math.floor(Math.random() * 360).toString() + 'deg';
    let newGradient = 'linear-gradient(' + angle + ',' + '#' + newColor1 + ',' + '#' + newColor2 + ',' + '#' + newColor3 + ')';
    gradient.innerText = 'background-image:' + newGradient;
    gradient.style.display = 'initial';
    main.style.backgroundImage = newGradient;
}
let changeColor2 = () => {
    let newColor1 = elements[Math.floor(Math.random() * 16)];
    let newColor2 = elements[Math.floor(Math.random() * 16)];
    let angle = angleSign[Math.floor(Math.random() * 2)];
    for (let i = 0; i < 5; i++) {
        newColor1 += (elements[Math.floor(Math.random() * 16)]);
        newColor2 += (elements[Math.floor(Math.random() * 16)]);
    }
    angle += Math.floor(Math.random() * 360).toString() + 'deg';
    let newGradient = 'linear-gradient(' + angle + ',' + '#' + newColor1 + ',' + '#' + newColor2 + ')';
    gradient.innerText = 'background-image:' + newGradient;
    gradient.style.display = 'initial';
    main.style.backgroundImage = newGradient;
}
let changeColor4 = () => {
    let newColor1 = elements[Math.floor(Math.random() * 16)];
    let newColor2 = elements[Math.floor(Math.random() * 16)];
    let newColor3 = elements[Math.floor(Math.random() * 16)];
    let newColor4 = elements[Math.floor(Math.random() * 16)];
    let angle = angleSign[Math.floor(Math.random() * 2)];
    for (let i = 0; i < 5; i++) {
        newColor1 += (elements[Math.floor(Math.random() * 16)]);
        newColor2 += (elements[Math.floor(Math.random() * 16)]);
        newColor3 += (elements[Math.floor(Math.random() * 16)]);
        newColor4 += (elements[Math.floor(Math.random() * 16)]);
    }
    angle += Math.floor(Math.random() * 360).toString() + 'deg';
    let newGradient = 'linear-gradient(' + angle + ',' + '#' + newColor1 + ',' + '#' + newColor2 + ',' + '#' + newColor3 + ',' + '#' + newColor4 + ')';
    gradient.innerText = 'background-image:' + newGradient;
    gradient.style.display = 'initial';
    main.style.backgroundImage = newGradient;
}



