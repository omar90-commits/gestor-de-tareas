let listaTarea = document.querySelector('.lista-tareas');

export const mostrarTarea = (tarea, valueBtn) => {

	if (valueBtn === 'save') {
		let div = document.createElement('div'),
			templete = `<p>${tarea.tareaValue.toLowerCase()} - ${tarea.descripcionValue.toLowerCase()}</p>
					<button class="btn btn-danger text-uppercase py-2 px-4" id="eliminar-${tarea.id}">DELETE</button>
		<button class="btn btn-warning text-uppercase py-2 px-4 text-light" id="editar-${tarea.id}">UPDATE</button>`;

		div.classList.add('asignacion-tareas', 'py-3', 'pl-md-4', 'text-center', 'text-md-left');
		div.setAttribute('id', `tarea-${tarea.id}`)
		div.innerHTML = templete;

		listaTarea.appendChild(div);
	
	} else {
		let editarTarea = document.querySelector(`#tarea-${tarea.id} p`);
		editarTarea.textContent = `${tarea.tareaValue.toLowerCase()} - ${tarea.descripcionValue.toLowerCase()}`;
	}

	return 0;
}