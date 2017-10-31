var save = document.querySelector('.save');
var save2 = document.querySelector('.save2');
var save3 = document.querySelector('.save3');

var like = document.querySelector('.like');
var like2 = document.querySelector('.like2');

var heart = document.querySelector('.heart');


function show() {
	save.classList.toggle('hide');
	save2.classList.toggle('show');

	//	console.error('aigfiasfgaifugafiagsi');
}
save3.addEventListener('click', show);

function showHeart() {
	like.classList.toggle('hide');
	like2.classList.toggle('show');

	//	console.error('aigfiasfgaifugafiagsi');
}

like.addEventListener('click', showHeart);

function hover() {
	heart.setAttribute("style", "height:2em;");
}

function hover2() {
	heart.setAttribute("style", "height:1.5em;");
}
heart.addEventListener('mouseover', hover);
heart.addEventListener('mouseout', hover2);
