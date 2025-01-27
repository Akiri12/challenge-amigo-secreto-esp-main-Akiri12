let amigos = []

function agregarAmigos() {
    // Capturar el nombre del campo de entrada: Utilizar document.getElementById para obtener el texto ingresado por el usuario.
    const nombreAmigo = document.getElementById('amigo').value;

    // Verificar si el campo de entrada está vacío. Trim() elimina los espacios en blanco al principio y al final de una cadena.
    if (!nombreAmigo.trim()) {
        // Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
        alert('Por favor, inserte un nombre.');
    } else {
        // Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
        amigos.push(nombreAmigo.trim());

        // Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
        document.getElementById('amigo').value = '';

        // Actualizar la lista de amigos: Llamar a la función actualizarListaAmigos() para mostrar los nombres en la página.
        actualizarListaAmigos();
    }

    // Mostrar la lista de amigos actualizada en la consola

    console.log('Lista de amigos actualizada:', amigos);
}


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

function sortearAmigo() {
    const resultado = document.getElementById('resultadoSorteo');

    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía. Por favor, añade amigos primero.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo
    resultado.style.display = 'block';
    resultado.style.color = 'blue';
    resultado.style.fontWeight = 'bold';
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}.`;

    // Ocultar la lista
    document.getElementById('listaAmigos').style.display = 'none';
}