/* Función para agregar amigos

Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
Tareas específicas:

- Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
- Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
- Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
- Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
*/

let amigos = []

function agregarAmigos() {
    // Capturar el nombre del campo de entrada: Utilizar document.getElementById para obtener el texto ingresado por el usuario.
    const nombreAmigo = document.getElementById('amigo').value;

    // Verificar si el campo de entrada está vacío
    // trim() elimina los espacios en blanco al principio y al final de una cadena.
    if (!nombreAmigo.trim()) {
        // Validar la entrada. Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
        alert('Por favor, inserte un nombre.');
    } else {
        // Actualizar el array de amigos. Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método .push().
        amigos.push(nombreAmigo.trim());

        // Limpiar el campo de entrada. Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
        document.getElementById('amigo').value = '';

        // Actualizar la lista de amigos. Llamar a la función actualizarListaAmigos() para mostrar los nombres en la página.
        actualizarListaAmigos();
    }

    // Mostrar la lista de amigos actualizada en la consola
    console.log('Lista de amigos actualizada:', amigos);
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
        // Crear un nuevo elemento <li>
        const li = document.createElement('li'); 

        // Asignar el nombre del amigo como contenido del <li>
        li.textContent = amigo;

        // Agregar el <li> a la lista 
        lista.appendChild(li); 
    }
} 

/*Función para sortear los amigos

Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

Tareas específicas:

- Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
- Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
- Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
- Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.

*/

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

    // Mostrar el resultado del sorteo con el estilo correcto
    resultado.classList.add('result-list');  // Aplica la clase de estilo
    resultado.style.display = 'block'; // Asegurar que se muestre
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}.`;

    // Ocultar la lista de amigos
    document.getElementById('listaAmigos').style.display = 'none';
}