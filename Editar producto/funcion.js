function validateForm(){

	var codigo=document.formulario.codigo;
	var nombre=document.formulario.nombre;
	var referencia=document.formulario.referencia;
	var cargo=document.formulario.cargo;
	var categoria=document.formulario.categoria;
	var descripcion=document.formulario.descripcion;
	var estado=document.formulario.estado;

if(nombre.value == "")
{
	alert ("ingrese su nombre")
	return false;
}
if(codigo.value == "")
{
	alert ("ingrese codigo")
	return false;
}
if(referencia.value == "")
{
	alert ("ingrese referencia")
	return false;
}
if(categoria.value == "")
{
	alert ("ingrese categoria")
	return false;
}
if(descripcion.value == "")
{
	alert ("ingrese descripcion")
	return false;
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
}