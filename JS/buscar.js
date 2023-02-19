function buscar() {
    var search = prompt("Termino de busqueda:");
    if (search == null || search == "") {
        alert("Busqueda Cancelada");
    } else {
        find(search)
    }
}