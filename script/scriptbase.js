document.addEventListener("DOMContentLoaded", () => {
    var Main = document.querySelector('.header-left-context');
    var MainW = document.querySelector('.header-right-context');
    var dropdownMenu = document.getElementById('dropdown');
    var dropdownMenuW = document.getElementById('dropdownW');

    Main.addEventListener('mouseover', function () {
        dropdownMenu.style.display = 'block';
    });

    Main.addEventListener('mouseout', function () {
        dropdownMenu.style.display = 'none';
    });

    MainW.addEventListener('mouseover', function () {
        dropdownMenuW.style.display = 'block';
    });

    MainW.addEventListener('mouseout', function () {
        dropdownMenuW.style.display = 'none';
    });

    document.getElementById('close_header').addEventListener('click', () => {
        document.querySelector('.column').classList.remove('blurred');
                document.querySelector('.header_input').style.display = 'none';
    });

    document.getElementById('search').addEventListener('click', () => {
        document.querySelector('.column').classList.add('blurred');

        document.querySelector('.header_input').style.display = 'flex';
    });


    var elementToMove = document.querySelector('.mobile_header');
    var ButtonOut = document.querySelector('#menu_button');
    var ButtonIn = document.querySelector('#mobile_button');

    ButtonOut.addEventListener('click', function() { //та что снаружи
        elementToMove.classList.add('showright');
        elementToMove.classList.remove('hideleft');
    });

    ButtonIn.addEventListener('click', function() { //та что внутри
        elementToMove.classList.add('hideleft');
        elementToMove.classList.remove('showright');
    });
});