// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');
const link = document.querySelectorAll('.navlink')

// Defining a function
function toggleNav() {
	burger.classList.toggle('fa-bars');
	burger.classList.toggle('fa-times');
	nav.classList.toggle('nav-active');

}

// Calling the function after click event occurs
burger.addEventListener('click', function () {
	toggleNav();
});

burger.onclick = function (e) {
	e.stopPropagation();

};

nav.onclick = function (e) {
	e.stopPropagation();

};

document.body.onclick = function () {
	nav.classList.remove('nav-active');
	burger.classList.remove('fa-times');
	burger.classList.toggle('fa-bars');

};


//Hide menu after clicking link
link.forEach(function (link) {
	link.onclick = function () {
		nav.classList.remove('nav-active');
		burger.classList.remove('fa-times');
		burger.classList.toggle('fa-bars');

	}
});









// ----------------------------------------------------------------

const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if (indicadorActivo.nextSibling) {
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if (indicadorActivo.previousSibling) {
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
	const indicador = document.createElement('button');

	if (i === 0) {
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});