
let square=document.querySelector(".box")

console.log(square)

for(let i=1;i<=6;i++){
	square.innerHTML+="<div class='box'></div>"
}





const box = document.querySelector('.box');
box.addEventListener('click',() => {
    if(box.classList.contains('boxclicked')){
        box.classList.remove('boxclicked');
    }
    else{
        box.classList.add('boxclicked');
    }
})