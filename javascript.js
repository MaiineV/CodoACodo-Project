function validarEnviar() {
    //valido el nombre
    if (document.fvalida.nombre.value.length <= 2) {
        alert("Debe escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

    //valido el apellido
    if (document.fvalida.apellido.value.length <= 2) {
        alert("Debe escribir su apellido")
        document.fvalida.apellido.focus()
        return 0;
    }
    //valido el motivo de contacto
    if (document.fvalida.tema.selectedIndex == 0) {
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.tema.focus()
        return 0;
    }

    //valido el comentario
    comentario = document.fvalida.comentario.value
    if (comentario == "") {
        alert("Debe escribir un comentario")
        document.fvalida.comentario.focus()
        return 0;
    } 
    
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}