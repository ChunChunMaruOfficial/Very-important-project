document.addEventListener("DOMContentLoaded", () => {

    let sections = document.querySelectorAll('.new_drops_content');
    sections.forEach(section => {
        section.innerHTML = `    
            <div class="new_drops_body">
                <div class="new_drops_frame">
                    <div class="frame_img">
                        <div>
                            <p>New</p>
                        </div>
                    </div>
                    <div class="frame_text">
                        <p>ADIDAS 4DFWD X PARLEY RUNNING SHOES (0)</p>
                     <a href = "productpage.html">   <button class="black_button">View Product - <span> $125</span></button> </a>
                    </div>
                </div>
            </div>`;

        let c;
        if (window.innerWidth < 1201 && window.innerWidth > 900) {
            c = 1;
        } else if (window.innerWidth < 377) {
            c = 0;
        } else {
            c = 2;
        }

        function clone(bbody, cchild, count) {
            var body = section.querySelector(bbody);
            var child = section.querySelector(cchild);

            for (var i = 0; i < count; i++) {
                var clonedFrame = child.cloneNode(true);
                body.appendChild(clonedFrame);
                var randomValue = Math.floor(Math.random() * 10);
                var clonedImage = clonedFrame.querySelector('.frame_img');
                clonedImage.style.backgroundImage = "url('../img/new_drops/" + randomValue + ".png')";
                var clonedText = clonedFrame.querySelector('.frame_text p');
                switch (i) {
                    case 0:
                        clonedText.textContent = 'ADIDAS 4DFWD X PARLEY RUNNING SHOES (1)';
                        break;
                    case 1:
                        clonedText.textContent = 'ADIDAS 4DFWD X PARLEY RUNNING SHOES (2)';
                        break;
                    case 2:
                        clonedText.textContent = 'ADIDAS 4DFWD X PARLEY RUNNING SHOES (3)';
                        break;
                }
            }
        }
        clone('.new_drops_body', '.new_drops_frame', c + 1);
    });

});