const btn = document.createElement('button');
const restart = document.createElement('button');
document.body.appendChild(btn);
document.body.appendChild(restart);
restart.textContent= "Reset"
btn.textContent= "Resolution"

const container = document.getElementById('grid-container');


for (let i = 0; i < 256; i++) { // 16x16 = 256
    let div = document.createElement('div');
    div.classList.add('grid-item');
    div.addEventListener("mouseover", () =>{
        div.style.backgroundColor="black";
    });
    restart.addEventListener("click",()=>{
        div.style.backgroundColor="lightgrey"
    })
    container.appendChild(div);
}


btn.addEventListener("click", () =>{
    let size = prompt("Enter the size of the grid:");
    size = parseInt(size, 10); 

    
    if (size <= 100 && size>=1){
        if (!isNaN(size) && size > 0) {
            container.innerHTML = ''; 
            let squareSize = 500 / size; 
            for (let i = 0; i < size*size; i++) {
                let div = document.createElement('div');
                div.classList.add('grid-item');
                div.style.height=`${squareSize}px`;
                div.style.width=`${squareSize}px`;
                div.addEventListener("mouseover", () =>{
                    div.style.backgroundColor="black";
                });
                restart.addEventListener("click",()=>{
                    div.style.backgroundColor="lightgrey"
                })
                container.appendChild(div);
            }
        }
    }else{
        alert("invalid value pls try again")
    }
        
    
});

