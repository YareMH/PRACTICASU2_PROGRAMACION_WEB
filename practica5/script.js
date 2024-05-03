function generatePDF() {
    var doc = new jsPDF();


var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var email = document.getElementById("email").value;
var rfc = document.getElementById("rfc").value;

doc.text ("Datos registrados correctamente",55,20);
doc.text ("Nombre: "+nombre, 15,35);
doc.text ("Apellido: "+apellido, 15,45);
doc.text ("Direccion de correo electronico: "+email, 15,55);
doc.text ("Numero de Registro Federal de Contribuyentes: " +rfc, 15,65);

doc.save(Fromulario.pdf);
}
