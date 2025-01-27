/* En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla. Fucionalidades:

- Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
- Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
- Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
- Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la     lista y se mostrará en la página.

*/


// Función para agregar amigos

let amigos = []

function agregarAmigos() {
    // Capturar el nombre del campo de entrada: Utilizar document.getElementById para obtener el texto ingresado por el usuario.
    const nombreAmigo = document.getElementById('amigo').value;

    // Verificar si el campo de entrada está vacío, trim() elimina los espacios en blanco al principio y al final de una cadena.
    if (!nombreAmigo.trim()) {
        // Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
        alert('Por favor, inserte un nombre.');
    } else {
        // Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
        amigos.push(nombreAmigo.trim());

        // Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
        document.getElementById('amigo').value = '';

        // Mostrar la lista de amigos actualizada en la consola

        console.log('Lista de amigos actualizada:', amigos);

        // Actualizar la lista de amigos: Llamar a la función actualizarListaAmigos() para mostrar los nombres en la página.
        actualizarListaAmigos();
    }
}



/*Función para actualizar la lista de amigos

Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

- Obtener el elemento de la lista: Utilizar document.getElementById() para seleccionar la lista donde se mostrarán los amigos.
- Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
- Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
- Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/

function actualizarListaAmigos() {
    // Seleccionar la lista donde se mostrarán los amigos
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el arreglo y agregar los nombres como elementos de lista
    for (const amigo of amigos) {
        const li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo como contenido del <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
} 