// Arrays para almacenar los datos
let listaNombresGastos = [];
let listaValorGastos = [];
let listaDescripcionesGastos = [];
let listaCategoriasGastos = [];

// Función para agregar un gasto
function clickBoton() {
    const nombreGasto = document.getElementById('nombreGasto').value;
    const valorGasto = parseFloat(document.getElementById('valorGasto').value);
    const descripcionGasto = document.getElementById('descripcionGasto').value;
    const categoriaGasto = document.getElementById('categoriaGasto').value;

    if (nombreGasto && valorGasto && descripcionGasto && categoriaGasto) {
        listaNombresGastos.push(nombreGasto);
        listaValorGastos.push(valorGasto);
        listaDescripcionesGastos.push(descripcionGasto);
        listaCategoriasGastos.push(categoriaGasto);
        
        // Limpiar los campos después de agregar
        document.getElementById('nombreGasto').value = '';
        document.getElementById('valorGasto').value = '';
        document.getElementById('descripcionGasto').value = '';
        document.getElementById('categoriaGasto').value = '';

        actualizarListaGasto();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para actualizar la lista de gastos y el total
function actualizarListaGasto() {
    const listaDeGastos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = listaValorGastos[posicion];
        const descripcion = listaDescripcionesGastos[posicion];
        const categoria = listaCategoriasGastos[posicion];
        
        htmlLista += `<li>
            ${elemento} - Soles ${valorGasto} - ${descripcion} - ${categoria}
            <button onclick="editarGasto(${posicion})">Editar</button>
        </li>`;
        
        totalGastos += valorGasto;
    });

    listaDeGastos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);

    // Alerta si el total excede 100 soles
    if (totalGastos >= 100) {
        alert("¡El total ha alcanzado o superado los 100 soles!");
    }
}

// Función para editar un gasto
function editarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValorGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionesGastos[posicion];
    document.getElementById('categoriaGasto').value = listaCategoriasGastos[posicion];

    // Elimina el gasto actual para que se pueda re-agregar
    listaNombresGastos.splice(posicion, 1);
    listaValorGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1);
    listaCategoriasGastos.splice(posicion, 1);
}

// Función para limpiar la lista de gastos
function limpiarGastos() {
    listaValorGastos = [];
    listaNombresGastos = [];
    listaDescripcionesGastos = [];
    listaCategoriasGastos = [];
    actualizarListaGasto();
}


 