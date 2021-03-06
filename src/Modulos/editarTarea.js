import { disabledBtnEliminar } from './disabledBtnEliminar';

let tareaInput = document.querySelector('input:first-child'),
	descripcion = document.querySelector('textarea');

export let id = null;

export const editarTarea = (tarea, btn) => {	
	let btnEditar = document.querySelector(`#editar-${tarea.id}`);
	btnEditar.addEventListener('click', () => {
		disabledBtnEliminar(tarea, true);

		tareaInput.value = tarea.tareaValue;
		descripcion.value = tarea.descripcionValue;

		btn.value = "Update";

		id = tarea.id;
	});
}