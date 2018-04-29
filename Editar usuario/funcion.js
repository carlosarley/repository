function validateForm(){

	var nid=document.formulario.identificacion;
	var nombre=document.formulario.nombre;
	var apellidos=document.formulario.apellidos;
	var cargo=document.formulario.cargo;
	var tel=document.formulario.tel;
	var mov=document.formulario.movil;
	var estado=document.formulario.estado;

if(nombre.value == "")
{
	alert ("ingrese su nombre")
	return false;
}
if(apellidos.value == "")
{
	alert ("ingrese Apellidos")
	return false;
}
if(tel.value.length <=9)
{
	alert ("Los numeros ingresados en el fijo son  mayor a 9");
	return false;
}
	for (i=o; i< tel.value.length; i++)
	{
		if(isNaN(parseInt(tel.value.charArt(i)))==true)
		{
			alert ("Solo se permiten numeros en el Numero de telefono");
			return false;
		}
	}
if(mov.value.length !=10)
{
	alert ("Los numeros ingresados en el fijo son menor o mayor a 10");
	return false;
}
	for (i=o; i< mov.value.length; i++)
	{
		if(isNaN(parseInt(mov.value.charArt(i)))==true)
		{
			alert ("Solo se permiten numeros en el Numero de movil");
			return false;
		}
	}
if(estado.value == "")
{
	alert ("ingrese estado")
	return false;
}
if(cargo.value == "")
{
	alert ("ingrese cargo")
	return false;
}
if(nid.value.length <=10)
{
	alert ("Los numeros ingresados son menor a 7 digitos o mayor a 10");
	return false;
}
	for (i=o; i< nid.value.length; i++)
	{
		if(isNaN(parseInt(nid.value.charArt(i)))==true)
		{
			alert ("Solo se permiten numeros en el Numero de identificacion");
			return false;
		}
	}
}
