let amigos = [];
// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    let nombre = document.getElementById('inputAmigo').value;

    // Validar que el campo no esté vacío
    if (nombre.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Añadir el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById('inputAmigo').value = "";

    // Actualizar la lista visible en la página
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista antes de agregar los nuevos elementos
    lista.innerHTML = "";

    // Recorrer el array de amigos y crear elementos <li> para cada uno
    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("Por favor, añade al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSorteado}`;
}
