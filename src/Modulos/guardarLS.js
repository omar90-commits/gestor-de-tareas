//Obtener local storage
const obtenerLS = JSON.parse(localStorage.getItem('task'));

export const arrayTareasLS = obtenerLS === null ? [] : obtenerLS;

export const guardarLS = (tarea, btnAgregar) => {
	if (btnAgregar.value === 'save') arrayTareasLS.push(tarea);
	else {
		const index = arrayTareasLS.findIndex(element => element.id === tarea.id);
		arrayTareasLS[index] = tarea;
	}

	localStorage.setItem('task', JSON.stringify(arrayTareasLS));

	return 0;
}