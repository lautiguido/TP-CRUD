window.onload =inicio;
var inputNombre= document.getElementById("nombreCliente");
var inputApellido = document.getElementById("apellidoCliente");
var inputDireccion = document.getElementById("direccionCliente");
var inputCiudad = document.getElementById("ciudadCliente");
var inputProvincia = document.getElementById("provinciaCliente");
var inputCPCliente = document.getElementById("cpCliente");
var inputEmail = document.getElementById("emailCliente");
var inputBuscarCliente=document.getElementById("clienteABucar");

var btnBuscarCliente=document.getElementById("buscarCliente")

var cliente = {};
var clientes =[];

var clientes =JSON.parse(localStorage.getItem("nnn"));




function inicio(){
    btnBuscarCliente.addEventListener("click", buscarCliente);
}


function buscarCliente(){
    var clienteBuscado=clientes.find((cliente)=>{
        if (cliente.apellido===inputBuscarCliente.value)
        {return 1} 

        
    });


    //index = clientes.findIndex(function(cliente)){
     //   return cliente.apellido === inputBuscarCliente.value;
    //   });
    
    
    
    inputNombre.value = clienteBuscado.nombre;
    inputApellido.value = clienteBuscado.apellido;
    inputDireccion.value = clienteBuscado.direccion;
    inputCiudad.value = clienteBuscado.ciudad;
    inputEmail.value = clienteBuscado.email;
    inputProvincia.value = clienteBuscado.provincia;
    inputCPCliente.value = clienteBuscado.cp;

};