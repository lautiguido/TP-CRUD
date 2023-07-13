window.onload =inicio;

var inputBuscarProd=document.getElementById("buscarProd");
var inputCodigoProd=document.getElementById("codigoProd");
var inputDescripcionProd=document.getElementById("descripcionProd");
var inputPresentacionProd=document.getElementById("presentacionProd");
var inputPrecioProd=document.getElementById("precioProd");



var productos={};
var productos=[];
var index=-1;

productos=JSON.parse(localStorage.getItem("prod"));

var btnGuardarProd=document=getElementById("guardarProd");
var btnSiguienteProd=document=getElementById("siguienteProd");
var btnAntreiorProd=document=getElementById("anteriorProd");
var btnBuscarProd=document=getElementById("btnBuscarProd");


function inicio(){
    btnGuardarProd.addEventListener("click", guardarProd);
    btnSiguienteProd.addEventListener("click",siguienteProd);
    btnAnteriorProd.addEventListener("click", anteriorProd);
    btnBuscarProd.addEventListener("click", buscarProd);

};

function guardarProd(){
    var producto= {};
    
   

    producto.codigo= inputCodigoProd.value;
    producto.descripcion= inputDescripcionProd.value;
    producto.presentacion= inputPresentacionProd.value;
    producto.precio= inputPrecioProd.value;

    console.log(producto);
   
    inputCodigoProd.value="";
    inputDescripcionProd.value="";
    inputPresentacionProd.value="";
    inputPrecioProd.value="";
    
    

    productos.push(producto);

    localStorage.setItem("nnn",JSON.stringify(productos));


};

function siguienteProd(){
    index++;
    producto = producto[index];
    inputCodigoProd.value = producto.codigo;
    inputDescripcionProd.value=producto.descripcion;
    inputPresentacionProd.value=presentacion;
    inputPrecioProd.value =producto.precio;
    
    btnAntProducto.disable=false
    if( index==producto.length-1){
        btnSigProd.disable=true;
    }
};

function anteriorProd(){
    index++;
    producto = producto[index];
    inputCodigoProd.value = producto.codigo;
    inputDescripcionProd.value=producto.descripcion;
    inputPresentacionProd.value=presentacion;
    inputPrecioProd.value =producto.precio;
    
    btnSiguienteProd.disable=false
    
    if( index==0){
        btnanteriorProd.disable=true;
    }
};

function buscarProducto(){
    var ProductoBuscado=productos.find((producto)=>{
        if (producto.codigo===inputBuscarProd.value);
        {return 1} 

        
    });
    

    index = productos.findIndex(function(producto){
        return producto.codigo === inputBuscarProd.value;
       });
    
       inputCodigoProd.value=ProductoBuscado.codigo;
       inputDescripcionProd.value=ProductoBuscado.descripcion;
       inputPresentacionProd.value=ProductoBuscado.presentacion;
       inputPrecioProd.value=ProductoBuscado.precio;
};

