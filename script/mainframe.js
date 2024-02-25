document.addEventListener("DOMContentLoaded", () => {

    let c;
    window.innerWidth < 1201 ? c = 1 : c = 2;
    var leftButton = document.getElementById('leftButton');

    function clone(bbody, cchild, count, number) {
        var body = document.querySelector(bbody);
        var child = document.querySelector(cchild);

        for (var i = 0; i < count; i++) {
            var clonedFrame = child.cloneNode(true);
            body.appendChild(clonedFrame);
            var randomValue = Math.floor(Math.random() * count);
            switch (number) {
                case 0:
                    var clonedImage = clonedFrame.querySelector('.review_hard');
                    clonedImage.style.backgroundImage = "url('../img/reviews/" + i + ".png')";
                    clonedImage.style.backgroundPosition = "-25%";
                    clonedImage.style.backgroundSize = "100%";
                    clonedFrame.querySelector('img').src = '../img/pfps/' + i + '.png';
                    break;
                case 1:
                    var clonedImage = clonedFrame.querySelector('.categories_content>div');
                    clonedImage.style.backgroundImage = "url('../img/categories/1.png')";
                    clonedFrame.style.borderRadius = '0';
                    clonedFrame.style.backgroundColor = '#F6F6F6';
                    clonedFrame.classList.add('categories_second');
                    break;
                case 2:
                    clonedFrame.classList.add('categories_left');
                    clonedFrame.classList.remove('categories_right');
                    thing = clonedFrame.querySelector('.categories_second');
                    thing.style.borderRadius = '0px 64px 0px 0px'
                    break;
                case 3:

                    var clonedImage = clonedFrame.querySelector('.frame_img');
                    clonedImage.style.backgroundImage = "url('../img/new_drops/" + randomValue + ".png')";
                    var clonedText = clonedFrame.querySelector('.frame_text p');
                    switch (i) {
                        case 0:
                            clonedText.textContent = 'ADIDAS 4DFWD X PARLEY RUNNING SHOES (1)'
                            break;
                        case 1:
                            clonedText.textContent = 'ADIDAS 4DFWD X PARLEY RUNNING SHOES (2)'
                            break;
                        case 2:
                            clonedText.textContent = 'ADIDAS 4DFWD X PARLEY RUNNING SHOES (3)'
                            break;
                    }
                    break;
            }
        }
    }
    //(родитель, ребенок, количество клонов, модули)

    clone('.categories_body', '.categories_content', 1, 1);
    clone('.categories_main', '.categories_body', 1, 2);
    clone('.reviews_body', '.reviews_content', c, 0);





    function animateElement() {
        var elementToMove = document.querySelector('.categories_main');
        var rightButton = document.getElementById('rightButton');

        rightButton.addEventListener('click', function() {
            rightButton.disabled = true;
            leftButton.disabled = false;
            elementToMove.classList.add('activeleft');
            elementToMove.classList.remove('activeright');
        });

        leftButton.addEventListener('click', function() {
            leftButton.disabled = true;
            rightButton.disabled = false;
            elementToMove.classList.add('activeright');
            elementToMove.classList.remove('activeleft');
        });


    }
    animateElement();


});