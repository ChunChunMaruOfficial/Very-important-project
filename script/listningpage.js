let range = document.querySelector(".range");
let rangeValue = document.getElementById("rangeinput");

range.addEventListener("input", function () {
    rangeValue.innerHTML = "$" + this.value;
});

function clone(bbody, cchild, count, number) {

    let body = document.querySelector(bbody);
    let child = document.querySelector(cchild);
    for (let i = 0; i < count; i++) {
        let clonedFrame = child.cloneNode(true);
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
    let arrow = document.querySelector(button);
    let box = document.querySelector(dropbox);
    arrow.addEventListener('click', function () {
            box.classList.toggle('close');
            arrow.classList.toggle('rerotate');
            box.classList.toggle('open');
            arrow.classList.toggle('rotate');
    });
}


const ual = document.querySelector('#casual')
const cas = document.querySelector('.casual')
ual.addEventListener('click', function () {

   
        cas.classList.toggle('lilopen')
        ual.classList.toggle('rerotate')

        ual.classList.toggle('rotate')
        cas.classList.toggle('lilclose')
    
});

dropdown('#size_arrow', '.checkbox')
dropdown('#color_arrow', '.checkbox_color')
dropdown('#number_arrow', '.checkbox_number')
dropdown('#gender_arrow', '.gender')


let elementToMove = document.querySelector('.content>aside');
let ButtonOut = document.querySelector('#right_button');
let ButtonIn = document.querySelector('#left_button');

ButtonOut.addEventListener('click', function() { //та что снаружи
    elementToMove.classList.add('showright');
    elementToMove.classList.remove('hideleft');
});

ButtonIn.addEventListener('click', function() { //та что внутри
    elementToMove.classList.add('hideleft');
    elementToMove.classList.remove('showright');
});