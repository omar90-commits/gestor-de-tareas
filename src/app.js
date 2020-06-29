import './index.css';
import { agregarTarea } from './Modulos/leerTarea';
import { mostrarTarea } from './Modulos/mostrartarea';
import { eliminarTarea } from './Modulos/eliminarTarea';
import { editarTarea } from './Modulos/editarTarea';
import { mensajeAlert } from './Modulos/mensajeAlert';
import { disabledBtnEliminar } from './Modulos/disabledBtnEliminar';
import { guardarLS, arrayTareasLS } from './Modulos/guardarLS';

let btnAgregar = document.querySelector('.boton');

const app = e => {
	e.preventDefault();

	let tarea = agregarTarea(btnAgregar.value);
	
	if (mensajeAlert(tarea)) return;

	mostrarTarea(tarea, btnAgregar.value);

	disabledBtnEliminar(tarea, false);

	guardarLS(tarea, btnAgregar);

	btnAgregar.value = "save";

	
	eliminarTarea(tarea); 
	editarTarea(tarea, btnAgregar);
}

btnAgregar.addEventListener('click', app);

window.addEventListener('DOMContentLoaded', () => {
	if (arrayTareasLS !== 0) {
		arrayTareasLS.forEach(element => {
			mostrarTarea(element, 'save');
			disabledBtnEliminar(element, false);

			btnAgregar.value = "save";
			
			eliminarTarea(element); 
			editarTarea(element, btnAgregar);
		});
	}
});