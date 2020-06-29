let insertarMensajeError = document.querySelector('.row'),
	divAlert = document.createElement('div');

export const mensajeAlert = tarea => {
	let arrayAsignacionTareas = Array.from(document.querySelectorAll('.asignacion-tareas p')),
		copiaArrayAsignacionTareas = arrayAsignacionTareas.map(element => element.textContent);

	if (tarea.tareaValue.trim() === '' || tarea.descripcionValue.trim() === '') {
		divAlert.textContent = "TODOS LOS CAMPOS SON OBLIGATORIOS";
		divAlert.classList.remove('alert-warning');
		divAlert.classList.add('text-uppercase', 'alert-danger', 'text-center', 'col-12', 'alert', 'mx-5');

		insertarMensajeError.prepend(divAlert);

		return true;
	}

	if (copiaArrayAsignacionTareas.includes(`${tarea.tareaValue} - ${tarea.descripcionValue}`)) {
		divAlert.textContent = "ESTA TAREA YA AH SIDO INGRESADA ANTERIORMENTE";
		divAlert.classList.add('text-uppercase', 'alert-warning', 'text-center', 'col-12', 'alert');

		insertarMensajeError.prepend(divAlert);

		return true;
	}

	divAlert.remove();
}