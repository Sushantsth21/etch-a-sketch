document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('grid-container');
    for (let i = 0; i < 256; i++) { // 16x16 = 256
        let div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor="black";
        });
        container.appendChild(div);
    }
});


