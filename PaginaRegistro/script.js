/ Crear un array para almacenar los clientes registrados /
const clientesRegistrados = [];

document.getElementById("cliente-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    // Crear un objeto cliente con los datos ingresados
    const cliente = {
        nombre,
        email,
        telefono
    };

    // Agregar el cliente al array
    clientesRegistrados.push(cliente);

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";

    // Actualizar la lista de clientes registrados
    actualizarListaClientes();
});

function actualizarListaClientes() {
    const listaClientes = document.getElementById("lista-clientes");
    listaClientes.innerHTML = "";

    clientesRegistrados.forEach((cliente) => {
        const item = document.createElement("li");
        item.textContent = `Nombre: ${cliente.nombre}, Correo Electrónico: ${cliente.email}, Teléfono: ${cliente.telefono}`;
        listaClientes.appendChild(item);
    });
}