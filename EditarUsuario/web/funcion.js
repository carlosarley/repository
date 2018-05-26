function validateForm() {
    var ok = true;
    var nid = document.formulario.identificacion;
    var nombre = document.formulario.nombre;
    var apellidos = document.formulario.apellidos;
    var cargo = document.formulario.cargo;
    var tel = document.formulario.tel;
    var mov = document.formulario.movil;
    var estado = document.formulario.estado;
    validarCampos(nid,nombre,apellidos,cargo,tel, mov,estado);
    }
    function validarCampos(nid,nombre,apellidos,cargo,tel, mov,estado){
    
    
    if (nombre.length >= 1)
    {
        if (apellidos.length >= 1)
        {
            if (tel.value.length >= 9)
            {
                for (i = o; i < tel.value.length; i++)
                {
                    if (isNaN(parseInt(tel.value.charArt(i))) == true)
                    {
                        alert("Solo se permiten numeros en el Numero de telefono");
                        ok = false;
                    }
                }              
               
            } else { alert("Los numeros ingresados en el fijo son  mayor a 9");}
               
            

        } else {
            alert("ingrese Apellidos");
        }
    } else {
        alert("ingrese su nombre");
        focus();
    }





    /*if (mov.value.length != 10)
    {
        alert("Los numeros ingresados en el fijo son menor o mayor a 10");
        ok = false;
    }
    for (i = o; i < mov.value.length; i++)
    {
        if (isNaN(parseInt(mov.value.charArt(i))) == true)
        {
            alert("Solo se permiten numeros en el Numero de movil");
            ok = false;
        }
    }
    if (estado.value == "")
    {
        alert("ingrese estado")
        ok = false;
    }
    if (cargo.value == "")
    {
        alert("ingrese cargo")
        ok = false;
    }
    if (nid.value.length <= 10)
    {
        alert("Los numeros ingresados son menor a 7 digitos o mayor a 10");
        ok = false;
    }
    for (i = o; i < nid.value.length; i++)
    {
        if (isNaN(parseInt(nid.value.charArt(i))) == true)
        {
            alert("Solo se permiten numeros en el Numero de identificacion");
            ok = false;
        }
    }
    alert(ok);*/
}
    
    


