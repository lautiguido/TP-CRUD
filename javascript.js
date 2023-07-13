window.onload =inicio;
var inputNombre= document.getElementById("nombreCliente");
var inputApellido = document.getElementById("apellidoCliente");
var inputDireccion = document.getElementById("direccionCliente");
var inputCiudad = document.getElementById("ciudadCliente");
var inputProvincia = document.getElementById("provinciaCliente");
var inputCPCliente = document.getElementById("cpCliente");
var inputEmail = document.getElementById("emailCliente");
var inputNombre = document.getElementById("nombreCliente");
var inputBuscarCliente=document.getElementById("clienteABucar");


var btnBuscarCliente=document.getElementById("buscarCliente")
var btnGuardarCliente=document.getElementById("guardarCliente");
var btnSigCliente=document.getElementById("sigCliente");
var btnAntCliente=document.getElementById("antCliente");
var btnBorrarCliente=doument.getElementById("borrarCliente");
var cliente = {};
var clientes =[];
var index = 0;

var clientes =JSON.parse(localStorage.getItem("nnn"));

function inicio(){
    btnGuardarCliente.addEventListener("click",guardar);
    btnSigCliente.addEventListener("click", siguenteCliente);
    btnAntCliente.addEventListener("click", anteriorCliente);
    btnBorrarCliente.addEventListener("click",borrarCliente);
    btnBuscarCliente.addEventListener("click", buscarCliente)

};

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

function borrarCliente(){
    clientes.splice(index,1);
    localStorage.setItem("nnn",JSON.stringify(clientes));
    anteriorCliente();

};


function guardar(){
    var cliente= {};
    
   

    cliente.nombre= inputNombre.value;
    cliente.apellido= inputApellido.value;
    cliente.direccion= inputDireccion.value;
    cliente.email= inputEmail.value;
    cliente.ciudad= inputCiudad.value;
    cliente.provincia= inputProvincia.value;
    cliente.cp= inputCPCliente.value;

    inputNombre.value="";
    inputApellido.value="";
    inputDireccion.value="";
    inputCiudad.value="";
    inputEmail.value="";
    inputProvincia.value="";
    inputCPCliente.value="";

    clientes.push(cliente);

    localStorage.setItem("nnn",JSON.stringify(clientes));


}

function siguenteCliente(){
    index++;
    cliente = clientes[index];
    inputNombre.value = cliente.nombre;
    inputApellido.value = cliente.apellido;
    inputDireccion.value = cliente.direccion;
    inputCiudad.value = cliente.ciudad;
    inputEmail.value = cliente.email;
    inputProvincia.value = cliente.provincia;
    inputCPCliente.value = cliente.cp;

    if( index==cliente.length-1){
        btnSigCliente.disable=true;
    }
};

function anteriorCliente(){
    index--;
    cliente = clientes[index];
    inputNombre.value = cliente.nombre;
    inputApellido.value = cliente.apellido;
    inputDireccion.value = cliente.direccion;
    inputCiudad.value = cliente.ciudad;
    inputEmail.value = cliente.email;
    inputProvincia.value = cliente.provincia;
    inputCPCliente.value = cliente.cp;
    btnSigCliente.disable=false

    if( index==0){
        btnAntCliente.disable=true;
    }
    

}

