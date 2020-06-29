export const disabledBtnEliminar = (tarea, estadoDisabled) => {	
	let btnEliminarAllObtener = Array.from(document.querySelectorAll('.btn-danger'));		

	btnEliminarAllObtener.forEach(element => {
		element.style.cursor = 'pointer';
		element.removeAttribute('disabled');

		if (element.getAttribute('id') === `eliminar-${tarea.id}` && estadoDisabled) {
			element.style.cursor = 'no-drop';
			element.setAttribute("disabled", '');
		}		
	});
}