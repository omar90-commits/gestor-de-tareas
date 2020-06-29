import { id } from './editarTarea';
import { arrayTareasLS } from './guardarLS';

let tarea = document.querySelector('input:first-child'),
	descripcion = document.querySelector('textarea'),
	cont = arrayTareasLS.length === 0 ? 0 : arrayTareasLS[arrayTareasLS.length - 1].id + 1;

export const agregarTarea = valueBtn => {
	let tareaValue = tarea.value,
		descripcionValue = descripcion.value;
	
	let objetoTarea = {
		tareaValue,
		descripcionValue,
		id: valueBtn === 'save' ? cont++ : id
	}

	tarea.value = "";
	descripcion.value = "";

	return objetoTarea;
}