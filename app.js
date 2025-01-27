/* En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en 
una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados 
se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno 
de los nombres de forma aleatoria, mostrando el resultado en pantalla. Fucionalidades:

*Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista 
    visible al hacer clic en "Adicionar".
*Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
*Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
*Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la 
    lista y se mostrará en la página.

*/
let amigos = []

// Función para agregar amigos


function agregarAmigos() {
    // Capturar el nombre del campo de entrada: Utilizar document.getElementById para obtener el texto ingresado por el usuario.
    const nombreAmigo = document.getElementById('amigo').value;

    // Verificar si el campo de entrada está vacío
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
    }
}