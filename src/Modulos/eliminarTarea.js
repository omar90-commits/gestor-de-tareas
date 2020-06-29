import { id } from './editarTarea';
import { arrayTareasLS } from './guardarLS';

export const eliminarTarea = tarea => {
	let listaTareas = document.querySelector(`#tarea-${tarea.id}`),
		btnEliminar = document.querySelector(`#eliminar-${tarea.id}`);
	
	btnEliminar.addEventListener('click', () => {
		const index = arrayTareasLS.findIndex(element => element.id === tarea.id);
		arrayTareasLS.splice(index, 1);

		localStorage.setItem('task', JSON.stringify(arrayTareasLS));
		listaTareas.remove();
	});
}