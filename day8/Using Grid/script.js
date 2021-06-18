//elements creation
const canvas = document.querySelector(`.project`);

const fragment = document.createDocumentFragment();
for (i = 1; i <= 400; i++){
	const cube = document.createElement(`DIV`);
	cube.classList.add(`innactive`);
	cube.addEventListener(`click`, ()=>{cube.classList.toggle(`active`)});
	
	fragment.appendChild(cube);
    console.log("appended")
	//console.log(fragment);
}

canvas.appendChild(fragment);


//draw the alien
const allCubes = document.querySelectorAll(`.innactive`);
const alienDraw = [129,130,148,149,150,151,167,168,169,170,171,172,186,187,189,190,192,193,206,207,208,209,210,211,212,213,228,231,247,249,250,252,266,268,271,273]

for (toPaint of alienDraw) {
	allCubes[toPaint].classList.add(`active`); /* toggle also works here  */
}