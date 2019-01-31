$(function () {

	/* Efekt Smooth Scroll */

	$('a[href*="#"]:not([href="#"])').click(function () {

		$('html, body').animate({
			scrollTop: $(this.hash).offset().top - 74
		}, 500);
	});

	/* Scroll menu color change */

	if ($(window).scrollTop() >= 50) {
		$('#main-nav').addClass('scroll');
	}

	$(window).scroll(function () {
		if ($(window).scrollTop() >= 50) {
			$('#main-nav').addClass('scroll');
			$('#main-nav').css({
				'transition': 'all 0.3s'
			})
		} else {
			$('#main-nav').removeClass('scroll');
		}
	});

});

//tabela
var $rows = $('#table tr');
var $rowsHeadings = $('#table thead tr');


$('#search').keyup(function () {

	var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
		reg = RegExp(val, 'i'),
		text;

	$rows.show().filter(function () {
		text = $(this).text().replace(/\s+/g, ' ');
		return !reg.test(text);
	}).hide();
	$rowsHeadings.show()

});






//gra


const winChoice = "Polska";
let userChoice = '';
const fotos = [...document.querySelectorAll('.select img')];

const result = document.createElement('div');
result.classList.add('result-message');

function fotoSelection() {
	fotos.forEach(foto => foto.style.boxShadow = "");
	this.style.boxShadow = ' 0 0 30px rgb(228, 218, 24)';
	userChoice = this.dataset.option;
	result.remove();
	fotoName.style.opacity = 0;
}

const btn = document.querySelector('button.result');
const fotoName = document.querySelector('h2.foto-name');

function quizResult() {

	if (winChoice === userChoice) {
		result.textContent = "Brawo! dobra odpowiedz!";
		result.classList.remove('result-message-bad');
		fotoName.style.opacity = 1;

	} else {
		result.textContent = "Niestety, to zła odpowiedz. Sprobuj jeszcze raz...";
		result.classList.add('result-message-bad');
	}
	document.querySelector("section#quiz").appendChild(result);

	setTimeout(() => {
		result.remove();
	}, 5000)

}

fotos.forEach(foto => foto.addEventListener("click", fotoSelection));

btn.addEventListener('click', quizResult);