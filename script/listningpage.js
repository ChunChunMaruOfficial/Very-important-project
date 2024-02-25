var range = document.querySelector(".range");
var rangeValue = document.getElementById("rangeinput");

range.addEventListener("input", function () {
    rangeValue.innerHTML = "$" + this.value;
});

function clone(bbody, cchild, count, number) {

    var body = document.querySelector(bbody);
    var child = document.querySelector(cchild);
    for (var i = 0; i < count; i++) {
        var clonedFrame = child.cloneNode(true);
        body.appendChild(clonedFrame);

        switch (number) {
            case 0:
                clonedFrame.style.backgroundColor = 'var(--' + (i + 2) + ')';
                break;
            case 1:
                clonedFrame.innerHTML = (i + 39)
                break;
            case 2:
                switch (i) {
                    case 0:
                        clonedFrame.children[1].innerHTML = 'Runners';
                        break;
                    case 1:
                        clonedFrame.children[1].innerHTML = 'Hiking';
                        break;
                    case 2:
                        clonedFrame.children[1].innerHTML = 'Sneaker';
                        break;
                    case 3:
                        clonedFrame.children[1].innerHTML = 'Basketball';
                        break;
                    case 4:
                        clonedFrame.children[1].innerHTML = 'Golf';
                        break;
                    case 5:
                        clonedFrame.children[1].innerHTML = 'Outdoor';
                        break;

                }
                break;
            case 3:
                switch (i) {
                    case 0:
                        clonedFrame.children[1].innerHTML = 'Non-binary';
                        break;
                    case 1:
                        clonedFrame.children[1].innerHTML = 'Genderqueer';
                        break;
                    case 2:
                        clonedFrame.children[1].innerHTML = 'Transgender';
                        break;
                    case 3:
                        clonedFrame.children[1].innerHTML = 'Bigender';
                        break;
                    case 4:
                        clonedFrame.children[1].innerHTML = 'Agender';
                        break;

                }
                break;
            case 4:
                clonedFrame.innerHTML = (i + 2);
                switch (i) {
                    case 2:
                        clonedFrame.innerHTML = "...";
                        break;
                    case 3:
                        clonedFrame.innerHTML = "10";
                        break;
                    case 4:
                        clonedFrame.innerHTML = "Next >";
                        break;
                }
                break;
        }
    }
}

clone('.checkbox_color', '.color', 8, 0)
clone('.checkbox_number', '.number_button', 8, 1)
clone('.checkbox', '.checkbox_size', 6, 2)
clone('.gender', '.checkbox_gender', 5, 3)
clone('.nav_buttons', '#nm', 5, 4)


function dropdown(button, dropbox) {
    var arrow = document.querySelector(button);
    var box = document.querySelector(dropbox);
    arrow.addEventListener('click', function () {

        if (box.classList.contains('close')) { //проверка на существоакание элемента
            box.classList.add('open');
            box.classList.remove('close');
            arrow.classList.remove('rotate');
            arrow.classList.add('rerotate');

        } else {
            arrow.classList.remove('rerotate');
            arrow.classList.add('rotate');

            box.classList.add('close') //вверх
            box.classList.remove('open');
        }
    });
}


const ual = document.querySelector('#casual')
ual.addEventListener('click', function () {
    const cas = document.querySelector('.casual')
    if (cas.classList.contains('lilclose')) { //проверка на существоакание элемента
        cas.classList.add('lilopen');
        cas.classList.remove('lilclose');
        ual.classList.remove('rotate');
        ual.classList.add('rerotate');

    } else {
        ual.classList.remove('rerotate');
        ual.classList.add('rotate');

        cas.classList.add('lilclose') //вверх
        cas.classList.remove('lilopen');
    }
});

dropdown('#size_arrow', '.checkbox')
dropdown('#color_arrow', '.checkbox_color')
dropdown('#number_arrow', '.checkbox_number')
dropdown('#gender_arrow', '.gender')


var elementToMove = document.querySelector('.content>aside');
var ButtonOut = document.querySelector('#right_button');
var ButtonIn = document.querySelector('#left_button');

ButtonOut.addEventListener('click', function() { //та что снаружи
    elementToMove.classList.add('showright');
    elementToMove.classList.remove('hideleft');
});

ButtonIn.addEventListener('click', function() { //та что внутри
    elementToMove.classList.add('hideleft');
    elementToMove.classList.remove('showright');
});