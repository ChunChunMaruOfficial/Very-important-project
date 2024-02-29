

for (let i = 0; i < 3; i++) {
    let clonedFrame = document.querySelector('.main_img0').cloneNode(true);
    document.querySelector('.product_img').appendChild(clonedFrame);
    clonedFrame.classList.remove("main_img0");
    clonedFrame.classList.add("main_img" + (i + 1));
    clonedFrame.style.backgroundImage = "url('img/product_page/" + (i + 1) + ".png')";

}


let blue = document.querySelector('#blue');
let green = document.querySelector('#green');
blue.style.outline = '3.5px solid rgb(37, 48, 67)';
function Green(){
    green.style.outline = '3.5px solid rgb(112, 126, 110)';
    blue.style.removeProperty("outline");
    for (let i = 0; i < 4; i++) {
        document.querySelector('.main_img' + i).style.backgroundImage = "url('img/product_page/1" + i + ".png')";
    }
}

function Blue() {
    blue.style.outline = '3.5px solid rgb(37, 48, 67)';
    green.style.removeProperty("outline");
    for (let i = 0; i < 4; i++) {
        document.querySelector('.main_img' + i).style.backgroundImage = "url('img/product_page/" + i + ".png')";
    }
}

for (let i = 0; i < 9; i++) {
    let clonedFrame = document.querySelector('#size').cloneNode(true);
    document.querySelector('.size_main').appendChild(clonedFrame);
    clonedFrame.innerText = 39 + i;
}

const buttons = document.querySelectorAll('.size_number');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.style.color = '#232321';
            btn.style.backgroundColor = '#FFF';
        });
        button.style.color = '#FFF';
        button.style.backgroundColor = '#232321';
    });
});


if(window.innerWidth < 1400 && window.innerWidth > 768){
    document.querySelector('.column').insertBefore(document.querySelector('.about_product'), document.querySelector('.column').childNodes[2]);
}