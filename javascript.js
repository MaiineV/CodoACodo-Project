function validarEnviar() {
    //valido el nombre
    if (document.fvalida.nombre.value.length <= 2) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }
    //valido el motivo de contacto
    if (document.fvalida.tema.selectedIndex == 0) {
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.interes.focus()
        return 0;
    }
    //valido el comentario
    comentario = document.fvalida.comentario.value
    if (comentario == "") {
        alert("Tiene que introducir un comentario")
        document.fvalida.edad.focus()
        return 0;
    } 
    
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}