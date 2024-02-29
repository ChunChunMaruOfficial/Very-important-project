document.getElementById('close_header').addEventListener('click', () => {
    document.querySelector('body').style.overflow = 'visible';
    document.querySelector('.column').classList.remove('blurred');
    document.querySelector('.header_input').style.display = 'none';
});

document.getElementById('search').addEventListener('click', () => {
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('.column').classList.add('blurred');
    document.querySelector('.header_input').style.display = 'flex';
});


let elementToMove = document.querySelector('.mobile_header');
let ButtonOut = document.querySelector('#menu_button');
let ButtonIn = document.querySelector('#mobile_button');

ButtonOut.addEventListener('click', function () { //та что снаружи
    elementToMove.classList.add('showright');
    elementToMove.classList.remove('hideleft');
});

ButtonIn.addEventListener('click', function () { //та что внутри
    elementToMove.classList.add('hideleft');
    elementToMove.classList.remove('showright');
});